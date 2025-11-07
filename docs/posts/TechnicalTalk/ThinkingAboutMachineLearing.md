---

title: Thinking About Machine learning
description: Thinking About Machine learning
date: 2025-09-18
timeline: true
head:
  - - meta
    - name: keywords
      content: Thinking About Machine learning
  - - meta
    - name: description
      content: Thinking About Machine learning
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 技术漫谈

---

<link rel="stylesheet" href="/css/font-style.css">

# 学习机器学习的一些感受和思考

## 前言

&emsp;到目前为止，关于机器学习 ***我的进度大概在40%~50%之间***，所以是有一些思考。我想一提到机器学习大家的第一反应该就是 ***大面积的公式和抽象代数***，但是我个人理解的是，在机器学习中<font class="strong"> ***更多的是理解、怎么看待某个模型以及深度思考和拓展***</font>。这些东西即使牵扯到数学和代数公式，那也会有几何表示来方便我们学习。（比如我们的决策树）所以<font class="strong"> ***理解是重要的，而在理解之上更多的是内驱力，这部分内驱力来自于早期我对于人工智能领域的好奇。“大模型是怎么实现的？”，“怎么实现图像识别的？”等等，这些确实十分吸引我***</font>。（不亚于我对计算机底层的好奇）所以有句话说的很好：<font class="gradient-title">***“兴趣是最好的老师”***</font>。

## 什么是机器学习？

&emsp;搞了半天，所以我们机器学习到底在干嘛？我们暂且不考虑什么西瓜书各个章节的大标题，我们来探讨一下机器学习到底在干嘛。在此之前先让我们回一下高中知识，在我们高中数学书中各种分布那一章节后边学到的<font class="strong">“线性回归”</font>。说实话，你们那一章学明白了么？是不是很疑惑<font class="strong"> ***为什么前边还在讲关于各种分布函数，后边就到了线性回归？*** </font>原因其实很简单，也很好理解。在我自己的印象中，那一部分最主要的思想是告诉你<font class="strongGreen">拟合出的函数（估计模型）和目标函数（目标模型）的区别以及它们之间的联系</font>。其中估计模型和目标模型之间存在一定的差异，这部分差异我们就叫做<font class="strong">“损失函数”</font>。而<font class="strong">对于这部分差异，我们在机器学习中就假设是服从高斯分布的（~~毕竟世界就是一个巨大的高斯分布~~）。而当我们在求解估计模型的参数的时候，也用到了这个假设，也就是极大似然估计（参数估计）</font>。这部分 @宋浩 也有在自己的概率课上提到过…说到底，<font class="underline-gradient">还是菜，还是认知度不够，不然高中的时候哪能学的这么模糊？如果现场给我说了这些东西，推导了详细的公式，告诉我这部分很有趣，它是人工智能入门的一章…也不至于搞得那么狼狈（高中数学无罪，有罪的是硬实化教育！所以我不断地在提醒自己不可扼杀个性化教育！）</font>

&emsp;所以我们的 <font class="strongGreen">**机器学习到底研究了什么？** </font>很简单，两个问题：<font class="underline-gradient">**“回归问题”和“分类问题”（我学到目前是这样的）**</font>。无论是开篇的线性回归，还是后边的决策树、支持向量机和神经网络，我们期望的是：可以 <font class="gradient-title">***使用一种数学化的、可预测的方式来对我们的事物进行认知。所以我们对事物进行猜测（回归）、对事物进行分类（分类）***</font>。这对于人来是直观的，想象一下一个婴儿刚刚生下，他能知道什么？猜和类比是他学习的工具，***这就是我认识的机器学习***。

&emsp;但是还有个问题：人工智能、机器学习、深度学习这三个有什么关系、有什么区别？这个应该是初学者最应该知道的。简单来说，**人工智能是一个抽象的很大的概念，这部分牵扯到的东西很多，即包含机器学习和深度学习**；**而机器学习则是一个在人工智能领域最出名的一个分支**，AI 的定义是：**它利用算法让计算机通过分析数据自动学习并做出预测或决策，而不是通过明确的编程**。这部分内容将牵扯数学当中的统计学和概率论等内容，属于计算机与数学的再交叉；而**深度学习则是机器学习中的又一个分支**，这部分内容**以神经网络为主，构建了以神经元为基础的新人工智能方向**。你们常见的 **RNN、CNN 等各种机（感知机、玻尔兹曼机、限制玻尔兹曼机...）、那个网络的（卷积神经网络、SOM 网络...），都是深度学习的内容**。不过，对于深度学习而言我现在仅作为了了解，它虽然很重要，但这部分内容需要我等到学习完机器学习后深入了解。

<img src="/assets/img/ThinkingAboutMachineLearning/1.png" alt="屏幕截图 2025-08-25 215208" style="zoom:50%;display: block;margin: 0 auto;" />

## 我与Machine Learing

&emsp;之前在朋友圈吐槽过现在的 vibe coding，说这东西不好用。事实上我本人还是比较乐观的，尤其是 <font class="strong">***在一些小型的、需要快速落地的场景下，vibe coding确实是不错的选择***</font>...但是就是在这一点上，我需要再强调！ <font class="strong">***“你使用vibe coding之前需要用好提示词，并且做好最坏的打算，并且你要明白 AI 在写什么”***</font>，这是重要的，暂且不说你会不会用这方面提示词，<font class="strongGreen">如果你连 AI 写的什么都不清楚的话，那不就等于闭门造车么？还是说你打算尝试一把当“弱智”产品？成为和 Apache 官方文档说的那样 “Troubleshooting any problem without the error log is like driving with your eyes closed.”？</font>这确实是必要的，<font class="strong">你也不希望你的 AI 是黑盒，你的代码也是黑盒吧</font>...这我确实要反复吐槽，毕竟即便是我这种采购遇到一些逆天发言也会恼火：

[谁想看就自己点点开吧，我就不放了](/assets/img/ThinkingAboutMachineLearning/2.jpg)

[后来实在忍不了在群里激情开麦了](/assets/img/ThinkingAboutMachineLearning/3.jpg)

&emsp;之后就是关于应用方面的思考。说实话最开始被拉入场吸引我的不是因为什么 AI 应用开发（Spring AI 是个 damn 啊），这个可以追溯到我上高中，那时候就已经手持一本清华大学出版社的《Python 人工智能原理及其应用》，它不是多厚，但还是被公式推导劝退了，这确实不是我这个弱智高中生能触及的，当时只是纯粹觉得好玩（毕竟谁能拒绝手搓 AI 猫娘）（现在来看是我太年轻了）。后来才接触了应用开发，是的，是应用开发（这部分参考我手搓的 [Spring AI 的中文文档](https://hcnxcb6dq341.feishu.cn/wiki/TghiwB6vai9KcRkb7t5cxjdjnBY)），还不是机器学习。不过<font class="underline-gradient">这部分确实让我了解了一些有用的知识，比如关于“向量数据库的数据检索原理”、“常见的 RAG 技术”、“ETL 技术”</font>。这里 Spring AI 所参考的是模块化 RAG，原论文在官网也能找到（~~又是大量的抽象代数符号，艹~~）。这是一个大跨越，从传统应用开发到 AI 应用开发。（~~大量的函数式编程，爽！~~）

&emsp;后来，我觉得有点空虚了（或者叫无趣？）。互联网这块确实就是在跟业务打交道，搞些用户需要的，并不全是技术（~~太年轻了（呵~~。所以我做了一个违背祖宗（不是）的决定：<font class="strongGreen">去深入计算机底层和搞机器学习</font>。很有难度，但是这恰恰是我所喜欢的——了解底层实现。（和当时学习 Java 手搓 HashMap 一样爽） <font class="strong">***起初就是很悲催啊，因为没有学概率论和数理统计，所以很难受，很多知识都在 AI，属于是对牛弹琴了***</font>。在学完线性回归之后就去补数学了，也就是在前暑假，我去看了 [jyy](https://jyywiki.cn/) 的 OS class 和相关的 lab，感觉 <font class="strong">这才是我需要的大学课程，有难度且不失乐趣（~~上课玩galgame，艹~~）</font>

<img src="/assets/img/ThinkingAboutMachineLearning/4.jpg" alt="屏幕截图 2025-08-25 215208" style="zoom:50%;display: block;margin: 0 auto;" />

&emsp;<font class="strong">感谢蒋炎岩老师让我体验了一把当高校的学生，这感觉很好，就像~~周围都是二次元同好一样~~</font>。同样这位老师也很有意思，很敢说、也敢于吐槽。嗯...是的，对于南大的评价也好，对于中国的一些教育而言也好，他让我们自己去探索计算机与这个世界，我觉得他是一个很不错的老师。

&emsp;再后来就是现在了，我在<font class="strong">啃机组、计网和机器学习，即便有些部分很是逆天</font>。尤其是机组，***我觉得机组就像史做的巧克力，看着能吃，但实际能看不能吃，吃了会死...*** 好在看不懂的仅有部分 CPU 指令集架构，而这部分我有 AI，所以感谢 AI（~~四处谢‘人’~~）。后边的机器学习才是本文的主要内容，我认为<font class="strongGreen">如果仅是入门，cs229a 足以，但是你是想深入，你可以 cs229、西瓜书、南瓜书和 AI 同时服用（考虑到西瓜书的难度不是一般本科生驾驭的，所以建议搭配南瓜和AI服用）</font>。每一部分交叉参考，就比如我觉得西瓜书关于“决策树”讲的不错，所以我在“啃西瓜的树”。

<img src="/assets/img/ThinkingAboutMachineLearning/ARM指令集.png" alt="屏幕截图 2025-08-25 215208" style="zoom:20%;display: block;margin: 0 auto;" />

&emsp;这个过程是有趣的，当你了解了一个大的知识点，你会发现“也不过如此”啊。是的，会有自大，当然也有对书中这些人的<font class="gradient-title">敬佩</font>。比如那些 <font class="strongYellow">***大佬能想到把决策树的属性怼到坐标轴上，然后整出多变量决策树，这个灵光乍现般的天才设计给人的感觉就很有趣，有种任督二脉被打开了的感觉；除了这个还有关于神经网络感知机处理非线性划分，我当时没有看的时候一直在想会不会是核，因为我到现在只知道核（菜！），直到看到书上说：“当存在感知机不可划分的情况后，我们一般采用加隐层（加一层）的方式来实现可划分”***</font>，西瓜书中举的是一个这样的图：

<img src="/assets/img/ThinkingAboutMachineLearning/5.png" alt="屏幕截图 2025-08-25 215208" style="zoom:50%;display: block;margin: 0 auto;" />

两条线，对吧。可三条线呢？三条线两两相交呢？思考后这段与 AI 的对话就诞生了：

<img src="/assets/img/ThinkingAboutMachineLearning/6.png" alt="屏幕截图 2025-08-25 215208" style="zoom:50%;display: block;margin: 0 auto;" />

## 结语

&emsp;很好，距离真理越来越近了...我一直认为没有什么是达不到的，寄希望于不断地进取和进步，去思考、去询问、去记录，就像我上边学习机器学习所使用到的一样。无论是 vibe coding 还是计算机底层、机器学习，这些都是我们cs学者一步一个脚印踏出来的，它们不属于任何居心叵测之人。真理就在眼前，摘取或者等它腐烂。现在我是优素福，我就在抚摸这颗外表平淡却带来希望的果实。

<font style="text-align:right">

——We are always devout scholars
</font>