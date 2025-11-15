---

title: 十一月：论文、博客、通讯阅读
description: 十一月：论文、博客、通讯阅读
date: 2025-11-01
timeline: true
head:
  - - meta
    - name: keywords
      content: 十一月：论文、博客、通讯阅读
  - - meta
    - name: description
      content: 十一月：论文、博客、通讯阅读
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
&emsp;10. [使用生成式AI系统去技能化和提升技能Deskilling and upskilling with generative AI systems](https://crowston.syr.edu/sites/crowston.syr.edu/files/GAI_and_skills.pdf)
> 1. 技能进行再培训、提升，并开发出更适合人工智能的新型、更有效的批判性思维框架
> 2. 支持客户服务人员的聊天机器人使经验较少的操作员能够在更有经验的操作员的水平上工作。但其他应用程序似乎对更有经验的用户更强大，即不是去技能化，而是提高技能。

&emsp;20. [RAG 之所以有效，有一部分原因是它似乎可以看作是一种隐式微调](https://arxiv.org/abs/2212.10559)
> 1. ICL是一种类似于显示训练（微调）、所以我们叫它隐式微调
> 2. 提出基于动量的注意力机制、优于最传统的香草注意力机制
> 3. 我们找出了变形金刚注意力和梯度下降之间的双重形式，并将ICL解释为元优化的过程。我们分析了上下文学习和显式优化之间的联系，并建议将ICL理解为隐式优化。我们提供了几行经验证据，从多个角度证明ICL和显式优化是相似的。我们设计了基于动量的注意力并验证了其有效性，这再次支持了我们对元优化的理解，并显示了我们的理解对未来模型设计的启发潜力。

### Communications/Blog

&emsp;1. [答案引擎重新定义搜索Answer Engines Redefine Search](https://cacm.acm.org/news/answer-engines-redefine-search/)

> 1. 新型人工智能搜索引擎，也称为答案引擎，利用大型语言模型（LLM）为复杂查询提供直接、对话式的答案，支持多步骤推理，并允许用户以交互方式优化搜索。这一演变使传统搜索从关键词匹配转向能够理解上下文、意图和多模态输入的人工智能系统，并将用户体验从筛选链接转变为与人工智能进行对话。
> 2. 为了应对搜索引擎的冲击，谷歌自身也做出了一些调整。2024年5月，谷歌推出了AI概览（AI Overviews，简称AIOs），这项搜索功能会根据用户的搜索查询生成AI生成的摘要，这些摘要通常会出现在搜索结果页面的最上方，也就是谷歌返回传统搜索结果时，付费最高的广告商所在的位置。
> 3. 出版商正加大力度防止人工智能搜索引擎未经授权使用其内容。这些搜索引擎会聚合和汇总来自出版商网站的大量数据。面对网站流量下降和广告收入减少的困境，出版商采取了法律行动和许可协议，以保护其知识产权并实现其商业价值。与此同时，一些技术措施——例如屏蔽人工智能网络爬虫和使用 TollBit 等人工智能商业化服务——也正在实施，以阻止或规范人工智能对出版商内容的访问。
> 4. 怀特表示：“最终，我们目前正在从搜索引擎向答案引擎演进。下一步是从答案引擎演进到行动引擎。这些实际上是能够代表用户执行整个任务或任务部分内容的代理。”

&emsp;2. [编排：企业人工智能中缺失的一环Orchestration: The Missing Link in Enterprise AI](https://cacm.acm.org/blogcacm/orchestration-the-missing-link-in-enterprise-ai/)

&emsp;3. [技术定义标准Criteria for Technical Definitions](https://cacm.acm.org/blogcacm/criteria-for-technical-definitions/)

> 1. 在任何技术领域，对概念的定义都不应该限制实例必须完美无缺。软件工程的一个特殊之处在于，我们总是倾向于进行道德评判，热衷于告诉人们应该如何工作，有时是为了掩盖我们无法清楚地告诉他们应该做什么的事实。这些要点式表述违反了清晰写作的基本原则，因为它们没有明确指出应该使用并列关系（“和”还是“或”）。数字孪生体必须满足所有这些属性吗？或者只需要满足其中一部分？如果是，那么具体是哪些属性？原则是：定义必须明确无误。

&emsp;4. [笨蛋，是规格说明！It’s the Specification, Stupid!](https://cacm.acm.org/opinion/its-the-specification-stupid/)

> 1. 事实上，目前普遍采用的在低质量软件上层层修补的做法，似乎只会加剧一场徒劳无功的恶性竞争。大型语言模型（LLM）生成的代码可能会使情况变得更糟，因为引导LLM本身就是一门艺术，LLM可能会返回意料之外的、存在缺陷的软件，而且LLM可靠的自检能力目前更多的是一种美好的愿望，而非现实。
> 2. 形式化验证是传统漏洞查找方法之外的一种可行（甚至是唯一）的替代方案。它是一套基于数学的验证技术，旨在支持软件密集型系统的规范化开发。形式化验证与工业软件开发的融合已取得显著进展。尽管取得了这些进展，形式化验证仍未得到广泛应用，理想与实践之间仍然存在巨大差距。
> 3. 然而，验证（无论是形式化验证还是其他形式的验证）目前在生命周期中仍然处于相当靠后的位置。到那时，最严重的设计错误已经出现，而且在规范中发现错误的概率至少与在实现中发现错误的概率一样高。这样一来，验证就好比在大部分马匹已经离开后才锁上谷仓的门，其主要功能也仅限于查找和修复剩余的缺陷，而这些缺陷往往是针对有缺陷的规范进行的。
> 4. 底层程序验证演算通常基于霍尔演算的变体，虽然对于玩具编程语言来说直观且非常优雅，但对于现代软件系统中种类繁多的编程结构和极其复杂的底层状态空间而言，却显得笨拙不堪。对于共享变量并发机制来说，情况尤其如此。鉴于这些限制和复杂性，基于现实世界编程语言的形式化验证有时就像拉着手刹开车一样。更糟糕的是，验证通常针对那些功能嵌入在操作系统、通信总线和中间件等复杂结构中的软件进行。
> 5. “霍尔演算”可能指的是“霍尔逻辑”（Hoare Logic）或“霍尔斯特德复杂性度量”（Halstead complexity measures）。霍尔逻辑是计算机科学中一种形式系统，用于用数学方法证明计算机程序的正确性，由东尼·霍尔提出。霍尔斯特德复杂性度量是另一种度量方法，用来量化软件的复杂程度。
> 6. 大型规范工作包括 WebAssembly、RISC-V 指令集架构和 seL4 虚拟机管理程序的形式化。
> 7. 前置：但这需要我们摒弃冯·诺依曼式程序中占主导地位的“测试-修复-测试”循环，以及这种循环通常难以区分小规模和大规模编程的弊端。不可信的软件不应成为形式化流程的来源，而应成为目标。因此，更优的范式是专注于生命周期早期阶段的设计、保障和验证活动，然后根据大型规范生成正确且具有弹性的技术实现。这种工作重心的转变可以同时释放数个数量级的生产力和重用潜力，并实现极高的弹性和安全性。

&emsp;5. [The Emotional Impact of ChatGPT](https://cacm.acm.org/news/the-emotional-impact-of-chatgpt/)

> 1. 麻省理工学院媒体实验室和OpenAI的研究发现，虽然语音聊天机器人最初比文本聊天机器人更有助于缓解孤独感和依赖性，但当语音机器人被大量使用时，这些优势会逐渐减弱。

&emsp;6. [角色互换：人工智能如何训练人类Role Reversals: How AI Trains Humans](https://cacm.acm.org/news/role-reversals-how-ai-trains-humans/)

> 1. 社会科学家为这种适应过程创造了一个术语：操作性条件反射。当词语、短语或想法能够吸引人们，或者传递出智慧、公平或某种社会价值的信息时，人们就会使用它们。
> 2. 语言学习模型（LLM）将如何改变语言，以及人们的思维和行为方式，尚不完全清楚。然而，研究人员已经发出警告。“人类可能会失去语言多样性，”矢仓说。由此产生的负反馈循环可能导致训练数据多样性降低，并最终导致语言的“核心崩溃”，因为人类和人工智能会不断地相互强化。

&emsp;7. [AI Safety Connect 解决了联合国大会上的一个关键关切AI Safety Connect Addresses a Key Concern at the U.N. General Assembly](https://cacm.acm.org/news/ai-safety-connect-addresses-a-key-concern-at-the-u-n-general-assembly/)

&emsp;8. [通往超人级人工智能数学家的道路The Path to a Superhuman AI Mathematician](https://cacm.acm.org/news/the-path-to-a-superhuman-ai-mathematician/)

> 1. “未来会出现一位超人般的AI数学家吗？”普林斯顿大学理论计算机科学家桑吉夫·阿罗拉教授在9月份举行的第十二届海德堡桂冠论坛上提出了这个问题。那意味着什么？
> 
> 想象一下所有可能的数学定理的集合；人类数学家只证明了其中的一部分。阿罗拉说：“超人人工智能数学家能够证明的定理比人类更多。”。这个想法可以追溯到20世纪初大卫·希尔伯特关于数学自动化的梦想。尽管哥德尔、图灵和丘奇的工作粉碎了这一梦想，但它留下了永恒的遗产：形式化证明验证（形式验证的含义是根据某个或某些形式规范或属性，使用数学的方法证明其正确性或非正确性）的概念——即数学证明可以用精确的语言编写，然后由计算机进行严格的验证。
> 2. 现代开源编程语言和证明辅助工具Lean（Lean 是微软研究院在2013 年推出的计算机定理证明器）非常适合用于此目的。
> 3. 但那些值得探索的数学问题呢？它们还需要人类数学家吗？阿罗拉说：“越来越多的证据表明，人工智能本身就能生成非常好的问题，因此你不再需要人类提供的庞大题库。人工智能或许会从一些人类数据开始，但之后它就能自主生成新的问题。为什么这种方法可行？人工智能最强大的优势在于它的创造力。它基于海量数据进行训练，然后能够从数据中发现信息，并以有趣的方式将它们组合起来。它确实很有创造力，但我们也知道它也会产生幻觉，对吧？它对真理的理解并不十分准确。但它拥有精益求精的能力来验证答案，并剔除错误的问题和答案。”
> 4. Arora 提到了 DeepMind 的 AlphaGeometry 和 AlphaProof，以及他自己在普林斯顿语言与智能实验室开发的哥德尔证明器。2023 年，AlphaGeometry 无需人类演示即可解决国际数学奥林匹克 (IMO) 级别的几何问题。AlphaProof 则专注于更通用的形式数学推理，而不仅仅是几何，并在 2024 年达到了 IMO 银牌标准。今年，OpenAI 和 Google 的模型达到了 IMO 金牌标准。
> 5. 今年早些时候，人工智能初创公司 Morph Labs 宣布其人工智能在将英文证明翻译成 Lean 语言方面取得了重大进展，这为打造超人般的人工智能数学家铺平了道路。数学家陶哲轩和 Alex Kontorovich 一直试图将强素数定理翻译成 Lean 语言，他们原以为这项工作需要数年时间才能完成，但借助名为 Gauss 的人工智能工具，Morph Labs 仅用了三周时间就做到了。
> 6. 但请记住，这种数学超级智能并不意味着它完美无缺，而只是比人类更胜一筹。”

&emsp;9. [人工智能技能下降悖论The AI Deskilling Paradox](https://cacm.acm.org/news/the-ai-deskilling-paradox/)
> 1. 知识工作者认为生成式人工智能让工作看起来更容易。但问题在于：研究人员发现，他们实际上是将解决问题的专业知识拱手让给了系统，转而专注于收集和整合反馈等功能性任务。与此同时，他们对使用人工智能也变得更加自信。“对人工智能的高度信任很可能导致感知到的工作量降低，”李说道。
> 2. [人工智能工作总结](https://ai-2027.com/summary)、[人工智能2027](https://ai-2027.com/)

&emsp;11. [重新构想分析：流媒体争夺观众忠诚度的关键环节Reimagining Analytics: The Missing Link in Streaming’s Battle for Audience Loyalty](https://cacm.acm.org/blogcacm/reimagining-analytics-the-missing-link-in-streamings-battle-for-audience-loyalty/)
> 1. 更深入的洞察，平台正在整合行为信号、情感分析和发现模式，贯穿内容分发和互动工作流程。这些更丰富的数据有助于解答一些关键问题：哪些内容能够建立情感联系？哪些信号可以预测用户流失？平台如何在用户离开之前进行干预？
> 2. PREDICT（模式识别、风险评分、早期干预、专属支持、个性化服务、持续优化、投资回报率追踪）等框架正逐渐成为分析驱动型规划的标准配置。

&emsp;12. [过去的计算机技术突破能教会我们哪些关于人工智能的知识？What Past Computing Breakthroughs Teach Us About AI](https://cacm.acm.org/blogcacm/what-past-computing-breakthroughs-teach-us-about-ai/)

&emsp;13. [人工智能疲劳：对人工智能快速发展所带来的人性影响的反思AI Fatigue: Reflections on the Human Side of AI’s Rapid Advancement](https://cacm.acm.org/opinion/ai-fatigue-reflections-on-the-human-side-of-ais-rapid-advancement/)
> 1. “人工智能疲劳”是指个人和组织因人工智能（AI）持续快速发展而产生的集体疲惫感。它反映了人们为了适应这种前所未有的快速变化而承受的心理、情感和运营压力，这种变化已经持续了相对较长的时间（数年），而且几乎没有放缓的迹象。在某种程度上，它承认了人工智能的发展速度极其惊人，而适应这种变化需要付出代价，我们所有人都必须清楚地认识到这一点。
> 2. 首先，研究成果数量惊人——仅2024年12月，arXiv上的投稿量就超过21,000篇¹，其中人工智能相关类别的论文就超过6,000篇。即使每天花四个小时阅读这些论文，也只能读完已发表研究的8%。
> 3. “应急能力”的概念——人类在极度紧张的情况下为短期生存而调动的一系列适应性心理和生理系统，——有助于解释人工智能领域普遍存在的疲惫感。应急能力最初是在自然灾害和新冠疫情的背景下提出的，它适用于终点明确的冲刺式场景。然而，当前的人工智能革命带来了一个独特的挑战：它要求持续的冲刺式投入，而且没有明确的终点线。
> 4. 冒充者综合征（Impostor syndrome），又称自我能力否定倾向，是保琳（Pauline R. Clance）和苏珊娜（Suzanne A. Imes）在1978年发现并命名的，是指个体按照客观标准评价为已经获得了成功或取得成就，但是其本人却认为这是不可能的，他们没有能力取得成功，感觉是在欺骗他人

&emsp;14. [GenAI：交战规则GenAI: Rules of Engagement](https://cacm.acm.org/blogcacm/genai-rules-of-engagement/)
> 1. 我们想强调的是，当时的现实世界无法适应用户的需求；用户只能按照图书馆的既定布局进入和使用。所以现在我们要问：如果取消这些限制，用户会失去什么？我们不再假设“最好的”GenAI工具是能够让用户快速找到答案的工具，而是要问：提高用户注意力会产生什么影响——我们的互动规则是什么？

&emsp;15. [利用模拟受众测试数据故事Testing Data Stories with Simulated Audiences](https://cacm.acm.org/blogcacm/testing-data-stories-with-simulated-audiences/)
> 1. 是否有可能利用生成式人工智能来预测不同的受众群体对数据故事的反应，甚至在与他们分享之前就做出预测？
> 2. 我们通常把人工智能看作内容创作者：撰写文本、生成图像、谱写音乐。但如果我们反过来呢？与其让人工智能讲述故事，不如让它聆听故事。换句话说，我们可以将人工智能用作模拟观众：一个能够像特定类型的读者或观众一样对数据故事做出反应的替代者。这并非要取代真人，而是为了在进行真人测试之前，尽早获得洞察，并了解不同类型的受众可能会如何反应。

&emsp;16. [揭秘人工智能工具、人工智能代理和代理工作流程Demystifying AI Tools, AI Agents, and Agentic Workflows](https://cacm.acm.org/blogcacm/demystifying-ai-tools-ai-agents-and-agentic-workflows/)

&emsp;17. [网络架构的连续体The Continuum of Network Architecture](https://cacm.acm.org/blogcacm/the-continuum-of-network-architecture/)
> 1. 每一种架构都建立在前一种架构的基础上：人工智能原生系统仍然依赖于分组交换底层架构和云原生编排。它们共同扩展了网络的功能：从僵化的传输系统到可编程的弹性平台，如今又朝着整合这三者的智能基础设施迈进。
> 2. 下一代架构以云原生系统的可编程性和弹性为基础，将认知能力嵌入到架构本身。虽然云原生网络实现了工作负载的自动扩展和编排，但它们仍然主要以被动响应为主，在拥塞或阈值出现后才做出反应。随着应用程序向自主系统、实时控制和分布式人工智能推理演进，这种被动响应模式已无法满足需求。
> 3. AI原生网络以分布式智能扩展了这些基础，使网络不仅能够执行意图，还能理解和预测意图。抽象概念从工作负载扩展到智能（或代理）工作负载，这些自主实体能够感知上下文、推理意图并与对等节点协调。代理并非工作负载的替代品，而是其智能演化：能够实时感知、决策和行动的工作负载。

&emsp;18. [为什么尼采在人工智能时代仍然重要Why Nietzsche Matters in the Age of Artificial Intelligence](https://cacm.acm.org/blogcacm/why-nietzsche-matters-in-the-age-of-artificial-intelligence/)

&emsp;19. [将机器学习集成到物理安全架构中Integrating Machine Learning into Physical Security Architecture](https://cacm.acm.org/blogcacm/integrating-machine-learning-into-physical-security-architecture/)

&emsp;21. [智能眼镜的崛起The Rise of Smart Glasses](https://cacm.acm.org/news/the-rise-of-smart-glasses/)

&emsp;22. [让数字孪生预测您的心脏健康状况Let a Digital Twin Predict Your Heart’s Health](https://cacm.acm.org/news/let-a-digital-twin-predict-your-hearts-health/)

&emsp;23. [Researchers Are Hiding AI Prompts in Their Papers研究人员在论文中隐藏人工智能提示](https://cacm.acm.org/news/researchers-are-hiding-ai-prompts-in-their-papers/)
> 1. “这表明，目前这种做法主要集中在特定的研究领域，很可能是计算机科学领域，因为这些领域对快速注射的技术知识更为丰富，”他说。
> 2. 论文造假
> 3. 首先，提交门户网站需要使用自动筛查来检测速效注射。其次，出版商必须为作者和审稿人制定明确的人工智能使用政策。“第三，也是最重要的一点，我们需要从结构上改变科学论文本身，使其能够被机器阅读，让人工智能成为验证和复现研究结果的工具，而不是被操纵的目标，”林说道。他最新的研究表明，论文需要同时吸引两类读者：人类读者和人工智能系统。

&emsp;24. [争夺1亿个GPU的竞赛The Race to 100 Million GPUs](https://cacm.acm.org/news/the-race-to-100-million-gpus/)
> 1. 2025年7月，奥特曼公开庆祝OpenAI有望在2025年底前实现超过一百万个GPU上线。拥有最多GPU的AI公司将拥有明显的竞争优势，因为更强的计算能力意味着能够训练更强大的AI模型，因此实现一百万个GPU上线是一项了不起的成就。然而，奥特曼接下来的言论却令人惊讶；他表示OpenAI现在需要想办法将这一数字“提高100倍”。
> 2. 据德国美因茨约翰内斯·古腾堡大学生物信息学和软件工程教授安德烈亚斯·希尔德布兰特称，截至本文撰写之时，埃隆·马斯克的xAI在其Colossus 1超级计算设施上运行着约23万个GPU。而xAI的Colossus II设施的安装工作已进入后期阶段，届时xAI的GPU总数将增加55万个，达到约78万个。
> 3. 这意味着拥有最多筹码的人就有可能训练出最好的模型。这使得少数人工智能领域的领导者几乎不可避免地会继续尽可能多地购买芯片，直到扩展规律显著放缓或完全失效为止。
> 4. 以现有系统为参考，一个拥有100万个GPU的集群将消耗约2吉瓦的能源，这相当于约170万户家庭的用电量。他指出，将1亿个GPU投入使用需要数万亿美元的硬件、基础设施和能源成本。

&emsp;25. [五种针对企业的社会工程攻击类型（以及如何防范）Five Types of Social Engineering Attacks on Enterprises (and How to Prevent Them)](https://cacm.acm.org/blogcacm/five-types-of-social-engineering-attacks-on-enterprises-and-how-to-prevent-them/)
> 1. 远程访问诈骗
> 2. 网络钓鱼
> 3. 商业电子邮件诈骗 (BEC)
> 4. 水坑袭击
> 5. 基于深度伪造技术的身份冒充

&emsp;26. [设计偏见Bias by Design](https://cacm.acm.org/news/bias-by-design/)
> 1. 有意引入的偏见被视为抵消大型语言模型中固有偏见的一种方法。
> 2. 点击进入任何一个大型语言模型（LLM），你都可能遇到偏见。这些系统的内容是从互联网上抓取的，反映了主流社会的价值观、态度和思维方式。
> 3. 弗吉尼亚州乔治梅森大学人工智能与创新政策副教授西玛·门罗-怀特说道。伊利诺伊大学芝加哥分校哲学助理教授达莎·普鲁斯补充道：“这些系统中存在许多无意的偏见。”
> 4. 大多数LLM都包含编码种族歧视、性别偏见等的历史数据集。
> 5. 事实上，偏见——以及它们带来的歧义和问题——远远超出了数据模型本身。“人们在构建和运行人工智能系统时必须做出大量的决策，”卡内基梅隆大学语言技术助理教授马尔滕·萨普(Maarten Sap) 说。“这些选择直接影响系统的运行方式及其提供的信息。”
> 6. 人们可能会争论，在人工智能系统中添加有意偏见究竟是在弥补过去的不公正，还是在引入一种新的歧视形式。”
> 7. 处理与解决：对数据集进行筛选，使其放大或抑制输出结果；应用正则化技术来改变模型从数据中学习的方式，并引入人机交互训练（HITL）来奖励良好的响应并标记不良响应。随着时间的推移，结合人类反馈的强化学习（RLHF）会引导模型朝着理想的行为发展；多目标优化试图平衡准确性、人口统计均衡性和个体公平性等相互冲突的目标。对抗训练则教会人工智能在不依赖种族或性别等敏感信息的情况下做出决策。

&emsp;27. [AI’s Impact on Mental Health人工智能对心理健康的影响](https://cacm.acm.org/news/ais-impact-on-mental-health/)
> 1. 与聊天机器人交谈可能会对一个人的精神稳定性产生积极或消极的影响。