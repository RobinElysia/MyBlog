---

title: 真正的数据库入门“权威”指南（上）
description: 一个真正的数据库入门“权威”指南
date: 2025-09-08
timeline: true
head:
  - - meta
    - name: keywords
      content: 一个真正的数据库入门“权威”指南
  - - meta
    - name: description
      content: 一个真正的数据库入门“权威”指南
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 技术漫谈

---

<link rel="stylesheet" href="/css/font-style.css">

# 一个真正的数据库入门“权威”指南（上）

## 前言

&emsp;正如标题所言，我要写一篇面向初学者的数据库入门帖子。这不是一件简单事，因为<font class="strong">我需要把困难的事物简单化，并且做到不失真</font>。我知道各位在第一节课上听的稀里糊涂，什么E-R模型、逻辑模型、物理模型...不过确实，<font class="strong">我其实也不太懂这些概念，只知道大概的描述</font>。<font class="gradient-title">***不过这些对于一个面向应用开发的人来说无伤大雅，毕竟你要知道“数据库之父”可是个数学博士，他的那篇关于数据库的文章可是纯数学理论。（大面积的抽象代数）***</font>我们可以不需要过多的了解它的数学概念，但我们需要清楚它的描述。这就足够了，下面我就用另一种形式来让各位入门数据库，这将会是一个有趣的方式😏

> &emsp;我知道对于计算机不敏感的同学而言，阅读本文章会是一件麻烦事，会是一个十分枯燥的事，但这绝对是有益，尤其是在你学习数据库上。我会提到计算机方面的一些发展史，从而引出数据库，因为这是有必要的。

## 持久化——我们一路的探索
&emsp;有人会疑问，<font class="strong">为什么我感觉计算机的教学任务那么割裂？我甚至还没有明白什么是计算机，就别别扭扭の到了数据库...这导致我学数据库也一脸蒙......</font>

&emsp;诶，感觉割裂和跨度大就对了，<font class="strong">因为你们学了个“假的计算机”。这句话从何谈起？这就得提一提我们计算机存储的发展史了。（教学任务貌似没有提到过有关于存储的发展史，这个活就交给我了）</font>

### 硬件的演进
&emsp;事实上，人类早期就开始研究如何把数据保存起来，这个应该不需要我大做文章，一些石头和竹简就是证明。我们需要讲的就是从计算机开始出现后的，数据存储的难题。即：

> “我们如何在计算机上实现高效的数据存储”
>
> Persistence: “*A firm or obstinate continuance in a course of action in spite of difficulty or opposition*.”

&emsp;那么，计算机初期我们是如何存储数据的呢？或者我们应该这样问，有哪些方式可以存储数据，并且计算机可以读取？首先我们会想到祖先的智慧——打孔挖洞。没错，<font class="gradient-title">计算机早期的存储设备也是这样存储的，它有一个学名叫：“穿孔纸带”。</font>

<img src="/assets/img/slowComputer/Paper.png" style="zoom:100%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;这种存储方式属于“祖宗级别”，现在已经绝迹了。它的使用方法很简单，只<font class="strong">需要一个操作员手持纸带，穿过计算机进行读取就可以</font>。但是你想想就可以的知道，这种<font class="strongGreen">纸带是一次性的，也就是说打一个孔就是一个bit数据了，根本做不到多次修改的功能（复写）...更别提什么指定纸带上的某个数据快速读取了（随机读写）</font>，那个年代还要啥自行车（

&emsp;后来，<font class="strong">为了实现我们数据的复写功能，我们发明了磁记录数据</font>。这种方式的一大优点是它有效地结合了电和磁，我们的高中物理知识就告诉我们“电生磁、磁生电”，这个知识不是白学的，你们今天看到的磁带就是基于这个原理发明的。<font class="strong">“把 Bits ‘卷起来’ (1928年德国人 Fritz Pfleumer 发明了在纸带上涂磁性粉末的方法，用来录音。)”</font>

&emsp;具体怎么实现读取写入的呢？<font class="strong">当我们需要写入数据时，磁头会通电，此时线圈产生磁场，磁化磁带上的颗粒，我们的颗粒带上磁后就代表写入数据成功；而当我们读取数据时，磁带上带有磁化的方向发生变化，此时磁头磁芯中的磁通量发生变化，线圈里感应出电压，电压即代表数据。这个电压信号再被放大、解码，就恢复成原来的二进制数据（或模拟音频）。</font>

<img src="/assets/img/slowComputer/tap.png" style="zoom:30%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;这已经要比纸带更好了，我们实现了复写功能！但是它和纸带都有一个共同的缺点，就是<font class="strong">随机读写性能差！</font><font class="strongGreen">不知道各位听没听过一个词叫“倒带”，对没错，当我们希望读取一个已经读取过的数据时，我们需要反向扭动磁带中间的转轴，这个过程对比于今天的计算机来说是缓慢的，参考各位小时候上英语课英语老师拿着的大磁带机（</font>

<img src="/assets/img/slowComputer/tapMachine.png" style="zoom:40%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;事实上磁带的运行原理已经十分接近我们今天的HDD机械硬盘了，可以这么说，<font class="strong">磁带是磁存储的第二位祖宗。</font>诶？那第一位是谁？其实是<font class="strong">磁鼓，一个随机读写能力比磁带更好的磁存储设备。</font>（按照时间来算，其实磁线才是祖宗，但是这里我不打算提）它长什么样子呢？其实就是它的名字的形状...所以你知道为什么这玩意今天也不多见了吧，因为<font class="strongGreen">太大了！</font>

&emsp;这家伙<font class="strong">用旋转的二维平面存储数据 (无法内卷，容量变小)，读写延迟不会超过旋转周期。 (随机读写速度大幅提升)</font> 

<img src="/assets/img/slowComputer/Drum.png" style="zoom:20%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;<font class="underline-gradient">你说纸带无法复写...好，我们有了磁带；你说磁带不好随机读写...好，我们有了磁鼓；现在你又说磁鼓太大...那我能怎么办？</font>

<img src="/assets/img/slowComputer/doro.jpg" style="zoom:20%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;好吧，<font class="gradient-title">让我们想想怎么把这个该死的磁鼓拍成饼，给它塞进一个不起眼并且安全的地方...</font>盘片变薄、多盘堆叠、磁头可移动，于是我们就得到了<font class="strong">磁盘</font>以及它的<font class="strong">“兄弟”软盘</font>，我们这里不讨论软盘，来聊聊我们今天的硬盘。下图：

<img src="/assets/img/slowComputer/Disk1.jpg" style="zoom:10%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;可以看到的是我们的硬盘是由最为重要的“多个盘片”和“磁头”组成，事实上这就是我们的磁带和磁鼓一直存在的结构。<font class="gradient-title">我们做到了拍扁磁鼓，并且增大存储面积，我们做到了快速随机读写（只需要移动磁头到对应位置即可）！</font>

<img src="/assets/img/slowComputer/Disk2.jpg" style="zoom:10%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;<font class="underline-gradient">注：各位感兴趣可以查一查穿孔纸带的后续改革换代（光盘），以及软盘的内容。这部分将作为拓展阅读。</font>

### 文件系统的演进

&emsp;后来，我们<font class="underline-gradient">为了更好的组织这些设备（存储设备、CPU等），我们发明了操作系统</font>。<font class="strong">操作系统为我们屏蔽了设备的复杂东西（尤其是磁盘），只提供给我们一些指令。比如关于磁盘的“store”写、“load”读操作。这两个最基础的操作 + 操作系统的一些实现 + 其他的指令，于是就诞生了操作系统之上的文件系统。</font>（简单而言是这么说没错，然而文件系统的复杂程度我感觉可以单开两页来写）我们可以从图示来了解文件系统的实现：

<img src="/assets/img/slowComputer/hardAndSystem.png" style="zoom:20%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;好了，问题来了。我们说这些有什么用呢？这是一个直抵灵魂的拷问...<font class="strong">我们不是来说数据库的么？怎么讲起来文件系统、文件管理器了？</font>诶，接下来就引出数据库。<font class="underline-gradient">事实上，我们的数据库其实就是在文件系统之上再进行封装。（虚拟化）</font>它的层次图如下：

<img src="/assets/img/slowComputer/hardAndSystemAndDB.png" style="zoom:20%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;这部分是教育所缺失的，所以我们今天就了解了，关于数据库系统的由来。<font class="gradient-title">简单总结就是：“数据库系统是对文件系统的再封装，是我们不在关注单一的文件、文件夹等操作系统对象，而是通过数据库描述数据与数据之间的联系，将数据与数据联系起来，这是数据库系统帮我们完成的，同样也是我们要学的。”</font>，至于图中的“ACID”、“DDL”、“DML”是什么，别急，我们还有很多东西没有聊...

### 数据库的演进

&emsp;<font class="strong">当我们知道了数据库系统其实就是封装一层又一层之后，其实你们就可以把它当作一个文件系统来看待了，只不过这个文件系统它有点像Excel（这里先这么理解吧，没问题，方便我后续对你们进行 ~~***洗脑***~~。</font> 但是我们需要知道，市面上这么多数据库系统，我们需要学那个？用哪个呢？

&emsp;这就是另一个话题了：
> 请选择你的数据库阵营

&emsp;时至今日，<font class="strongGreen">你们能看到的数据库包括但不仅限于：甲骨文“Oracle”、微软“SQL Server”、甲骨文开源“MySQL”、开源“PostgreSQL”、开源“Redis”、开源“MongDB”、开源“Neo4j”...</font>

&emsp;这些数据库很大一部分是开源的（免费使用，公开代码），当然也有企业付费，这些无关痛痒。我们关注的是我们需要学什么？这里最为著名的当属“MySQL”、“PostgreSQL”和“Redis”，其中作为<font class="strong">关系型数据库“MySQL”、“PostgreSQL”都十分优秀，前者年代久远稳定可靠，后者生态丰富，功能强大</font>。而<font class="strong">非关系型数据库“Redis”，则在非关系数据库中尽显锋芒...</font>

&emsp;嗯？你问我什么是关系型什么是非关系型？好吧，我们提到数据库之后就没有解释这个名词。我们应该来说说两者。首先是关系型，顾名思义<font class="strong">“数据与数据之间存在关系”，比如：People可以有name、可以有age，name也可以和其他数据有关联。这就是关系，数据与数据之间存在联系。</font>它们的图示如下：

<img src="/assets/img/slowComputer/Table1.png" style="zoom:50%;display: block;
margin: 0 auto;" alt="maps" />

&emsp;而<font class="strong">非关系型则是数据与数据之间可以没有关系，比如我们的“Redis”。它的存储数据的方式是 键:值，有点像你们学过的字典？没错，Redis的全称就叫远程字典服务</font>

&emsp;当我们了解了这些之后，你就知道了我为什么前面提到“请选择你的数据库阵营”这句话。<font class="strongGreen">事实上，从21世纪以来，非关系型数据库阵营的成员对于关系型数据库的讨伐就一直在继续，尤其是在阿里云倡导去IOE开始，吐槽关系型数据库性能太差，吐槽关系型数据过于注重关系...</font>当然对于我们而言这些有点无伤大雅，不是我们这些非专业人士讨论的内容（大佬们苦心研究，只为更好服务人类，改变世界）（这段话听个乐子，不需要了解）

### 在我们的时代——NewSQL（选作了解）

&emsp;当我们了解了什么是关系型数据库(SQL)和非关系型数据库(NoSQL)之后，我们实际上就已经了解了现在学习的内容，但是作为开发人员要与时俱进，我们接下来来聊聊一个全新的名词，叫NewSQL。这个New到底New在哪里？<font class="strong">溯源一下就知道了，我们在过去的传统数据库大多都是一台计算机运行一个就大功告成，即无法确保什么计算机安全、也保障不了数据安全等等，但是随着互联网的发展，数据量和数据安全需求的不断上升，我们对数据库的要求也不断地增加。这部分体现在对数据库的一致性（Consistency）、可用性（Availability）和容错性（Partition tolerance）要求。也就是我们说的CAP原则。我们想要实现CAP，怎么办？搭集群做副本整分布式，于是我们可用性就提高了，我们不再害怕单一计算机宕机导致数据库不可用；之后我们想在分布式的基础上实现一致性，可是数据的一致性一直是个难题，它牵扯到数据同步、分布式事务的原子性、事务与事务之间的隔离性和分布式持久性等问题；而容错性则是在分布式基础上，考虑不同地区基于网络下出现的数据问题等...这将会是一个极大的工程和课题，为了解决这些难题，各路大佬和厂商纷纷下场提出理论和实践，提出并实现了一系列全新的架构和技术来解决这些问题，最终我们看到了今天的现代化数据库——NewSQL</font>

&emsp;<font class="underline-gradient">NewSQL是对各种新的可扩展/高性能数据库的简称，这类数据库不仅具有NoSQL对海量数据的存储管理能力，还保持了传统数据库的各种支持和SQL等特性。</font>

## Preference
[1] [蒋炎岩——存储设备原理](https://jyywiki.cn/OS/2025/lect21.md) 

[2] [What is the Difference Between Persistence and Perseverance?](https://anamma.com.br/en/persistence-vs-perseverance/)

[3] [SQL vs NoSQL：一次搞清楚五花八门的“SQL”](https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/24%E8%AE%B2%E5%90%83%E9%80%8F%E5%88%86%E5%B8%83%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%BA%93-%E5%AE%8C/02%20%20SQL%20vs%20NoSQL%EF%BC%9A%E4%B8%80%E6%AC%A1%E6%90%9E%E6%B8%85%E6%A5%9A%E4%BA%94%E8%8A%B1%E5%85%AB%E9%97%A8%E7%9A%84%E2%80%9CSQL%E2%80%9D.md)

[4] [硬件茶谈——【硬核科普】固态硬盘的缓存是干什么的？有缓存和无缓存有什么区别？](https://www.bilibili.com/video/BV1aF411u7Ct)