---

title: 十二月：论文、博客、通讯阅读
description: 十二月：论文、博客、通讯阅读
date: 2025-12-01
timeline: true
head:
  - - meta
    - name: keywords
      content: 十二月：论文、博客、通讯阅读
  - - meta
    - name: description
      content: 十二月：论文、博客、通讯阅读
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 浅读文章

---

<link rel="stylesheet" href="/css/font-style.css">

<img src="/assets/img/MachineLearning/Voyager2.jpg" style="display: block;margin: 0 auto;" />

## Preference

### Paper

&emsp;3. [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864)
> 1. Transformer位置编码

&emsp;4. [Online normalizer calculation for softmax](https://arxiv.org/abs/1805.02867)
> 1. Transformer的Online Softmax

&emsp;5. [Scaling Down to Scale Up: A Guide to Parameter-Efficient Fine-Tuning](https://arxiv.org/abs/2303.15647)
> 1. 2019年初至2024年中期发表的50余篇微调总结论文

&emsp;7. [微型指针](https://arxiv.org/abs/2111.12800)

### Communications/Blog

&emsp;1. [如何成为jyy的学生](https://0xffff.one/d/1550) 

&emsp;2. [正则表达式引发的血案](https://zhuanlan.zhihu.com/p/46294360)

&emsp;3. [人格的力量The Power of Persona](https://cacm.acm.org/news/the-power-of-persona/)
> 1. 随着人工智能代理和模型展现出越来越逼真的个性，一些研究人员呼吁设立防护措施。
> 2. 并非所有的人格都是安全的，例如所谓的“黑暗三性格”——自恋、马基雅维利主义和精神病态。

&emsp;6. [加速哈希表Speeding Up Hash Tables](http://cacm.acm.org/news/speeding-up-hash-tables/)
> 1. 1972 年，斯坦福大学斯坦福·W·阿舍曼工程学教授（荣誉退休）杰弗里·乌尔曼推测，基于贪婪开放寻址哈希表的均匀探测（本质上是使用贪婪算法随机选择一系列槽位，一旦发现有可用槽位，就插入该元素）是最优的。
> 2. Farach-Colton 说：“Iceberg 哈希表具有强大的数学特性，并且在实践中比之前的哈希表速度更快。” 他补充道：“在此基础上，Iceberg 哈希表真正发展出了微型指针。”
> 3. 2021年11月，Iceberg哈希算法的作者发表了论文《微型指针》（Tiny Pointers），这篇论文为解决时间和空间问题带来了新的突破。该论文引入了一种新的数据结构对象——微型指针，它可以用来替代传统的指针。
> 4. Farach-Colton解释说：“指针最初只有8位。随着计算机容量的增长，指针也随之增长；先是需要16位，然后是32位和64位。微型指针比传统指针占用更少的内存。”
> 5. 后来，Krapivin 发现了一种新的、更优的哈希表结构，它推翻了 Yao 的猜想，但并未推翻 Ullman 的猜想，并且有望比以往的开放寻址哈希表实现更快的搜索速度。这一结果意义重大，但需要注意的是，一些其他类型的哈希表，例如不使用开放寻址的 Iceberg 表，其速度也比 Krapivin 构建的哈希表更快。此外，Tiny Pointers 考虑了数据元素的插入和删除，而 Krapivin 的结构只考虑了插入操作。
> 6. Farach-Colton、Krapivin 和 Kuszmaul 合作，于 2025 年 1 月发表了一篇论文，并于 2025 年 2 月进行了更新，论文标题为“无需重排序的开放寻址的最优界限”。该论文旨在重新审视数据结构中最简单的问题之一：将元素插入开放寻址哈希表，以便以后可以用尽可能少的探测次数检索元素。
> 7. 最终：结果表明，使用非贪婪哈希表可以构建一个空间效率和均摊预期查询时间都达到完美的哈希表：兼具两者的优势。第二个结果还获得了比任何贪婪算法都更优的最坏情况预期时间界限。
> 8. 康威在评论克拉皮文的研究成果时表示：“虽然这类理论成果可能不会直接催生出最先进的哈希表设计，但它们能够帮助我们从根本上理解哈希表及其相关问题。这可以带来一些间接的应用，例如马赛克页中的微型指针。此外，理论成果还有助于解释哈希表中一些长期存在的未解之谜。”

&emsp;8. [动画师和特效艺术家感受到了人工智能带来的生存危机Animators and Special-Effects Artists Feel Existential Pinch of GenAI](https://cacm.acm.org/news/animators-and-special-effects-artists-feel-existential-pinch-of-genai/)

&emsp;9. [人类学家的自动化改进指南An Anthropologist’s Guide to Better Automation](https://cacm.acm.org/opinion/an-anthropologists-guide-to-better-automation/)

&emsp;10. [在生成式人工智能时代，程序理解是计算机科学教育的核心技能Program Comprehension as a Central Skill in CS Education in the Era of Generative AI](http://cacm.acm.org/blogcacm/program-comprehension-as-a-central-skill-in-cs-education-in-the-era-of-generative-ai/)
> 1. 对于学习者和专业人士而言，核心问题不再是“我能从头开始编写这段代码吗？”，而是“我是否足够理解这段代码，能够对其进行评估、调整和整合？”
> 2. 在 GenAI 时代，关键技能不是编写代码，而是阅读、理解、评估和修复代码。因此，当学生要求 AI 工具“用 Python 实现快速排序”时，他们可能在几秒钟内得到正确答案，但他们真的能理解代码的本质吗？
> 3. 随着学生越来越依赖人工智能生成代码，如果缺乏扎实的代码理解能力，他们将无法区分人工智能生成的正确代码和存在严重缺陷的代码。计算机科学教育者应该考虑将部分教学重点从代码编写转移到代码理解，并教导学生批判性地分析、调试和验证人工智能生成的解决方案。
> 4. 教授程序等价性能够培养学生判断人工智能生成的代码是否正确、安全且符合其需求所需的关键理解能力。
> 5. 停机问题（英语：halting problem）是逻辑数学中可计算性理论的一个问题。通俗地说，停机问题就是判断任意一个程序是否能在有限的时间之内结束运行的问题。
> 6. 与其将GenAI视为对传统编程教学法的威胁，教育者不如将其视为机遇。3程序理解可以成为连接实践与理论、编码与概念的统一主题。
> 7. 对于初学者来说，理解力可以确保他们不会被人工智能生成的代码所淹没，并为他们提供评估和学习的工具。
> 8. 对于高级学生来说，理解力将日常编程挑战与等价性和不可判定性等更深层次的理论概念联系起来。
> 9. 对于未来的专业人士而言，理解能力有助于培养在协作环境中维护、测试和集成代码所需的技能。
> 10. 从这个意义上讲，程序理解能力并非取代编程技能，而是丰富编程技能。它将重点从代码的外观转移到代码的含义。

&emsp;11. [当黑客不需要入侵你的时候When Hackers Don’t Need to Hack You](https://cacm.acm.org/blogcacm/when-hackers-dont-need-to-hack-you/)

&emsp;12. [通过数字化统一构建弹性基础设施Resilient Infrastructures via Digital Unification](https://cacm.acm.org/opinion/resilient-infrastructures-via-digital-unification/)

&emsp;13. [了解学习是如何运作的Learning How Learning Works](https://cacm.acm.org/news/learning-how-learning-works/)
> 1. 信息局部性（相关词语彼此靠近）是语言对人类和机器都易于学习的重要特性。
> 2. 对于小众语言，在数据量小的情况下，模型该如何学习

&emsp;14. [构建连续体：从分布式融合到人工智能原生网络演化的16种结构Engineering the Continuum: From Distributed Convergence to 16 Constructs for AI-Native Network Evolution](https://cacm.acm.org/blogcacm/engineering-the-continuum-from-distributed-convergence-to-16-constructs-for-ai-native-network-evolution/)

&emsp;15. [软件团队实施 OKR 的挑战与陷阱Challenges and Pitfalls in Implementing OKRs in Software Teams](https://cacm.acm.org/blogcacm/challenges-and-pitfalls-in-implementing-okrs-in-software-teams/)
> 1. OKR 在纸面上看似简单，实则难以有效实施。

&emsp;16. [人工智能应该让工作感觉更好AI Should Make Work Feel Better](https://cacm.acm.org/blogcacm/ai-should-make-work-feel-better/)

&emsp;17. [具身智能中的创造论与进化论Creationism and Evolutionism in Embodied Intelligence](https://cacm.acm.org/blogcacm/creationism-and-evolutionism-in-embodied-intelligence/)
> 1. 试图让单一的机器人形态涵盖所有场景几乎注定会走上一条缓慢而循序渐进的道路。如果要求人形机器人完成清洁、烹饪、照料老人、取物、整理家居等任务，那么每增加一个新领域，就需要开发独立的运动库、数据采集、感知系统、控制逻辑和安全测试。这些都是逐步添加的：每个场景都需要大量的独立工程投入。不同任务之间的技能迁移非常有限，因此不存在“解决X问题就能自动获得Y和Z”的简单方法。
> 2. 哪些形态最有可能快速演化？实际上，答案是那些已经大规模出货的机器人。
> 3. 这是一个真正的商业飞轮：规模化降低成本，提高可靠性；更高的价值推动更多部署；更多部署产生更多数据，从而进一步提升性能。从演化的角度来看，具身人工智能不太可能从一个孤立设计的理想实体中诞生。它将通过升级和整合那些已经拥有规模、数据和供应链的现有形式而出现。
> 4. 在具身智能领域，成本是一种选择压力。能够以可接受的成本提供足够价值的形态才能生存并规模化；而那些针对其主要应用场景过度设计的形态，或许在舞台上光彩夺目，却难以跨越商业鸿沟。
> 5. 正确的问题不是“人形机器人：是还是否？”，而是“在生态系统演化之后，在哪些特定场景下，人形机器人最终会成为最佳形态？”答案将在实际部署中显现，而非设计阶段。

&emsp;18. [写好的定义归根结底遵循一条基本规则Writing Good Definitions Comes Down to One Basic Rule](https://cacm.acm.org/blogcacm/writing-good-definitions-comes-down-to-one-basic-rule/)

&emsp;19. [答案越便宜，问题越贵。As Answers Get Cheaper, Questions Grow Dearer](https://cacm.acm.org/opinion/as-answers-get-cheaper-questions-grow-dearer/)
> 1. 19世纪30年代和40年代摄影技术的进步开始挑战这一传统观念。起初，摄影似乎对画家构成了威胁。如果机器能够比人手更精确、更快速地记录世界，那么绘画还有什么意义呢？但随着时间的推移，摄影使绘画摆脱了再现现实的束缚。画家们不再需要与相机竞争，去复制现实。相反，他们可以专注于早期相机无法捕捉的微妙之处——光影的变幻、感知的质感以及对熟悉事物的全新诠释。摄影使绘画摆脱了写实主义的束缚，但更有趣的是，取而代之的是什么。
> 2. 相机提供了廉价的复制品：大量的答案。印象派画家改变了框架，将艺术定位为提出更深刻问题的基础。
> 3. 更重要的是保持好奇心并持续探究的能力。  正因如此，好的问题——即便代价不菲——才具有战略意义。好的问题能够拓展认知领域，重新定义问题。

&emsp;20. [软件架构的演进正在消耗我们更多的能源。Evolution of Software Architecture is Costing Us More Energy](https://cacm.acm.org/blogcacm/evolution-of-software-architecture-is-costing-us-more-energy/)十分重要的一篇文章
> 1. 计算机架构演进

&emsp;21. [零日漏洞利用的危险性The Dangers of Zero-Day Exploits](https://cacm.acm.org/news/the-dangers-of-zero-day-exploits/)

&emsp;22. [加强不断演进的人工智能代理的安全边界Strengthening Safety Boundaries for Evolving AI Agents](https://cacm.acm.org/blogcacm/strengthening-safety-boundaries-for-evolving-ai-agents/)

&emsp;23. [众人拾柴火焰高：让边缘群体参与计算机调查研究It Takes A Village: Engaging Marginalized Groups in Computing Survey Research](https://cacm.acm.org/opinion/it-takes-a-village-engaging-marginalized-groups-in-computing-survey-research/)

&emsp;24. [腐蚀法学硕士的新方法New Ways to Corrupt LLMs](https://cacm.acm.org/blogcacm/new-ways-to-corrupt-llms/)
> 1. 事情从此变得更加奇怪，也更加可怕，出现了一种被称为“归纳后门”的新现象，这是语义泄漏更令人不安的应用

&emsp;25. [人工智能抓取与开放网络AI Scraping and the Open Web](https://cacm.acm.org/opinion/ai-scraping-and-the-open-web/)

&emsp;26. [虚拟协作Virtual Collaboration](https://cacm.acm.org/news/virtual-collaboration/)

&emsp;27. [计算机年鉴The Year in Computer Science](https://www.quantamagazine.org/the-year-in-computer-science-20251216/)

&emsp;28. [可持续量子计算Sustainable Quantum Computing](https://cacm.acm.org/research/sustainable-quantum-computing/)
> 1. 量子计算生命周期中碳排放基准测试的机遇与挑战。

&emsp;29. [技术视角：面向同步函数式数据流编程语言的形式化验证编译器Technical Perspective: Toward a Formally Verified Compiler for a Synchronous, Functional, Data-Flow Programming Language](https://cacm.acm.org/research-highlights/technical-perspective-toward-a-formally-verified-compiler-for-a-synchronous-functional-data-flow-programming-language/)

&emsp;30. [技术乐观主义、技术悲观主义和技术现实主义Techno-Optimism, Techno-Pessimism, and Techno-Realism](https://cacm.acm.org/opinion/techno-optimism-techno-pessimism-and-techno-realism/)
> 1. “技术乐观主义”一词由风险投资家马克·安德森在2023年发表的《技术乐观主义宣言》中推广开来。他在文中指出，“技术是人类雄心壮志和成就的荣耀，是进步的先锋，也是我们潜能的实现”，而“……技术会抢走我们的工作，降低我们的工资，加剧不平等，威胁我们的健康，破坏环境，败坏我们的社会，腐蚀我们的孩子，损害我们的人性，威胁我们的未来，并且时刻处于毁灭一切的边缘”的说法则是谎言。该宣言提倡有效加速主义，即呼吁不受限制的技术进步。
> 2. ACM AM图灵奖得主Yoshua Bengio和Geoffrey Hinton在内的多位计算机领域权威人士近期都提出了通用人工智能（AGI）带来的生存风险问题，并普及了“末日概率”（ P (doom)）的概念，即人工智能导致生存灾难性后果的概率。
> 3. 这篇文章题为《野外环境中的缺陷奖励函数》，描述了一项尝试，即使用强化学习来训练智能体玩电子游戏。该智能体为了达到目标（即获得高分），甚至愿意不断地点燃船只并原地打转。这篇文章的重点在于解释人工智能在存在缺陷奖励函数的情况下所面临的安全问题。
> 4. 万维网发明者蒂姆·伯纳斯-李在他的新回忆录《人人共享》（This Is for Everyone）中所写： “在互联网的早期，惊喜和愉悦无处不在，但如今，网络生活带来的焦虑与快乐一样多。”虚假信息、两极分化、选举操纵和社交媒体滥用等问题已成为互联网的代名词。究竟发生了什么？奖励机制出了问题。

&emsp;31. [集体智慧无法规模化，而情境化协作学习可以。Collective Intelligence Doesn’t Scale, In-Context Collaborative Learning Does](https://cacm.acm.org/blogcacm/collective-intelligence-doesnt-scale-in-context-collaborative-learning-does/)重要
> 1. 集体智能（CI）
> 2. 集体智能系统并非采用单一的庞大模型，而是汇集众多智能体来解决维度变化的问题，例如跨环境泛化或跨具身泛化。
> 3. 大多数CI系统都是由静态智能体构建的：每个智能体都实现固定的输入输出映射，并且最多只能与其他智能体协调预训练策略。这带来了两个根本性的局限性。首先，CI难以在主流加速器（例如通用GPU）上高效实现。其次，更重要的是，由于智能体在推理过程中无法学习，CI的推理时泛化能力很弱：扩展到更多智能体并不能可靠地转化为解决更复杂、未见过的任务或适应新的系统结构的能力。
> 4. 集体自适应智能（CAI）的用武之地。CAI是一种集体智能形式，在这种智能中，集体本身可以在推理时进行调整：个体不仅协调固定的行为，还会随着任务的展开更新内部状态，从而重新组织角色、沟通模式和策略。
> 5. 无梯度上下文学习（Gradient-Free In-Context Learning, ICL）是指大型语言模型（LLM）在推理过程中，仅通过输入中提供的少量示例或指令来快速适应新任务，而无需更新模型参数（权重）或进行梯度下降（Gradient Descent）优化。将这一概念从单一模型扩展到群体模型，并将由此产生的机制称为情境内协作学习（ICCL）。每个智能体都会根据其输入、输出以及与其他智能体交换的消息来更新其内部记忆。这使得计算机辅助人工智能（CAI）系统能够在推理时协调角色和通信模式并习得新技能。至关重要的是，由于增加智能体数量会在不改变共享参数的情况下增加总内存和计算量，ICCL使得CAI系统能够在推理时通过在推理时添加智能体来实现扩展，而传统的计算机集成（CI）和单体模型则无法做到这一点。

&emsp;32. [从数据到意义：引领互联网迈入人工智能原生时代From Data to Meaning: Taking the Internet into the AI-Native Era](https://cacm.acm.org/blogcacm/from-data-to-meaning-taking-the-internet-into-the-ai-native-era/)

&emsp;33. [未来趋势：人工智能如何拓展我们对人类运动的理解Future Moves: How AI Expands Our Understanding of Human Motion](https://cacm.acm.org/news/future-moves-how-ai-expands-our-understanding-of-human-motion/)
> 1. 人工智能 (AI) 正在提高人们对人类运动方式的理解，并推动运动技术的进步：基于 AI 的系统让运动员和舞蹈演员深入了解身体和表现性运动的力学原理；在临床环境中，AI 正在丰富损伤治疗方法，并支持神经退行性疾病的诊断和康复策略。
> 2. “无标记”动作捕捉技术利用计算机视觉算法直接从视频中识别和提取运动数据。

&emsp;34. [18世纪的模拟人形机器人Analog Humanoid Robots from the 18th Century](https://cacm.acm.org/blogcacm/analog-humanoid-robots-from-the-18th-century/)
> 1. 法国人雅克·沃康松于1738年展出的模拟自动装置树立了行业标杆。除了他设计的消化鸭之外，他还创造了鼓手和笛手。可惜的是，他的装置并未保存至今。沃康松还参与了1745年胶带控制织布机的研发。
> 2. 或许最著名的机械象棋棋手是沃尔夫冈·冯·肯佩伦于1769年展出的“土耳其棋手”。然而，它实际上是一个假的自动装置，里面隐藏着一位真人棋手。这台机器和其他一些机器人一样，曾在一些国家展出。
> 3. 彼得·金辛和大卫·伦琴于1784年创作的扬琴演奏者人偶尤为引人注目，它现藏于巴黎工艺美术博物馆。雅克-德罗家族的三款至今仍可正常运作的自动人偶——绘图员、作家和音乐家（1774年）——被认为是世界上最精密的机器人

&emsp;35. [人工智能时代计算思维的兴起The Rise of Computational Thinking in the Age of AI](https://cacm.acm.org/opinion/the-rise-of-computational-thinking-in-the-age-of-ai/)
> 1. 在人工智能时代，什么是计算思维？
> 2. 我们绝不希望大众使用人工智能工具生成代码，并全盘接受其输出结果。
> 3. 我们突然需要重新审视所有那些可信度属性，而这些属性并非简单的对错、真假、是非、开或关。
> 4. 贝尔蒙特三项原则是尊重人格、行善和公正。其他人也提出了其他原则，但我们先从这三项原则入手，探讨它们在计算机和人工智能系统中的应用。例如，尊重人格原则表明，人们在与聊天机器人对话时应该始终被告知相关信息。行善原则要求研究人员进行风险/收益分析，以最大限度地提高潜在收益并最大限度地降低潜在危害——例如，自动驾驶汽车在决定不伤害谁时。最后，公正这一伦理原则要求我们确保法院系统中的风险评估工具和招聘中使用的自动化决策系统的公平性。

&emsp;36. [不同的AI模型似乎在如何编码现实方面趋于一致。Distinct AI Models Seem To Converge On How They Encode Reality](https://www.quantamagazine.org/distinct-ai-models-seem-to-converge-on-how-they-encode-reality-20260107/)
> 1. 研究发现，即使使用不同的数据集或完全不同的数据类型进行训练，不同的AI模型也能发展出相似的表征。此外，一些研究表明，随着模型能力的提升，这些表征会变得越来越相似。
> 2. “为什么语言模型和视觉模型会一致？因为它们都是同一个世界的镜像，”菲利普·伊索拉说道。
> 3. 如果人工智能研究人员对柏拉图的观点存在分歧，他们或许能从他的前辈毕达哥拉斯那里找到更多共同点。毕达哥拉斯的哲学据说是以“万物皆数”为前提的。这恰如其分地描述了驱动人工智能模型的神经网络。它们对文字或图像的表征仅仅是一长串数字，每个数字都代表着特定人工神经元的激活程度。
> 4. 间接衡量：假设你想比较两个语言模型如何表示动物词汇。首先，你会整理一份词汇列表——例如：狗、猫、狼、水母等等。然后，你会将这些词汇输入到两个网络中，并记录它们对每个词汇的表示。在每个网络中，这些表示都会形成一个向量簇。接下来，你可以问：这两个向量簇的整体形状有多相似？“这可以被描述为衡量相似性的相似性，”
> 5. 有趣的是，一些研究发现，功能更强大的模型似乎比功能较弱的模型在表征方面具有更高的相似性。2021年的一篇论文将这种情况称为“安娜·卡列尼娜情境” 。（在新标签页中打开）这是对托尔斯泰经典小说开篇第一句的致敬。（在新标签页中打开）或许成功的AI模型都是相似的，而每个不成功的模型都有其自身的失败之处。
> 6. Huh进行了一项实验，他使用来自维基百科的图片描述数据集，测试了五种视觉模型和十一种不同规模的语言模型。他将图片输入视觉模型，将图片描述输入语言模型，然后比较两种模型中向量的聚类结果。他观察到，随着模型能力的增强，表征相似性稳步提高。这与柏拉图式表征假说的预测完全吻合。
> 7. “你不可能用简单的解释来概括一个拥有万亿个参数的系统，”杰夫·克伦说道。（在新标签页中打开）一位来自不列颠哥伦比亚大学的人工智能研究员表示：“答案将会很复杂。”