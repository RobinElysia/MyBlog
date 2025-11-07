---

title: What have we lost by learning computer science?
description: What have we lost by learning computer science?
date: 2025-09-30
timeline: true
head:
  - - meta
    - name: keywords
      content: CS 学者的悲哀
  - - meta
    - name: description
      content: What have we lost by learning computer science?
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 技术漫谈

---

<link rel="stylesheet" href="/css/font-style.css">
<img src="/assets/img/slowComputer/Book.png" style="display: block;margin: 0 auto;" />

## Preface

### About The English Blog
&emsp;About why to write a blog in English. The first reason is that I really hope to use this to improve my English proficiency. 
&emsp;Important fact: 
> This Blog has been extensively revised and <font class="strong">polished. </font>

&emsp;I will use red to highlight <font class="strong">new words</font> and mark <font class="gradient-title">other key points</font> with <font class="strong">gradient</font> colors.

### About Writing Motivation
&emsp;This blog references articles from the ACM Communications, <font class="strong">several</font> papers frome Artificial Intelligence journals, as well as personal exp.

&emsp;Overall, this blog is ver meaningful, both in terms of the writing style and the content reference. All of these are the first time.

### About This Blog Summary
&emsp;I will start from the "last lecture" of CMU(Carnegie Mellon University) and then proceed to talk about "We will definitely have a dream", and how we gradually gained Cognition, which in turn determined our decisions(with AI as a variable); later, we learned about approching the goal(both good and bad theories), <font class="strong">decision-making</font> and practice, which led us into difficuties; finally, as computer science scholars, what exactly did we lose in terms of theory and practice?


## Childhood Dreams
&emsp;When we were young, we all had a dream, on matter what it was. But in the end, it influenced us to gradually move towards our goals. It may change, and it may be <font class="strong">hindered</font> by various factors. But without giving up, we can achieve success.

&emsp;In 2007, Randy Pausch, an alumnus of Carnegie Mellon University, delivered [a one-of-a-kind last lecture](https://www.cmu.edu/randyslecture/). In the first part of this speech, Professor Randy Pausch said that his childhood dream was to experience weightlessness, but he had never been able to achieve it. After becoming a professor, he finally got an opportunity (though the process was somewhat <font class="strong">~~disgraceful~~</font>). But in the end, it was "Have something to bring to the table, because that will make you more welcome." This is important, no matter in which field. He also strongly advised us not to give up, and that difficulties exist to <font class="strong">showcase</font> our bravery. These inspiring words for young people are not only for the students, but also for his children.

> Not expecting to wait is the first step we take to bravely confront difficulties.

## How Cognition Influences us?
&emsp;When we move towards our goals, we will find that <font class="strong">cognition</font> is a major issue. Many people tend to get stuck because of their low level of understanding within a certain field, and this is quite normal. For people nowadays, when they encounter problems, they tend to turn to AI. Therefore, to a large extent, the decisions made by AI will influence the decisions of the users.

&emsp;This part is an article from the ACM <font class="strong">newsletter</font>, which discusses the topic of ["Can AI Expand the Human Mind?"](https://cacm.acm.org/news/can-ai-expand-the-human-mind/) It introduces how the "AI world" affects our "real world" by comparing it with the "real world" and the "AI world"([The case for human–AI interaction as system 0 thinking](https://www.nature.com/articles/s41562-024-01995-5)). For instance: When we search for nearby restaurants online, the algorithms recommended by each person's mobile application are different. This is determined by the "RS recommendation system" (RS is a branch of artificial intelligence).

&emsp;Therefore, our cognition is constantly changing along with AI. Sometimes we can fully trust the information provided by AI, while at other times we get trapped in an information <font class="strong">quagmire</font> (this is actually due to our fixed patterns, such as: "We tend to believe what the experts say". I will write a <font class="strong">separate</font> article to discuss these). What we need to do is to continuously enhance our cognition and professional proficiency.

## Good Theory?
&emsp;Recently, I have been reading "Machine Learning". One sentence from the <font class="strong">extracurricular</font> reading in this book caught my attention: ["There is Nothing More Practical Than A Good Theory."](https://www.sciencedirect.com/science/article/abs/pii/S0166411508600643) This is exactly the kind of evidence I needed, so I took it as a reference and read this paper carefully.

&emsp;Coincidentally, I also have a passion for psychology. This paper points out that theorists should provide new ideas for understanding the problem situation, and applied researchers should provide key information for solving practical problems to the theorists. That is, the theory should be dedicated to solving social or practical problems. Applied psychologists and researchers should <font class="strong">utilize</font> scientific theories. This happens to be the correct way for a person to learn, from good theories to good practice, each step cannot be careless.

&emsp;For computer science scholars, this part is <font class="strong">akin</font> to the fundamental aspects of computer science. We continuously build up the basic understanding, and only later do we gradually come into contact with the upper-level applications. This is a [correct approach](https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf), not an empty fantasy.

## Decision-Making And Practice
&emsp;When moving from cognition and theory to real-world impact, decision-making and practice serve as the critical bridge for computer science professionals, turning ideas into <font class="strong">tangible</font> results. Every coding, algorithm <font class="strong">optimization</font>, or system design task begins with decisions: choosing a theoretical framework, balancing efficiency and <font class="strong">ethics</font> with AI involvement, and adjusting when practice deviates from assumptions. These choices can’t be generalized and must be rooted in both learned theories and the complex, dynamic reality of real-world problems. For example, when building an AI-driven <font class="strong">inventory</font> optimization tool for small businesses, an initially chosen regression algorithm (based on good theory) hits roadblocks like incomplete data and confusing interfaces in practice—shifting decisions to adapting the theory, such as adding a rule-based system or simplifying the interface, which only emerges from real-world testing.

&emsp;AI complicates the decision-practice loop further: it not only shapes cognition but also influences practical decisions. When training a medical imaging computer vision model, <font class="strong">prioritizing</font> accuracy as AI recommends may be adjusted in practice—opt for a slightly less accurate but much faster model to suit emergency room needs. This requires intentional overriding of AI suggestions, using professional judgment to balance technical metrics with human needs, reminding us AI is a tool that can’t replace hands-on practice-driven critical thinking. Regrettably, many computer science scholars overemphasize one side: some get stuck in theoretical debates without real-data testing, while others code without solid theoretical grounding, leading to inefficient or irrelevant solutions. The [correct approach](https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf) stresses the necessity of <font class="strong">both—making theory-informed</font> decisions, testing via practice, and iterating based on learnings, as seen in an NLP project where a transformer-based model (proven in theory) was fine-tuned on casual conversation data to fix colloquial phrase struggles, creating a useful tool.

&emsp;Ultimately, decision-making and practice form a continuous cycle, not separate steps: practice reveals decision gaps, and decisions refine practice. For computer science scholars, this cycle turns childhood dreams of building meaningful tools and solving important problems into reality. Having good theories or smart decisions isn’t enough—they must roll up their sleeves, test ideas, and adapt when plans go awry. In computer science, the most impactful work isn’t on whiteboards or in research papers, but in bridging the gap between knowledge and tangible creation.

## So? What Have We Lost?
&emsp;Looking back at our journey from childhood dreams to AI-shaped cognition, from good theory to decision-making practice, we, as computer science scholars, have lost four core elements that once defined our work. We’ve lost the childhood dreams of building purposeful things—trading Randy <font class="strong">Pausch-like</font> urgency to solve real problems for hollow technical tweaks and metric-chasing. We’ve lost grounded CS cognition, surrendering our independent understanding to AI: relying on its recommendations for papers, code, and analysis, instead of trusting our own critical grasp of fundamentals. We’ve abandoned good, practical theory for trendy or untested ones—either fixating on flashy AI architectures or coding without theoretical guardrails, losing the ability to distinguish theory that serves real needs from that which leads us astray. And we’ve broken the balance between decision-making and practice, letting AI abuse fill the gap: following its choices (like prioritizing model accuracy over emergency room speed) without human-centric judgment, while silencing our own independent thoughts.

&emsp;This loss isn’t just about checking off missing elements—it’s a disconnection from the heart of our work: curiosity, purpose, critical thinking, and agency. We’ve traded intention for convenience, and meaningful impact for incremental, empty wins. Yet loss isn’t permanent. We can rediscover our dream-driven purpose, rebuild cognition rooted in our own expertise, return to theory tied to real problems, and repair the decision-practice loop by using AI as a tool, not a <font class="strong">crutch</font>. The key isn’t just acknowledging what’s gone—it’s choosing to reclaim what makes our work as computer scientists matter.

&emsp;<font class="gradient-title">So what exactly have we lost? We have lost the dreams of our childhood, lost our passion and understanding of CS, lost good theories while embracing bad ones, lost the ability to make decisions and take action, and misused AI to stifle our own flow of thought! This is our loss!</font>

## Reference

[CMU Last Class](https://www.cmu.edu/randyslecture/)

[Can AI Expand the Human Mind?](https://cacm.acm.org/news/can-ai-expand-the-human-mind/)

[The case for human–AI interaction as system 0 thinking](https://www.nature.com/articles/s41562-024-01995-5)

[There is Nothing More Practical Than A Good Theory.](https://www.sciencedirect.com/science/article/abs/pii/S0166411508600643)

[correct approach: Computing Curricula 2020](https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf)