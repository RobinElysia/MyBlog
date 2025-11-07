---

title: 操作系统当中的“对象”：Linux的文件
description: 操作系统当中的“对象”：Linux的文件
date: 2025-09-20
timeline: true
head:
  - - meta
    - name: keywords
      content: 操作系统当中的“对象”：Linux的文件
  - - meta
    - name: description
      content: 操作系统当中的“对象”：Linux的文件
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 操作系统设计原理

---

<link rel="stylesheet" href="/css/font-style.css">

## 前言

&emsp;在之前的两篇文章中，我们提到了<font class="strong">关于“计算机就是一个大大的状态机”这么一个观点，并做出了解释。除此以外还有：创建(fork)、复位(execve)和退出(_exit)线程与内存(*mmp、munmap、mprotect、mmap)之上的事</font>。事实上，这些仅仅是简单的概述，对于操作系统而言可<font class="strongYellow">没那么简单</font>。你们大概听说过<font class="strongGreen">“万物皆对象”</font>这个观点，对，我在[第一篇文章的最后](./浅谈计算机设计哲学—“贯穿计算机硬件、操作系统与程序的万能状态机”.md)也有提到，但是<font class="underline-gradient">究竟有哪些对象？这些对象是什么样的？我们一概不知...</font>这篇文章就是为这些问题而来的，即标题：操作系统当中的“对象”。

## 我们的重中之重：文件描述符

&emsp;<font class="strongYellow">文件是操作系统中的一种对象，可是文件究竟是什么呢？有名字的数据？字节流 or 字节序列？</font>我们可以进入`dev`看看当中的文件：

<img src="/assets/img/OS/dev.png" style="zoom:30%;display: block;margin: 0 auto;" alt="dev" />

&emsp;可以看到有很多文件，它们大多类似于 <font class="strong">***c***</font> rw-rw-rw-，这个 <font class="strong">*c*</font> 是可以<font class="strongYellow">进 or 出字节流</font>，以`null`举例:

```bash
echo "This will be discarded" > /dev/null
```

<img src="/assets/img/OS/null.png" style="zoom:50%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;你会发现没有回显，这就对了，<font class="strong">`null`把你的输入的字节流给吞了</font>。这部分还有其他有意思的文件，比如：<font class="strongGreen">终端(`/dev/tty*`,`/dev/pts/*`)；键盘和鼠标(`/dev/input/event*`)；串口(`/dev/ttyS*`)；虚拟控制台(`/dev/tty1`,`/dev/vcs1`)；内存(`/dev/mem`,`/dev/kmem`)；空设备(`/dev/null`)；随机数生成器(`/dev/random`,`/dev/urandom`)；音频设备(`/dev/snd/*`)</font>。这些文件，属于是Linux对设备的抽象，各位可以自行探索😏

&emsp;当然我们的文件还有传统意义上的意思，也就是普通文件（字节序列）。那我们就得好好唠唠了，关于这些内容，我们到底了解多少？<font class="gradient-title">文件描述符，是一个非负整数。你可以把它想象成一个由操作系统颁发的“票号”或“身份证”。当你（一个程序）请求操作系统打开一个文件、网络套接字或其他输入/输出资源时，操作系统会替你管理这个资源，并返还给你一个简单的整数（即文件描述符）。之后，你不需要告诉操作系统“请读取那个叫做 ‘document.txt’ 的文件”，而只需要说“请读取票号是 3 的那个资源”。操作系统通过这个票号就能找到它内部管理的真正资源</font>。这应该不是各位所知道的，当然<font class="strongYellow">在`windows`中，这个文件描述符叫`handle(句柄)`，很奇特的名字</font>。（*当你打开一个文件、一个套接字、一个线程、一个进程、一个互斥体，甚至一个图形窗口时，Windows 内核都会返回一个句柄给你。几乎所有内核对象都是通过句柄来访问的。这使得句柄的应用范围比文件描述符要广泛得多*）但是这里我们暂且先不管`windows`，因为它不开源（

<img src="/assets/img/OS/handle.png" style="zoom:30%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;从上面一段话就可以知道，<font class="strong">文件描述符不是描述文件的，它的作用更像是一个指针</font>，<font class="strongGreen">我们在`/dev`下也可以看到这个文件，其中的`fd`就是文件描述符，从文件描述符中读打开的文件</font>。你可以把它类比为指针，但实际上<font class="strong">是内核当中的地址空间，存在一块 ***特殊地址*** 指向操作系统内核当中的特定对象，你不可能去常规的修改这块地址，只能使用OPEN、READ操作这些文件...</font>那既然说到了文件读写，我们是不是可以看看一些进程打开了那些文件呢？看看终端の吧：

<img src="/assets/img/OS/fd.png" style="zoom:40%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;诶？很神奇！我们看到了<font class="strongGreen">终端进程的`0、1、2`指向(fd文件描述符)的是终端（/dev/pts/0）</font>。为什么？干什么的这么指？

&emsp;<font class="underline-gradient">事实上，我们看到的这个指向就是指向的`标准输入、标准输出 和 标准错误`，这个在`/dev`下也有文件</font>，看看吧：

<img src="/assets/img/OS/InOutErr.png" style="zoom:40%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;诶，指向闭环了。事实上，<font class="gradient-title-red">我们的终端输入和输出的数据以及错误都和这三个指向有关，背后是`fd`在帮我们</font>。除此以外，我们还需要做一下 ***更详细地深入***，比如<font class="strongYellow">我们知道进程是由他的父进程劈叉得来的，那我们目前使用`ssh`登入工具登入后的这个终端是怎么来的？</font>很简单，直接`ps -al`来看看全部的进程不就知道了

<img src="/assets/img/OS/sshLogin.png" style="zoom:40%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;这个过程是什么样的呢？<font class="gradient-title">假设你正在用 SSH 客户端连接服务器，你的会话被分配到了`/dev/pts/2`。服务器上有一个`sshd`进程负责你的连接，它为你创建了一个伪终端`/dev/pts/2`。`sshd`启动了一个`bash shell`，并将这个`shell`的输入/输出绑定到`/dev/pts/2`。或者直接说：当我们使用`ssh`登入一个Linux主机的时候，`sshd`会直接请求内核创建终端，会自动分配对应的`pts/ID`，这个过程是符合常理的</font>。

&emsp;下图为第一个Bash：

<img src="/assets/img/OS/OneBash.png" style="zoom:40%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;除了这些，还有什么么？诶，我们可以想到有一些小玩意，比如<font class="strongYellow">将一个bash的输入指向另一个bash的输出</font>（做个实验就知道了（

&emsp;<font class="gradient-title-red">重定向！</font>我们可以<font class="strong">通过简单的修改一下`std in/out`就可以</font>！很好wan！至于如何修改，则需要用到 ***系统调用`dup`***。假设是`bash1`的输入和`bash2`的输出：

```c
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
    int p[2];
    pipe(p);  
    // 创建一个无名管道
    // p[0] 是读端，p[1] 是写端
    if (fork() == 0) {
        // 子进程：我们让它运行 bash2
        dup2(p[1], STDOUT_FILENO);
        // 把子进程的标准输出（fd=1）重定向到管道的写端
        // 之后子进程 bash2 的所有输出都会写入这个管道
        close(p[0]); 
        close(p[1]);
        // 不再需要管道的读端和写端描述符，关闭它们（避免资源泄漏）
        execlp("bash", "bash", NULL);
        // 用 bash 程序替换当前子进程映像（这就是 bash2）
        // 如果执行成功，这行之后的代码不会再执行
        perror("execlp bash2 failed");
        exit(1);
    } else {
        // 父进程：我们让它运行 bash1
        dup2(p[0], STDIN_FILENO);
        // 把父进程的标准输入（fd=0）重定向到管道的读端
        // 之后父进程 bash1 的输入就来自管道（也就是 bash2 的输出）
        close(p[0]);
        close(p[1]);
        // 父进程不再需要额外的 fd，关闭掉
        execlp("bash", "bash", NULL);
        // 用 bash 程序替换当前父进程映像（这就是 bash1）
        perror("execlp bash1 failed");
        exit(1);
    }
}
```

&emsp;这就把`bash2`的`stdout → bash1`的`stdin`绑死了。

&emsp;在我们知道了文件描述符之后，我们就可以<font class="strongYellow">看一些我们常见的文件操作了：`open、close、read、write、lseek、dup`</font>

<font class="strong">

1. open会打开一个文件，并将最近的空指向该操作系统中的文件对象，从 3 开始，因为`0、1、2`已经使用。那么问题来了，我们的进程和系统能打开多少文件呢？`ulimit -n(进程)`和`sysctl fs.file-max(系统)`看一下：
</font>

<img src="/assets/img/OS/ProcFdAndOSMax.png" style="zoom:40%;display: block;margin: 0 auto;" alt="alterMem" />
<font class="strong">

2. 之后，当我们使用完一个文件`close`关闭，该地址将设置为空

3. 如果你尝试`read`指针指向为空的地址，他不会宕掉，而是返回`-1`，`read`失败

4. `write`去读取指针指向的地址

5. `dup`浅拷贝地址指针（我们在上述也做了实验）

6. `lseek(fd,offset偏移字节数,whence基准位置)`，用来移动文件描述符`fd`所指向的“当前读写位置”的指针的。
</font>

&emsp;我们又看到了新东西？<font class="gradient-title-red">`offset`？</font>好吧，<font class="underline-gradient">让我们来重新认识一下`fd、offset、文件`这三个东西</font>。事实上：<font class="gradient-title">***这些文件对象都在内核里，每一个文件描述符都有一个`offset`游标，一个文件描述符指向一个`offset`和文件对象，当`dup`的时候，是将最近的一个空也指向`offset`，两个指针同时作用于文件对象（检测：可以使用`dup`，同时写入，看看是覆盖还是追加（顺序追加！）），但是当进程`fork`时呢？***</font> <font class="strong">进程在`fork`后是会共享`offset`的！也就是说，父进程打开了哪些文件资源，子进程在`fork`之后依旧继承！这部分需要解释，如果父子进程同时打开一个资源的安全问题，即：文件打开在底层是使用`O_APPEND`的，那么该进程中，无论`fork`以及`dup`都是线程或者进程安全的，都会继承`O_APPEND`，也就是原子追加，并且资源共享</font>（***struct file是内核中进程访问文件的“会话对象”，`fd`是这个对象的索引***）。

1. dup：通过 `dup` 复制的`fd`与原`fd`共享同一个`struct file`（包括`f_pos`）。
2. fork：子进程继承父进程的`fd`，这些`fd`指向相同的`struct file`（共享 `f_pos`）。

&emsp; ***如果你不想让你的子进程拥有父进程的文件描述符，那就`O_CLOEXEC`，`execve`不会关闭已打开的文件描述符，除非这些`fd`被标记为`FD_CLOEXEC`（Close-on-Exec）***。

```c
int fd = open("file.txt", O_RDWR | O_CLOEXEC);
```

## Windows：句柄

&emsp;到此，我们就简单的把`Linux`下的资源描述符简单的介绍完了，我们可以简单的来说说`windows`下的`句柄`。<font class="strongYellow">句柄是`Windows`内核中的一个抽象，它并不只是`文件`，`进程、线程、事件、互斥锁、内存映射、注册表键值`等系统对象都用句柄来表示。可以理解为，句柄是用户态访问内核对象的一个`“指针”`或者`“把柄”`，有了这个句柄，你就能操作相应的资源</font>。

&emsp;当一个进程被创建时，***它默认不会继承父进程的句柄***。<font class="gradient-title">`Windows`的设计理念是`“最小权限原则”`，即 ***子进程只应拥有自己需要的资源，而不是自动继承父进程的所有控制权***</font>。这与`Linux/Unix`系统里`fork`出来的子进程天然复制文件描述符表不同。在`Windows`中，想要子进程继承某些句柄，必须显式地进行配置。

&emsp;***句柄继承的第一个关键点是进程创建时的参数***。在<font class="strongYellow">调用`CreateProcess API`（之前提到过这个API）的时候，可以通过传入`bInheritHandles=TRUE`来允许子进程继承父进程中可继承的句柄</font>。需要注意的是，***即使启用了继承，也只有那些在创建时被标记为可继承的句柄才会被传递下去***。这个机制保证了继承的`选择性`和`安全性`，不会无意间让子进程拿到过多的敏感资源。

&emsp;另一个配置点是`STARTUPINFO`或`STARTUPINFOEX`结构体。在其中 <font class="strongYellow">***可以指定子进程启动时使用的`标准输入、标准输出和标准错误句柄`***。这意味着即便不整体开启句柄继承，也可以通过在启动信息里传入特定的句柄，把父进程的某个文件、管道或者设备作为子进程的`stdin/stdout/stderr`</font>。这种方式在 ***需要重定向子进程的输入输出*** 时非常常见，例如在父进程中创建匿名管道，然后让子进程的`stdout`写到这个管道里，父进程再从管道的另一端读取子进程的输出。

&emsp;***除了在创建阶段设置，`Windows`还允许在运行时修改句柄的继承属性***。可以 <font class="strongYellow">***使用[`SetHandleInformation`](https://learn.microsoft.com/zh-cn/windows/win32/api/handleapi/nf-handleapi-sethandleinformation)函数来控制某个句柄是否可继承，从而动态地调整哪些资源能够被未来的子进程访问***</font>。这为开发者提供了更灵活的控制手段，例如在进程运行过程中根据需要决定哪些文件或通信通道可以交给后续启动的子进程使用。

&emsp;这样一套机制体现了`Windows`对进程隔离和安全的重视。句柄是通向内核对象的唯一入口，继承策略就是决定“哪些入口能被传下去”。<font class="underline-gradient">默认不继承，结合`bInheritHandles`、`STARTUPINFO`以及`SetHandleInformation`，开发者可以精细地控制子进程能用什么资源，同时避免无意间泄露父进程的控制权</font>。

[代码详细内容参考](./code/handle.md)

## 把Linux塞进U盘里

&emsp;我们又回到了`Linux/Unix`，我们该来把眼光放到整个操作系统上。你们也应该听过`Linux`的 <font class="gradient-title-red">***一切皆文件设计哲学***</font>，我们也在上面切身感受到了（关于`tty`和`std in/out/err`的内容）。现在，我们要来看看整个操作系统了。你们发现了么，<font class="strongGreen">无论是`Ubuntu`还是`Debin`或者`Kali`，这些操作系统的文件目录貌似都一样吧？</font>是的，它们<font class="strongYellow">都遵循`Filesystem Hierarchy Standard FHS`，除了Mac OS（~~你说对吧 Mac OS~~</font>。这个标准定义了操作系统文件应该如何被组织和摆放，它就像一本无形的“城建规划书”，规定`/bin`里是工具，`/etc`里是配置，`/var`里是会不断增长的日志和缓存，而`/dev`和`/sys`则是最让人眼前一亮的“特殊存在”——它们不只是死板的目录，而是内核和硬件的直接窗口（我们提到的一切皆`文件`）。你甚至可以通过`/sys/class/`下的文件去窥探甚至调试硬件，也能在`/dev/`下找到各种设备接口，从磁盘到串口，全部被 ***抽象为文件***。

<img src="/assets/img/OS/FHS.png" style="zoom:70%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;诶，说到`FHS`，你有没有想过一个问题？就是<font class="strong">我们能不能自己做一个小型的`Linux U盘`？</font>那种即插即用的...那就做个实验吧：制作一枚`USB`启动盘。这不是简单地复制粘贴，而是需要和底层打交道的操作。***首先你需要准备一个`UEFI`分区，并在其中安放正确的`Loader`文件，否则电脑是不会识别的。紧接着，用`mkfs`将目标分区格式化为恰当的文件系统，这一步有点类似于给新硬盘刷上底漆，决定了它能否顺利承载数据。然后是`cp -ar`，把系统文件完整复制过去，同时保留权限与符号链接（链接相关的内容以后会讲），确保在新环境里一切如旧。值得注意的是`fstab`里用到的`UUID`，如果这里写错了，系统就会在启动时找不到根分区***。

&emsp;这一切听上去略显繁琐，但正是在这些细节里，`Linux`世界的精妙之处才会逐渐显现。它并不像某些系统（`@Windows` `@MacOS`）那样用一个隐藏的黑盒来打包流程，而是赤裸裸地把机制展示在用户面前（毕竟是开源的）：文件系统的层级标准，`Loader`的位置，`UUID`的作用，乃至`/sys`与`/dev`这种“虚拟文件”。

## 其他对象：挂载、管道

&emsp;到此，我们就把文件说地差不多了，但是我还是说，现代的操作系统可是很大的哦~你以为的仅仅只是一小部分。事实上，还有很多操作系统对象需要讲解，比如下面这几个：

&emsp;在操作系统的世界里，创建对象并不仅仅意味着“新建一个文件”那么简单。文件系统挂载就是一个典型的例子：我们都用过（应该）挂载指令，你可以把一块硬盘挂载在某个目录下，这是常见的操作。但是操作系统中到底发生了什么呢？我们是未知的...

&emsp;<font class="underline-gradient">当你执行`mount`指令后，操作系统把一个存储设备或者逻辑卷挂接到目录树中的某个节点（这个过程甚至涉及`NameSpace`，文件系统对象的创建，文件系统部分会详细说）</font>。从此以后，这个节点就变成了`访问底层存储的入口`，该节点与该存储空间绑定。

&emsp;<font class="gradient-title-red">管道</font>则是另一种极具代表性的对象。它的本质是<font class="strongYellow">一种特殊的“文件流”，通过内核提供的`pipe`调用创建</font>。<font class="underline-gradient">每当进程调用`pipe`，内核会生成一个管道对象，并返回一对文件描述符：一个指向读端，另一个指向写端。这对描述符像是一扇双向的门，被同一进程同时握住。只要有数据写入写端，另一边的读端就能立刻读取；如果没有数据，读调用就会阻塞，像是在耐心等待门另一侧的送达（和上述地`dup`很像，但不是一个东西哈）</font>。如下图：

<img src="/assets/img/OS/Pipe.png" style="zoom:25%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;而真正有趣的场景出现在`fork`之后。<font class="underline-gradient">***父进程和子进程各自继承了这对文件描述符，此时他们就能通过同一个管道实现进程间通信。如果父进程只保留写端而关闭读端，而子进程则相反，只保留读端，那么数据就能像水流一样单向传输***</font>。而如果需要更复杂的场景，还可以通过`dup`来把描述符“搬运”到标准输入输出的位置（见上文代码），让进程以为自己在和终端交互，实际上却在通过管道和另一个进程对话。<font class="strongYellow">*这就是最常见的`IPC`（进程间通信）方式之一*</font>，简单但极其高效。

&emsp;当然，<font class="strongGreen">管道并不只有匿名这一种形态。通过`mkfifo`，我们还能创建具名管道，把它放在文件系统中，任何进程只要知道路径就能打开并通信</font>。匿名管道适合父子进程之间的即时对话，而具名管道则更像一个公共区域，不相关的进程也能通过它交换信息。

<img src="/assets/img/OS/Pipe1.png" style="zoom:30%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;所以，***操作系统创建对象的方式远远超越了普通文件***。***挂载让存储设备融入目录树，管道让数据在进程间自由流动，而`fork`与`dup`又赋予了这些机制灵活的组合能力***。最终形成的不是孤立的功能，而是一整套内核级的抽象工具箱，使得在操作系统之上构建丰富多彩的世界，这样很棒（

## Everything is a File ... ?

&emsp;注：这部分能看则看，看不了就过，毕竟吐槽是写给自己看的（（（

&emsp;<font class="strong">所以一切皆文件真的好么？</font>我们看到了文件的抽象那么方便，我们一套`API`访问所有对象😂，一切都可以`| grep`（~~Introducing ag -g~~

&emsp;这对么？所以我们取舍了什么？看看下面这两行命令吧：

```bash
# 简洁的同时带来了不可读性和难维护性
ls -l /proc/*/fd/* 2>/dev/null | awk '{print $(NF-2), $(NF-1), $NF}'
grep -s VmRSS /proc/*[0-9]/status | awk '{sum += $2} END {print sum " kB"}'
# 这啥啊？？？
```

&emsp;能看懂的感觉很优雅，很简洁，但是充斥着一股子`竞赛风`。<font class="strongYellow">这种风格的指令就是反人类的，是dirty的！</font>这些我们可以在各种只要涉及文件的地方看到，但是整个操作系统不就是大大的文件么（心死了...<font class="strongGreen">这样带来的后果只有一个，紧凑的`API`设计和那个离不开的`fork`开始变得臃肿([A fork() in the road](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/04/fork-hotos19.pdf))。除了这些，还带来了额外的延迟、内存拷贝以及高速设备不友好（`pipe`缓冲遇上网卡，你就得给我等着！）</font>，这是我们厌恶的！那我们的出路到底是什么呢？`API`和那个`fork`已经 *无药可救了* 但是其他的可以救一下......

> 怎么解决？简单，没有什么是加一层解决不了的，有的话那就再加一层！\
> Any problem in computer science can be solved with another level of indirection. (Butler Lampson)

&emsp;<font class="underline-gradient">在`Windows`中，我们引入了`POSIX`子系统以弥补接口差异，后来的`WSL`更是尝试通过子系统来实现文件语义的兼容（~~优雅的`WSL1`已经暴毙了，原因可想而知~~🤣）。但`WSL2`的演化又回到了虚拟机的道路上（历史证明，你想兼容对方，除非虚拟化），意味着“加层”方案终究还是需要牺牲一部分性能。`Mac OS`借助`BSD`子系统维持了一定程度上的一致性，而`Wine`则试图模拟`Windows API`，却始终难以挣脱兼容性泥潭。鸿蒙操作系统声称以分布式架构统一多终端体验，其底层同样延续了“一切皆文件”的影子，但在面对现实应用时，也需要建立权限与虚拟化机制来隔离资源</font>。

<img src="/assets/img/OS/OpenHar.png" style="zoom:30%;display: block;margin: 0 auto;" alt="alterMem" />

&emsp;更进一步看，当这种设计进入移动端，情况变得更为微妙。<font class="underline-gradient">安卓和`iOS`所处理的对象数量庞大而繁杂，从系统日志到应用缓存，再到看似普通的通讯录，都被抽象为资源对象（此处@SQLite，桀桀桀）</font>。然而操作系统不可能再像`Unix`之初那样彻底开放。<font class="underline-gradient">用户是否允许应用访问通讯录，已经成为一种权限控制的问题，也是在文件抽象之外强行加上的另一层约束</font>。

&emsp;最终我们会发现，我们在这条不归路上不断分叉（~~没办法，代码写多了自然成山~~）。<font class="underline-gradient">理想中的“一切皆文件”在现实中逐渐演变为“一切皆需要额外的层”。这些层既是解决方案，又是新的复杂性来源</font>。<font class="gradient-title-red">`fork`与`pipe`的纯粹美感仍然令人怀念，但今天的操作系统必须在优雅与现实之间反复权衡（系统越加庞大、对象越来越多、fork需要关注的对象越来越多...）。这正是“快而脏”的哲学宿命，也是现代计算系统里一个始终无法彻底回避的矛盾......</font>