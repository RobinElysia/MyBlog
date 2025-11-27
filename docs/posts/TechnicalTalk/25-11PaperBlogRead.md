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

&emsp;30. [Working with AI: Measuring the Applicability of Generative AI to Occupations与人工智能合作：衡量生成式人工智能在职业中的适用性](https://arxiv.org/abs/2507.07935)
> 1. 分析人们使用人工智能开展的工作活动、这些活动的成功程度和覆盖范围，并结合从事这些活动的职业数据，朝着这一目标迈出一步。我们分析了一个包含20万条用户与微软Bing Copilot（一个公开可用的生成式人工智能系统）之间匿名化和隐私清理对话的数据集。我们发现，人们寻求人工智能帮助的最常见工作活动包括信息收集和写作，而人工智能本身执行的最常见活动包括提供信息和帮助、写作、教学和咨询。结合这些活动分类以及任务成功率和影响范围的衡量指标，我们计算了每个职业的人工智能适用性得分。我们发现，知识型职业群体（例如计算机和数学、办公室和行政支持）以及销售等工作活动涉及提供和沟通信息的职业，其人工智能适用性得分最高。此外，我们还描述了最成功执行的工作活动类型、工资和教育与人工智能适用性的相关性，以及现实世界的使用情况与职业人工智能影响的预测相比如何。

&emsp;42. [人类和机器智能中的快与慢思考Thinking Fast and Slow in Human and Machine Intelligence](https://dl.acm.org/doi/10.1145/3715709)
> 1. 双重处理理论 (Dual-Process Theory)、神经符号AI (Neuro-Symbolic AI)、元认知 (Metacognition)、SOFAI架构。
> 2. 作者借鉴了人类的两种认知方式：系统1 (System 1 - Fast): 直觉的、快速的、无意识的。在AI中对应于深度学习、强化学习或基于启发式的快速反应器。优点是快，缺点是可能不精确或缺乏可解释性；系统2 (System 2 - Slow): 逻辑的、缓慢的、深思熟虑的。在AI中对应于符号推理、规划（Planning）、搜索算法。优点是精确、逻辑严密，缺点是计算昂贵、速度慢。
> 3. 提出Fast and slow AI：多模态求解器 (Solvers): 系统底层拥有多个“快速求解器”（S1）和“慢速求解器”（S2）。元认知代理 (Metacognitive Agent): 这是SOFAI的核心创新点。它充当“大脑的指挥官”，负责：监控 (Monitoring): 评估当前任务的难度和状态；评估与选择 (Assessment & Selection): 决定当前问题应该用“快思考”处理（如果问题熟悉或简单），还是调用“慢思考”（如果问题新颖或复杂）；仲裁 (Arbitration): 在不同求解器之间进行切换或组合。
> 4. 人类在初学驾驶时（System 2）需要高度集中注意力，动作缓慢；熟练后（System 1）则变为下意识反应。SOFAI 模拟了这一过程：系统通过 System 2（慢速推理）解决难题后，可以将解决方案“内化”或训练给 System 1。随着时间推移，AI 处理相同类型任务的速度会变快，不再需要每次都调用昂贵的推理资源。

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

&emsp;28. [液体流经其中A Liquid Runs Through It](https://cacm.acm.org/news/a-liquid-runs-through-it/)
> 1. 最简单的液冷方案是将液体（通常是水和丙二醇的混合物）流经安装在GPU背面的冷板。这种液体起到冷却剂的作用；冷板则取代了目前传统风冷设计中使用的散热片，后者负责将芯片产生的热量带走。
> 2. 随着Verne公司大力推进冷板液冷技术（也称“芯片直冷”），Cantrell正密切关注着下一代技术：两相冷板。两相冷却并非使用水和丙二醇的混合液体来带走处理器的热量，而是使用含有制冷剂的混合液体。在从芯片吸收热量的过程中，制冷剂会从液态变为气态，从而提供比单相液体冷却方式更高效的热传递。
> 3. 微软与初创公司 Corintis（瑞士洛桑）合作开发了一种“微流体”设计，该设计使液体在芯片中循环，使冷却剂比冷板方法更接近热点。
> 4. 另一种名为浸没式冷却的技术是将服务器直接浸入冷却液中。虽然这种方法被认为比芯片直接冷却更有效，但其普及应用通常还需要更长时间，部分原因是它偏离了传统的服务器设计；相比之下，冷板式液冷基本上可以与传统布局兼容。

&emsp;29. [高等教育准备好迎接人工智能了吗？Is Higher Education Ready for AI?](https://cacm.acm.org/news/is-higher-education-ready-for-ai/)
> 1. 专家质疑学校是否在教授学生在人工智能主导的劳动力市场中所需的技能。
> 2. 有趣的是，研究还发现，经验更丰富的员工更能免受人工智能带来的颠覆性影响。
> 3. 近期内有必要在全校范围内开设“人人皆可使用的人工智能”课程
> 4. 虽然很多学校都在推出人工智能课程、专业和教学大纲，但很少有学校重新思考学生需要学习什么才能在人工智能优先的劳动力市场中取得成功。

&emsp;31. [A Message to the Computing Community About ACM’s Transition to Full Open Access](https://cacm.acm.org/news/a-message-to-the-computing-community-about-acms-transition-to-full-open-access/)
> 1. 好耶，免费了

&emsp;32. [通过大规模合作研究推进农业人工智能发展Advancing AI in Agriculture through Large-Scale Collaborative Research](https://cacm.acm.org/federal-funding-of-academic-research/advancing-ai-in-agriculture-through-large-scale-collaborative-research/)
> 1. 五个联邦政府资助的人工智能研究所为以农业为重点的人工智能研究提供了支撑。

&emsp;33. [模拟已灭绝物种Simulating Extinct Species](https://cacm.acm.org/news/simulating-extinct-species/)
> 1. 一些理论认为，翼龙起飞时像鸟类一样，后腿站立。另一种假说则提出，它们四肢着地，分三步跃起，这种起飞方式与蝙蝠的起飞方式有部分相似之处。
> 2. “很多时候，真正限制我们的是计算机资源，因为如果一个模拟需要运行一周时间，就很难在可行的时间内对其进行迭代并使其运行得更好，”福尔金厄姆说。“但随着知识的积累和计算机性能的提升，我看到模型变得越来越复杂。”

&emsp;34. [帕斯卡林：历史性计算器拍卖取消Pascaline: Auction of Historical Calculating Machine Canceled](https://cacm.acm.org/blogcacm/pascaline-auction-of-world-famous-historical-calculating-machine-canceled/)
> 1. 原定于2025年11月19日在巴黎举行的帕斯卡计算器拍卖会突然取消。相关行政法院在前一天发布了临时禁令，禁止出口这台举世闻名的历史性计算器。该计算器由法国数学家布莱兹·帕斯卡于1642年制造。佳士得拍卖行曾在纽约和香港展出过这台机器。帕斯卡计算器的估价在200万至300万欧元之间。据这家巴黎拍卖行称，它是迄今为止最重要的拍卖科学仪器。
> 2. 第一台机械计算器是在 17 世纪开发的：威廉·希卡德于 1623 年发明的“计算钟”（现已不存），帕斯卡于 1642 年发明的加减法装置，以及戈特弗里德·威廉·莱布尼茨于 1673 年发明的计算器。
> 3. 现存八台帕斯卡原版机器。它们分别位于巴黎工艺美术博物馆（一台六位数机器和两台八位数机器）、克莱蒙费朗亨利·勒科克博物馆（一台五位数机器和一台八位数机器）、德累斯顿数学物理沙龙（十位数机器）、纽约IBM公司（八位数机器）以及莱昂·帕尔塞的私人收藏（八位数机器）。

&emsp;35. [构建和实施网络弹性战略Building and Implementing Cyber Resilience Strategies](https://cacm.acm.org/blogcacm/building-and-implementing-cyber-resilience-strategies/)

&emsp;36. [个性化的影响On the Implications of Personalization](http://cacm.acm.org/opinion/on-the-implications-of-personalization/)
> 1. 我们常说“信息茧房”，指的是接收者接收到的信息都是根据其个人偏好和信念量身定制的。确认偏差是这种做法的一个潜在后果。
> 2. 如今互联网信息来源的多元化导致人们往往缺乏对事实的共同认知，并且由于缺乏共同的经验和公认的知识，更难找到共同点。我们今天在网络和现实生活中经常看到的那些分裂性的交流中，无疑能感受到这一点。

&emsp;37. [网络人文与遗产安全Cyber Humanities for Heritage Security](https://cacm.acm.org/research/cyber-humanities-for-heritage-security/)

&emsp;38. [在研究实验室中培养创新能力Cultivating Innovation in a Research Lab](http://cacm.acm.org/opinion/cultivating-innovation-in-a-research-lab/)
> 1. Jeremy Roschelle 分享了他在施乐帕克研究中心学到的研究管理经验。
> 2. (a) 高效交付高质量服务或产品的团队；(b) 在新兴技术领域进行创新并树立思想领导力的团队。
> 3. JSB作为我的导师，展现出的一项才能令我惊叹不已：他能记住每位核心业务负责人正在处理的“棘手难题”，了解他们面临的障碍，以及可能带来突破的因素。
> 4. JSB身体力行地诠释了这样一个理念：管理创新文化需要倾听并参与到团队的讨论中。
> 5. 实践领导者鼓励团队的求知欲，对数据带来的结果持开放态度，并支持雄心勃勃或新颖的方法。
> 6. 管理者是团队应对独特挑战的战略思想伙伴，协助团队获取资源并克服阻碍其工作的障碍。当然，研究团队也需要标准化的流程，例如，制定项目预算。清晰一致的流程，以及在关键环节的实施，能够确保创意团队专注于他们的智力挑战。
> 7. 如果管理者坚持交付成果的数量、类型或质量必须符合特定标准，则可能无意中扼杀了他们原本希望培养的创造力，鼓励团队追求唾手可得的成果，而不是雄心勃勃、具有划时代意义的问题。
> 8. 更有效的方法是关注创新实践本身的内在要素：识别有价值的挑战、促进协作、确保严谨的学术态度以及支持团队的工作。当创新实践健康且充满活力时，突破性的成果自然会随之而来。
> 9. 他们知道自身的声誉取决于他们的产出。正因为他们很容易理解这类指标，所以刻意追求特定的量化目标既没有必要，也并非特别有效。
> 10. 在JSB的指导下，我经常出入PARC，那时我总是能感受到引人入胜的问题、意义非凡的探索和充满希望的研究方法带来的喜悦。有了这些要素贯穿始终，就无需胡萝卜加大棒了。研究人员和创新者拥有惊人的内在动力——事实上，有时候最好的办法就是劝他们出去散散步或者休息个周末，因为“睡一觉”往往能带来突破。
> 11. 研究人员总体上比较内向，但当他们看到充满潜力且尚未充分开发的机遇空间时，他们会焕发出勃勃生机；当他们的想法所有权受到的威胁较小，同时又能与同事互补的见解和技能产生强烈的共鸣时；当他们拥有一个安全的空间，可以在尊重而又有力的反馈下发展自己的想法时，他们就会充满热情。作为一名管理者，我认为自上而下的指令，例如“多写提案！”或“多发表论文！”，虽然在极少数情况下是必要的，但作为工作重点，大多数时候都会适得其反。相反，关键在于培养一种对独特机遇的感知，简化建立新关系和团队的流程，并确保相关流程能够以尊重的方式提供富有洞察力的反馈。
&emsp;39. [漏洞的重要性：回应Vulnerability Counts: A Rejoinder](https://cacm.acm.org/opinion/vulnerability-counts-a-rejoinder/)
> 1. 漏洞数量还能继续发挥作用吗？因为它们肯定仍然具有一定的参考价值。Meneely 和 Keller 建议对“已报告漏洞”这一术语进行调整。这一建议看似合理，但却引发了更多问题。例如，测量结果表明，流行的开源软件项目往往比不太流行的项目拥有更多的已报告漏洞。一种可能的解释与所谓的“Linus 定律”有关，该定律指出，代码库的审查人数越多，报告和修复的漏洞就越多。测量结果和该定律都强化了这样一种观点：漏洞数量并不一定能衡量软件安全性，而是反映了其他因素，包括但不限于软件的流行度。

&emsp;40. [预测Forecasting](https://cacm.acm.org/opinion/forecasting/)
> 1. 何时才能相信模型的预测？仔细考察科学和工程领域中模型的预测应用，就会发现许多人工智能预测能力的宣称其实是错觉，反映了人们对预测的误解。
> 2. 排队网络模型（QNM）是对所有物理服务器的简洁数学表示，每个服务器都包含其平均服务时间、访问次数、作业数（N）以及吞吐量。目前已设计出高效的计算算法，可以根据模型参数计算其吞吐量。大量的验证测试表明，QNM 计算出的吞吐量与实际吞吐量的误差在 5% 以内。大多数工程师认为这代表模型与实际系统之间高度吻合。他们相信 QNM 对服务器网络系统吞吐量的预测。
> 3. 我们尝试的一种方法是招募人类来评估LLM（逻辑学习模型）的响应质量。然后，利用人类的评估结果来调整LLM的参数，以获得更令人满意的输出。这被称为基于人类反馈的强化学习（RLHF）
> 4. 逻辑逻辑模型的响应中包含无意义或错误信息，这被称为“幻觉”。
> 5. 一些支持者声称，一旦大型逻辑模型（LLM）整合了互联网上的所有数据，幻觉就会消失。这种说法毫无道理。最大的逻辑模型已经整合了绝大多数数据。无论规模大小，逻辑模型都无法分辨真假。
> 6. 许多标注数据集来自低薪且未经培训的工人，他们并不了解自己标注的领域。换句话说，训练数据本身正变得越来越不可信。
> 7. 每个 LLM 都依赖于嵌入式 ANN 作为推理引擎，用于计算对提示的响应。它利用提示生成最有可能出现的下一个词，然后将该词循环返回到提示中。这种嵌入方式被称为“循环神经网络”。它往往会放大低概率结果，并将 LLM 引导至幻觉。

&emsp;41. [信任、治理和人工智能决策Trust, Governance, and AI Decision Making](https://cacm.acm.org/opinion/trust-governance-and-ai-decision-making/)
> 1. 论文 Fast And Slow AI

&emsp;43. [进程The Process](https://cacm.acm.org/opinion/the-process/)

&emsp;44. [从大学研究到全球影响From University Research to Global Impact](https://cacm.acm.org/federal-funding-of-academic-research/from-university-research-to-global-impact/)
> 1. PageRank算法固然重要，但学术界或联邦政府资助下开发的许多其他创新也至关重要。互联网本身（基于TCP/IP协议）就源于联邦政府资助的研究，而网络浏览器则出自伊利诺伊州的国家超级计算应用中心，如果没有这些，搜索功能根本无法使用。再比如我们用来在服务器故障后选举新主服务器的Paxos分布式共识算法；它对于确保像Spanner这样的大型数据库的数据完整性至关重要。我们的广告排名机制受到了诺贝尔奖得主威廉·维克瑞提出的第二价格拍卖概念的启发。Pixel手机的摄像头则基于斯坦福大学开发的计算摄影方法。更不用说深度神经网络了，它在开始应用于实际之前经历了漫长的学术研究。所以很难从中挑选一个最重要的，因为影响实在太多了。

&emsp;45. [TRIPS项目The TRIPS Project](https://cacm.acm.org/federal-funding-of-academic-research/the-trips-project/)
> 1. 架构和编译器创新及其对研究和产业的影响。
> 2. 值得研究的架构与编译器产物

&emsp;46. [人工智能领域的身份盗窃会议同行评审Identity Theft in AI Conference Peer Review](https://cacm.acm.org/opinion/identity-theft-in-ai-conference-peer-review/)

&emsp;47. [超越基准：教育领域负责任的人工智能需要学习科学Beyond Benchmarks: Responsible AI in Education Needs Learning Sciences](https://cacm.acm.org/opinion/beyond-benchmarks-responsible-ai-in-education-needs-learning-sciences/)
> 1. 倡导将学习科学家纳入开发过程，以理解理论和数据。

&emsp;48. [加密生态系统正在走向（去）中心化吗？纵向分析框架Are Crypto Ecosystems (De)centralizing? A Framework for Longitudinal Analysis](https://cacm.acm.org/research/are-crypto-ecosystems-decentralizing-a-framework-for-longitudinal-analysis/)
> 1. 非同质化代币（NFT）：同质化（数字货币）与非同质化（真实不可分财产），代币
> 2. 在我们量化加密生态系统去中心化程度的框架中，我们提出了以下三个要素：1）时间维度，用于生成加密子系统随时间变化的面板数据；2）额外的生态系统层，用于捕捉具有重要经济意义的新兴子系统的演进；3）香农熵作为去中心化的通用度量，这对于严格量化和促进不同加密生态系统及其必要子系统之间的比较至关重要。
> 3. 我们评估了多种指标——香农熵、节点数量、基尼系数、中本聪系数、赫芬达尔-赫希曼指数和雷尼熵——以及它们在特定应用场景中的独特优势和劣势。

&emsp;49. [修补人工智能芯片中的漏洞Patching Vulnerabilities in AI Chips](https://cacm.acm.org/news/patching-vulnerabilities-in-ai-chips/)
> 1. 修补人工智能芯片面临诸多挑战，而不修补则会带来网络安全风险。 
