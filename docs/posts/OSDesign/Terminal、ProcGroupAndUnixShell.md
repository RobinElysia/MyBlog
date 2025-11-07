---

title: 终端、进程组和 UNIX Shell
description: 终端、进程组和 UNIX Shell
date: 2025-10-06
timeline: true
head:
  - - meta
    - name: keywords
      content: 终端、进程组和 UNIX Shell
  - - meta
    - name: description
      content: 终端、进程组和 UNIX Shell
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 操作系统设计原理

---

<link rel="stylesheet" href="/css/font-style.css">

# 终端、进程组和 UNIX Shell

## 前言

&emsp;我们已经知道如何用 “文件描述符” 相关的系统调用访问操作系统中的对象：`open, read, write, lseek, close`。操作系统也提供了 `mount, pipe, mkfifo` 这些系统调用能 “创建” 操作系统中的对象。当然，我们也知道操作系统中的对象远不止于此，还有很多有趣的对象我们还没有深入了解过——终端就让人细思恐极。

&emsp;本讲内容：从大家每天用的终端模拟器开始，一探究竟 `Ctrl+C` 到底做了什么——在此基础上，我们就可以实现自己的 “多任务管理器” 了。

## 从打字机开始的故事

&emsp;一切都要从打字机说起。早期的输入设备之一：敲下一个键，金属杆子打在纸上，留下墨迹。但很可惜的是，每一次决策都是一次性的输出，没有撤销、没有编辑。打错字，就意味着重来（回头、选中、划掉）。

&emsp;随着电气化时代到来，人们给打字机加上了电信号，于是诞生了 TeleTypewriter —— 电传打字机，也就是 `TTY`。`TTY` 是输入和输出合体的设备，能够通过线路把字符传送到远端。它是一种人类与计算机最原始的通信协议——一边输入字符，一边打印输出。

<img src="/assets/img/OS/QWERTY.png" style="display: block;margin: 0 auto;" />

&emsp;一些设计遗产就这样流传下来，也就是各位在上一篇文章中看到的 `/dev/` 下的 `tty` 文件。除此以外，有一些按键也遗留了下来，比如 `Shift` 键（切换字符集）、`\r\n`（回车 + 换行）以及 `Backspace`。`\r` 是 Carriage Return（回车），`\n` 是 Line Feed（换行），电报时代它们是两条独立的信号线。`Unix` 把它们合并为 `\n`，而 `Windows` 则坚持两者并存。几十年过去，这个“小分歧”依然在我们面前晃悠。

&emsp;可以说，每当我们在命令行敲击键盘时，仍然能听到那个时代打字机的“咔哒”回响。

&emsp;`Teletype Model 28 (1951);` [technical data sheet](http://www.samhallas.co.uk/repository/telegraph/teletype_28_tech_data.pdf)

<img src="/assets/img/OS/TypewriterKey.png" style="display: block;margin: 0 auto;" />

## 终端的蜕变：从金属到玻璃

&emsp;到了 1978 年，DEC 公司推出了 `VT100（Video Teletypewriter 100）`，这台终端几乎可以说是“封神之作”。它第一次完整实现了 `ANSI Escape Sequence`（ANSI 转义序列）——一种通过特殊字符控制光标移动、颜色显示、清屏等行为的标准协议。从此，终端不再只是“被动显示字符”的设备，而是能响应指令、控制布局、甚至绘制界面的“智能屏幕”。VT100 的出现，彻底统一了终端的控制规范，成为事实上的行业标准；无论是后来 `Unix` 的 `xterm、Linux` 的 `tty`，还是今天的 `VSCode` 终端、`SSH` 客户端，都在模拟 `VT100` 的行为。它的 `80×24` 字符显示布局 也成为此后几十年终端的默认尺寸——一种被所有操作系统、开发工具、甚至 IDE 沿用至今的“无形约定”。可以说，VT100 不只是一个硬件，它定义了“终端”的语法，奠定了整个命令行世界的显示语言。

<img src="/assets/img/OS/VT100.png" style="display: block;margin: 0 auto;" />

&emsp;而我们今天看到的终端，其实都不再是真正意义上的“终端”。严格地说，它们是 伪终端（Pseudo Terminal，简称 PTY），存在于 `/dev/pts` 目录下。当你打开一个新的终端窗口时，`Linux` 会立即为你创建一个类似 `/dev/pts/3` 的设备节点。这个节点并不直接对应物理设备，而是内核模拟出来的一个“虚拟终端”，让用户空间的程序可以像操作真实终端一样与系统交互。

&emsp;伪终端由一对设备组成：`Master` 端（控制台）和 `Slave` 端（窗口端）。`Master` 负责捕获并转发输入输出，而 `Slave` 则是用户实际看到和操作的那部分——你在上面敲命令、看到输出，其实都是这对“主从设备”在协作完成。从内核视角看，终端与键盘、显示器并无二致，它也是一种“字符型设备文件”（这些终端本身也是“文件”。在 `Linux` 里，几乎一切都是文件，而终端也不例外）。这时再回想那句“万物皆文件”，是不是更有味道了？终端不过是文件系统中的一个对象——一个能缓存输入、输出，并进行交互的特殊文件。

<img src="/assets/img/OS/PTYMasterAndPTYSlave.png" style="display: block;margin: 0 auto;" />

&emsp;如果你有心，可以手搓一个终端——用 `openpty()` 或 `posix_openpt()` 创建一个伪终端设备，给它配好 `Master` 和 `Slave`，就能让一个进程“假装”是一个终端。`Linux` 会乖乖地在 `/dev/pts/` 下为你生成对应设备。它们都不是“真的终端”，而是操作系统模拟的“对象”。是的，又是对象。Linux 世界里，连一块虚拟屏幕也是对象（

## 操作系统的真终端

&emsp;不过，别以为这就是全部。那种你在启动阶段按下 `Ctrl + Alt + F1` 进入的黑框框，其实是“真终端”。它不是 `/dev/pts` 下的伪设备，而是 `/dev/tty1、tty2……` 这些设备来自真正的硬件映射，是内核初始化时分配的。

&emsp;在传统的 `UNIX` 系统中，每个终端都是一个物理接口，可能连着不同的用户。几十年前，一台大型主机往往接上几根长长的串口线，不同的人坐在不同的终端前操作同一台机器。这就是“多用户”的起源。

&emsp;当系统启动时，`init`（或者现代的 `systemd`）会为每个终端启动一个 `getty` 进程。`getty` 打开 `/dev/ttyX`，显示 `“login:”` 提示符。当你输入用户名密码并登录后，`login` 进程会把这个终端的控制权交给你的 `shell`，比如 `bash`。内核还会偷偷改写这个设备文件的权限，让你这个用户可以读写它。于是，你的输入、输出就都绑定在这个终端上。`Shell` 成了控制进程，终端成了你的控制台。

&emsp;`SSH` 其实也一样。只是这次“终端”是假的，`sshd` 进程会在内存里创建一个伪终端，并把你的输入输出重定向过去。`VSCode` 内置终端、网页终端，本质上都重复了同一套模式：`fork → openpty → exec → attach`，就像我在上一篇文章说的那样。

下面是一段创建伪终端的典型 `C` 代码：

```c
#include <pty.h>
#include <utmp.h>
#include <unistd.h>

int main() {
    int master_fd, slave_fd;
    char slave_name[100];

    openpty(&master_fd, &slave_fd, slave_name, NULL, NULL);
    printf("伪终端创建成功: %s\n", slave_name);

    if (fork() == 0) {
        close(master_fd);
        login_tty(slave_fd);
        execlp("bash", "bash", NULL);
    } else {
        close(slave_fd);
        // 父进程与终端交互
        while (1) {
            char buf[256];
            int n = read(master_fd, buf, sizeof(buf));
            write(1, buf, n);
        }
    }
}
```

## 控制的艺术：CLI 的巅峰

&emsp;进入系统后，我们面对的是 `CLI（Command-Line Interface）`。它是人机交互的巅峰之一：抽象、强大、简洁到几乎“残忍”。每一次输入，都是一次系统调用的触发；每一行输出，都是文件描述符流出的数据。

&emsp;`CLI` 的设计并非偶然。早期计算机资源有限，没有 `GPU`、没有窗口系统，命令行就是一切。`GUI`（图形界面）的出现，只是后来硬件允许我们多展示一点“友善”。但从内核角度看，它们其实没什么区别——`GUI` 的“按钮事件”，不过是 `CLI` 的“信号机制”的另一种外壳。

<img src="/assets/img/OS/GUIAndCLI.png" style="display: block;margin: 0 auto;" />

&emsp;但是，我们一直会有疑问，我们再按住 `Ctrl+C` 后，到底是怎么杀掉我们的进程的？系统是怎么知道我们到底要杀掉哪个进程的？比如，我们在终端里跑的 `Python`，然后按 `Ctrl + C`，`Python` 会提示 `“KeyboardInterrupt”`；但如果你在后台跑，它就不会管你。

***答案：终端才不管呢！！！***

&emsp;这背后有一套非常优雅的机制：进程组（Process Group）和会话（Session）。

&emsp;每个进程在 `Linux` 里都有一个 `PGID`（进程组 `ID`）。默认情况下，子进程继承父进程的组。`Shell` 启动时，它自己也是一个进程组的领导者。当你在 `Shell` 里运行一个命令，`Shell` 会 `fork()` 一个子进程，并通过 `setpgid()` 把它放入新的进程组，然后用 `tcsetpgrp()` 把这个组设为终端的“前台进程组”。

&emsp;从这一刻起，终端的输入就归这个组所有。

&emsp;当你按下 `Ctrl + C`，终端驱动（Kernel TTY layer）会把 `^C` 转换为 `SIGINT` 信号，然后调用 `kill(-pgid, SIGINT)`。注意看，信号发送的目标是整个前台进程组，而不是单个进程。也就是说，`Shell`、`Python`、或者你正在运行的程序，只要属于当前前台组，全都会收到 `SIGINT`。这也是为什么我们在终端里能“一键杀掉”整个前台任务。

&emsp;如果你用 `Ctrl + Z` 暂停一个程序，系统会发出 `SIGTSTP`，程序就会挂起；`Shell` 会重新拿回终端控制权（通过 `tcsetpgrp()`），再次成为前台。用 `fg` 或 `bg`，你又能把程序恢复。这看起来神奇，其实这一切都是“`信号 + 进程组`”在默默合作。

&emsp;这套机制之所以存在，是因为终端仅仅只是一个“舞台”，而 `Shell` 才是“导演”。后台程序只是暂时离开舞台，但仍在后台执行（&）。前台程序独占终端，直到结束。`Shell` 通过 `waitpid()` 等待演员谢幕，然后重新上场。

&emsp;这种“剧场式”调度在今天看来略显原始，但它曾是多任务系统的奇迹。它让一个小小的命令行能够同时操纵几十个进程，还能切换、挂起、唤醒。`UNIX` 之所以伟大，不仅是因为它稳定，而是因为它“优雅地做错事”：当你按下 `Ctrl + C` 时，它从不直接“暴力终止”，而是通过信号机制、有序地让前台进程组“自行退场”。

## 进程组的背后：会话的诞生

&emsp;但是我们一概来谈谈 `进程组与会话` 的。我们的进程组其实只是中间层。它的上层是“会话”（Session）。每个登录 `Shell` 都有自己的 `Session ID`。当你通过 `SSH` 登录时，`sshd` 会创建一个新的会话；当你退出时，这个会话下的所有进程都会随之消亡。这也是为什么在退出 `SSH` 后，后台任务也会被杀掉——除非你用 `nohup`，它会把进程脱离会话，避免被“连坐”。

&emsp;详细来说：`Session ID` 是“会话”的标识符，用来把一组相关进程归为一个更大的逻辑单元。子进程会继承父进程的 `Session ID`，因此同一登录会话中的所有进程都属于同一个“会话家族”。一个会话通常对应一个 控制终端（controlling terminal），也就是用户登录时绑定的那个终端设备。当这个会话的领导进程（通常是登录 `Shell`）退出时，系统会向该会话下所有进程发送一个 `SIGHUP` 信号，通知它们“主人走了”——于是后台任务也随之被挂起或终止；而 `进程组 ID`（Process Group ID）则用来组织同一会话内的进程集合。每个时刻，一个终端只能有一个前台进程组，也就是当前接受输入的那一组进程。当我们按下 `Ctrl + C` 时，操作系统并不会去找单个进程，而是将 `SIGINT` 信号广播给整个前台进程组，实现“集体中断”。

<img src="/assets/img/OS/PGIDAndSID.png" style="display: block;margin: 0 auto;" />

&emsp;这套机制背后的系统调用包括 `setsid()、setpgid()、tcsetpgrp()` 等。每一个调用都藏着一段 `UNIX` 历史。那时候没有图形界面，没有“任务管理器”，系统必须靠这种分组信号机制来保证用户与内核之间的秩序。这确实不优雅（各种 id...[Setuid Demystified](https://www.usenix.org/conference/11th-usenix-security-symposium/setuid-demystified)）。

## 当世界有了 GUI

&emsp;后来，Windows 出现了。`Windows` 并不使用这种“终端 + 信号 + 进程组”的模型。它用“消息”来驱动窗口。你点击 ❌，系统发出 `WM_CLOSE` 消息；最小化、最大化，对应的是 `WM_SYSCOMMAND`。进程不再被“信号”打断，而是“收到消息”。开发者只需关心消息处理函数，系统会自动路由到对应窗口。这就是`“Don’t make me think”`哲学：你不必理解信号、进程组，只要知道“点 ❌ 会关窗口”就行。

&emsp;而 `Android` 则走得更远。它把每个应用看作一个独立用户，杀掉应用就相当于终止该用户下所有进程。看似高层封装，实则底层依然延续 `UNIX` 的“用户隔离”思想。从终端到消息，从信号到事件，人机交互的核心没变：谁在控制，谁响应。

## 历史的糟粕与遗产

&emsp;是的，这一切在今天看来都像历史的糟粕。`TTY`、会话、进程组、信号——这些机制充满了临时拼凑的味道。没有哪位设计师在 `1970` 年能预见 `2025` 年我们会在浏览器里运行终端。他们只是想“让电传机动起来”，于是有了文件描述符、伪终端、信号分发。但正因为这些“草台班子式”的设计，才让 `UNIX` 有了惊人的生命力。

&emsp;每一个输入、每一个中断、每一次 `Ctrl + C`，都是几十年技术的传承。今天我们用 `GUI`、用容器、用远程桌面，本质上仍然在延续那台打字机的精神：一切皆连接，一切皆对象，一切皆可控制...

## Shell：字符串的魔法

&emsp;讲完终端和进程，我们该回到主角——`Shell`。

&emsp;`Shell` 是 `UNIX` 世界最早也是最成功的 `DSL`（领域特定语言）。它只有一种数据类型：字符串。无论你是变量、命令、函数，最终都会被展开成文本再执行。`C` 语言的预处理器其实也干同样的事：在编译前对代码做“纯文本替换”。这也解释了为什么 `Shell` 那么“脆弱”——少一个引号就会天翻地覆。

&emsp;管道 (|) 则是 `UNIX` 最伟大的创造之一。它让不同的程序通过标准输入输出直接通信。`cat file | grep hello | wc -l` 这行命令里，三个进程被管道串联，数据从一个进程的 `stdout` 流入另一个进程的 `stdin`。在底层，内核只是建立了一些匿名管道（file descriptor），`Shell` 负责 `fork()` 各个子进程并连线。它像在搭积木：每个命令都是组件，管道是胶水。

```bash
# 相当于伪代码逻辑：
p1 = fork(); exec("cat", "file")
p2 = fork(); exec("grep", "hello")
p3 = fork(); exec("wc", "-l")
pipe(p1.stdout, p2.stdin)
pipe(p2.stdout, p3.stdin)
```

一行命令，就是一条微型流水线。`Shell` 的优雅之处正在于此：复杂系统由最简单的文本流组合而成。这正是 `UNIX` 哲学的核心——**组合优于复杂**。

## 最后

&emsp;今天，我们坐在 `GUI` 桌面前，打开 `VSCode`、敲命令、调试容器。那些 `/dev/pts/、tty、setpgid、SIGINT` 似乎离我们很远。但当你在 `VSCode` 终端里敲下 `ls` 时，其实内核仍然在模拟着一台 1970 年代的电传打字机：一串字符通过伪终端流入 `Shell`，再流出屏幕。

&emsp;所有这些复杂的层级——伪终端、进程组、会话、信号——都在默默支撑我们与机器的对话。它们不是完美的设计，而是历史的妥协与工程的智慧。

&emsp;所以，下次当你按下 `Ctrl + C`，请记得：你不是在打断一个进程，而是在触碰整个 `UNIX` 世界的骨架。