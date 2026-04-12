---

title: 前端 Agent 项目工程化导论
description: 前端 Agent 项目工程化导论
date: 2026-04-12
timeline: true
head:
  - - meta
    - name: keywords
      content: 前端 Agent 项目工程化导论
  - - meta
    - name: description
      content: 前端 Agent 项目工程化导论
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 技术漫谈

---

<img src="https://cacm.acm.org/wp-content/uploads/2026/04/040826.BLOG_.Evitable-Trust-G.jpg" style="display: block;margin: 0 auto;" />

<link rel="stylesheet" href="/css/font-style.css">

# Agent 工程化最佳实践指南

> 适用范围：本仓库以及同类“多 Agent / 多人协作 / 规范驱动”的前端项目
> 依据来源：`AGENTS.md`、`CLAUDE.md`、`docs/requirements.md`、`docs/tech.md`、`docs/tasks.md`、`docs/superpowers/`

> 注：本文章参考老友 [Presto](https://github.com/MapleCity1314) 的 Agent 项目经验，由 AI 总结而来。各位感兴趣可以去给他的项目点点 Star 🥰

---

## 这份项目文档体系到底在做什么

这个项目的文档体系不是“说明书集合”，而是一套给 Agent 设定执行边界的控制面。它把一个 Agent 的工作拆成 4 层：

1. `AGENTS.md`
   最高优先级的工程协作约束，定义技术栈、目录结构、文件命名、组件边界、分支策略、验证顺序、PR 标准。
2. `docs/requirements.md`
   产品需求与业务实体定义，说明“要做什么”。
3. `docs/tech.md`
   技术落地策略，说明“为什么这样做”和“有哪些硬约束”。
4. `docs/tasks.md`
   可执行任务卡，说明“现在具体做哪一块、动哪些文件、验收标准是什么”。

这四层共同构成一条很强的约束链：

- 需求文档负责定义目标
- 技术文档负责定义实现边界
- 任务文档负责定义执行单位
- `AGENTS.md` 负责定义协作纪律

如果你希望 Agent 稳定产出，关键不是把 prompt 写长，而是把这四层关系写清楚，让 Agent 明白：

- 哪个文档优先级最高
- 做决策时先看哪个文档
- 代码实现允许自由发挥到什么程度
- 什么时候必须停下来自检

---

## 这个项目里最值得保留的设计

### 用 `AGENTS.md` 统一“协作协议”

这个项目最有价值的部分，是把很多原本散落在人口头约定里的事情收敛到了 `AGENTS.md`：

- 栈固定：Next.js 16 + React 19 + Tailwind v4 + TypeScript
- 部署固定：`output: 'export'`，纯静态，无后端
- 组件边界固定：默认 Server Component，只有在需要交互时才 `'use client'`
- 目录和命名固定
- 文件大小上限固定
- 任务领取、分支命名、PR、Review、合并标准固定

这类约束非常适合 Agent，因为它们是“可判定”的。Agent 最怕的不是严格，而是模糊。

### 用 `docs/tasks.md` 把“需求”翻译成“工作单元”

`docs/tasks.md` 的作用不是列 backlog，而是把一个项目拆成 Agent 能直接消费的任务卡。好的任务卡具备 5 个特征：

- 有唯一 ID
- 有状态
- 有依赖关系
- 有精确文件路径
- 有验收标准

这让 Agent 不用自己发明任务边界，只需要围绕任务卡执行。

### 用技能系统约束“流程”，而不只是约束“结果”

本项目文档不是只要求“做出结果”，而是要求 Agent 按流程做事，比如：

- 先 `writing-plans`
- UI 先 `presto-design`
- Debug 先 `systematic-debugging`
- 完成前走 `verification-before-completion`

这是一种更高级的工程化方式。很多团队会写“代码规范”，但不写“决策规范”和“执行顺序规范”。Agent 真正容易失控的地方，通常正是这里。

---

## 约束文档应该怎么编写

### 最佳结构：四层文档模型

建议你以后写 Agent 约束文档时，按下面分层：

#### 第一层：协作总则

文件建议：`AGENTS.md`

应该写：

- 项目技术栈
- 哪些规则优先级最高
- 必须遵守的技能或工作流
- 组件/模块边界
- 命名规则
- 文件大小限制
- 分支、提交、PR、Review、合并规范
- 验证命令与完成定义

不应该写：

- 细碎的业务字段说明
- 某一个页面的具体布局细节
- 一次性临时任务内容

#### 第二层：业务需求

文件建议：`docs/requirements.md`

应该写：

- 用户角色
- 核心页面与模块
- 数据模型
- 非功能需求
- 内容来源和边界

不应该写：

- 组件拆分建议
- 某个函数如何命名
- 某个文件怎么组织

#### 第三层：技术设计

文件建议：`docs/tech.md`

应该写：

- 路由策略
- 渲染策略
- 数据组织策略
- 静态导出限制
- 客户端/服务端边界
- 风险点与规避方式

不应该写：

- 模糊的“建议尽量”
- 没有上下文的经验主义规则

#### 第四层：执行任务卡

文件建议：`docs/tasks.md`

应该写：

- Task ID
- 状态
- 依赖
- 涉及文件
- 输入数据源
- 实现要求
- 验收标准

不应该写：

- 大量跨任务共享的背景介绍
- 不可验证的“做得美观一些”

### 最关键的原则：规则要可执行、可验证、可判定

差的约束文档会写：

- “注意组件复用”
- “代码尽量简洁”
- “界面要大气”

这种话人能脑补，Agent 不能稳定执行。

好的写法应该改成：

- “组件文件超过 200 行必须拆分”
- “页面文件超过 150 行必须抽 section 组件”
- “UI 改动必须附桌面与移动端截图”
- “动态路由必须导出 `generateStaticParams`”
- “所有筛选与分页都在客户端完成”

也就是从价值判断改成机器可检查的约束。

### 文档里必须明确“优先级”

如果你不写优先级，Agent 就会出现冲突时自由发挥。

建议固定写法：

1. 用户当前指令
2. `AGENTS.md`
3. 任务卡
4. 技术设计
5. 需求文档
6. 默认代码风格/模型常识

本项目已经部分做到这点，但以后可以写得更明确：当 `tasks.md` 和 `tech.md` 有冲突时，以谁为准；当代码现状与文档冲突时，先修文档还是先修代码。

### 约束文档必须包含“反例”

Agent 对正例学习很快，但对边界误判也很常见。最有效的方法是写反例。

例如：

- 不要直接在组件里 `import` `data/`
- 不要在静态导出项目里引入 `/api/*`
- 不要在动态路由页面遗漏 `generateStaticParams`
- 不要默认给组件加 `'use client'`
- 不要用相对路径 `../../`

反例会显著降低 Agent 的“自作聪明”概率。

---

## 给 Agent 的提示词应该怎么写

### 最好的提示词不是“命令”，而是“执行入口”

很多人给 Agent 的 prompt 只写：

> 帮我实现首页

这几乎必然导致 Agent 跳过文档、跳过任务卡、跳过验证。

更好的写法是：

> 先阅读 `AGENTS.md`、`docs/tech.md`、`docs/tasks.md` 中与 `PG-01` 相关的内容。以 `AGENTS.md` 为最高优先级，严格按任务卡实现，不要修改未在任务范围内的接口。完成后运行构建、类型检查和 lint，并汇报结果。

这类 prompt 的重点是显式定义：

- 阅读范围
- 优先级
- 任务边界
- 禁止事项
- 完成标准

### 一条好的执行 prompt 至少要有 8 个槽位

推荐你以后用下面这个结构写：

```md
任务目标：
[要完成什么]

必读文档：
- AGENTS.md
- docs/tech.md
- docs/tasks.md
- [补充文档]

优先级：
如文档冲突，以 AGENTS.md > 任务卡 > tech > requirements 为准。

任务边界：
- 只处理 [Task ID / 文件范围]
- 不修改无关文件
- 不重构未要求模块

实现要求：
- [关键技术约束]
- [组件边界]
- [数据来源]

验证要求：
- npm run build
- npx tsc --noEmit
- npm run lint

输出要求：
- 先简述你阅读了哪些文档
- 再说明改了什么
- 最后报告验证结果和剩余风险
```

### 让 Agent 先读文档，不要靠“你应该知道”

你需要在 prompt 里明确写：

- “先阅读”
- “阅读后再实施”
- “只根据项目文档，不要按你默认经验猜”

因为模型默认会用已有常识补空白，而不是优先承认“我需要先看仓库约束”。本项目 `AGENTS.md` 里那句 “This is NOT the Next.js you know” 很重要，本质上就是在打断模型的惯性。

建议你常用这类句式：

- “不要使用训练语料里的 Next.js 默认认知，先以仓库文档和 `node_modules/next/dist/docs/` 为准。”
- “如果文档没有明确允许，不要主动引入新的架构层或依赖。”
- “如果实现与文档冲突，先指出冲突，再决定修文档或修代码。”

### 不同任务类型，提示词应该不同

#### A. 新功能实现

```md
先阅读 `AGENTS.md`、`DESIGN.md`、`docs/tech.md`、`docs/tasks.md` 中与 `TASK-ID` 相关的内容。

**需求：**


按任务卡实现，不要扩大范围。(如果发现任务里没有这个任务，你需要追加到文件任务列表中当中)
如果涉及 UI，先依据 `presto-design` 的约束整理结构，再确定 Server/Client 边界。
完成后运行 `npm run build`、`npx tsc --noEmit`、`npm run lint`。
回复中说明：读了哪些文档、改了哪些文件、验证是否通过。
```

#### B. 修 Bug

```md
问题：


先阅读 `AGENTS.md` 和相关页面/组件的任务卡或技术文档。
不要直接猜原因，先定位根因，再修改最小范围代码。
如果发现文档与当前代码不一致，明确指出不一致点。
修复后运行相关验证命令，并说明行为回归风险。
```

#### C. 做 Review

```md
审查：
审查代码段/文件/相关功能

以代码审查模式工作。
先对照 `AGENTS.md`、`docs/tech.md`、`docs/tasks.md` 检查这次改动。
优先找：行为缺陷、约束违背、静态导出风险、Server/Client 边界错误、缺失的 `generateStaticParams`、验证缺口。
结论先给 findings，再给摘要。
```

#### D. 生成方案/计划

```md
先阅读相关需求和技术文档，总结约束。
不要直接写代码，先输出方案或实施计划。
计划里必须明确文件边界、依赖顺序、验证方式、风险点。
```

---

## 怎么引导 Agent 正确阅读文档

### 不要说“研究一下项目”，要说“按顺序读取”

“研究整个项目”太宽，Agent 往往会随机扫描。

更好的写法：

```md
先按下面顺序阅读并建立约束：
1. `AGENTS.md`
2. `CLAUDE.md`
3. `docs/requirements.md`
4. `docs/tech.md`
5. `docs/tasks.md`
6. 当前任务直接相关的 `docs/superpowers/*`

阅读后先输出：
- 最高优先级约束
- 当前任务的实现边界
- 需要验证的命令

确认完再动代码。
```

这能显著减少“读了，但没形成约束模型”的问题。

### 要求 Agent 输出“文档摘要”，不是“我读完了”

你不能只要求：

> 看完文档再做

因为这不可验证。

应该要求：

> 在动代码前，用 5 到 10 条列出你从文档中提炼出的硬约束，尤其是会影响当前任务实现的部分。

这样你能立刻发现 Agent 是否真的读懂了。例如这个项目里它应该能总结出：

- 静态导出，不能依赖运行时服务端逻辑
- 动态路由必须 `generateStaticParams`
- 默认 Server Component
- 组件不能直接从 `data/` 取数据
- `@/*` 替代相对路径
- Tailwind v4 token 写在 `globals.css` 的 `@theme`

### 强制 Agent 做“文档与代码一致性检查”

一个非常实用的 prompt 技巧是增加一句：

> 阅读文档后，先检查当前代码是否已经符合这些约束；如果不一致，先汇报差异再实施。

这在本项目里尤其重要，因为当前代码就存在文档与实现漂移的迹象，例如：

- [`next.config.ts`](/D:/code/lncc-xxx/next.config.ts:1) 当前只有 `reactCompiler: true`
- 但 [`AGENTS.md`](/D:/code/lncc-xxx/AGENTS.md:1) 与 `docs/tasks.md` 明确要求静态导出相关配置，包括 `output: 'export'`、`trailingSlash: true`、`images.unoptimized: true`

这类差异如果不先暴露，Agent 很可能在错误基础上继续开发。

---

## 让 Agent 写代码时，提示词要怎样收紧

### 明确“只允许在哪些文件改动”

最有效的控边界方法之一：

> 仅允许修改以下文件：[列表]

如果允许新增文件，也要写清楚：

> 只允许在 `components/` 下新增组件文件，不要改动 `data/` 和已有页面接口。

这样可以明显降低 Agent 顺手“帮你重构一下”的冲动。

### 明确“禁止自作主张”的事项

建议常驻到你的提示词模板里：

- 不要新增依赖，除非任务卡明确要求
- 不要修改无关类型
- 不要为了方便改动其它任务的 props 接口
- 不要把本应是 Server Component 的文件改成 Client Component
- 不要为了通过而删除约束逻辑

### 要求“最小改动”

可以直接写：

> 采用最小可行修改，优先复用现有模式，不要做任务外重构。

这句话对 Agent 很有效，因为它提供了冲突时的默认决策。

### 要求“修改前先声明计划”

如果任务稍复杂，推荐要求 Agent 在改代码前先给出：

- 将改哪些文件
- 每个文件负责什么
- 哪些地方是风险点

这可以作为低成本 review gate。

---

## 如何编写高质量任务卡

### 任务卡应该像“施工图”，不是“需求摘要”

优秀任务卡最重要的事情，是降低 Agent 的二义性。每张卡至少要有：

- 任务 ID
- 任务状态
- 依赖
- 文件路径
- 数据来源
- 实现要求
- 验收标准

本项目的任务卡已经接近这个形态，这是非常对的。

### 验收标准必须是“行为 + 约束”双重描述

只写行为不够，例如：

- “可以翻页”

应该写成：

- “翻页后 URL 正确”
- “第一页上一页禁用”
- “超过 7 页显示省略号”
- “`totalPages <= 1` 返回 `null`”

也就是既写用户看到的结果，也写内部约束。

### 每张任务卡要带“禁止扩大范围”的提醒

建议追加一个固定段落：

```md
范围限制：
- 仅完成本卡目标
- 不修改无关组件接口
- 不处理下游页面整合
- 如发现跨任务依赖问题，只记录并汇报，不顺手扩展实现
```

这对多 Agent 并行尤其重要。

---

## 怎么编写真正对 Agent 有用的 `AGENTS.md`

### `AGENTS.md` 应该回答 8 个问题

1. 这是个什么项目，技术边界是什么
2. 哪些技能或流程必须先走
3. 文档冲突时谁优先
4. 代码组织和命名怎么做
5. 什么情况下必须拆文件
6. 任务怎么认领，分支怎么命名
7. 完成前必须跑哪些命令
8. PR/Review/合并怎么做

如果你的 `AGENTS.md` 回答不了这 8 个问题，它就还不够工程化。

### `AGENTS.md` 最怕两件事

第一，写成价值观文章。

例如：

- “保持代码优雅”
- “注意组件化思维”

这些都太虚。

第二，写成需求文档。

例如把每个页面字段细节都塞进 `AGENTS.md`。这会让它变得庞杂且难维护。

### 推荐的 `AGENTS.md` 模板骨架

```md
# Project Agent Rules

## Project Boundary
- stack
- deployment mode
- runtime constraints

## Instruction Priority
- user request
- AGENTS.md
- task docs
- tech docs
- default conventions

## Mandatory Workflow
- which skills/workflows must be invoked
- when to plan
- when to verify

## Code Organization
- directories
- naming
- file size limits
- import rules
- component boundaries

## Collaboration
- task claiming
- branch naming
- worktree policy
- sub-agent policy

## Verification
- build
- type-check
- lint
- screenshots or artifacts required

## Review / Merge
- review checklist
- merge strategy
```

---

## 如何避免“文档说一套，代码做一套”

### 每次启动任务前都要求 Agent 做一次 drift check

你可以把下面这句话加入所有执行 prompt：

> 在开始实现前，先检查当前代码是否与 `AGENTS.md` 和相关 `docs/` 约束一致；若有漂移，先列出差异。

这比事后 review 更值钱，因为能在错误继续扩散前停住。

### 明确“代码不是事实来源，文档也不是；二者冲突时要汇报”

很多 Agent 会默认为“现有代码 > 文档”，但这不总是对。

正确做法应该写清楚：

- 文档是意图来源
- 代码是当前状态
- 当二者冲突时，先报告，再按你指定的优先级处理

### 给 Agent 一个固定输出格式

建议要求它在动手前先回答：

```md
我读到的硬约束：
1. ...

我发现的文档/代码漂移：
1. ...

我将只修改的文件：
1. ...

我计划执行的验证：
1. ...
```

这种格式会强迫 Agent 把隐式判断外显。

---

## 推荐的提示词模板

### 通用执行模板

```md
你要处理的任务是：`[TASK-ID / 目标]`

先阅读以下文档，并按优先级建立约束：
1. `AGENTS.md`
2. `CLAUDE.md`
3. `docs/tech.md`
4. `docs/tasks.md`
5. `docs/requirements.md`

要求：
- 以 `AGENTS.md` 为最高优先级
- 只处理与 `[TASK-ID]` 直接相关的文件
- 不要修改无关模块或接口
- 不要引入未明确要求的新依赖
- 如果文档与当前代码不一致，先列出差异

在动代码前先输出：
1. 你提炼出的硬约束
2. 当前任务的边界
3. 计划修改的文件
4. 计划执行的验证命令

然后再实施。
完成后运行：
- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`

最后汇报：
- 改动摘要
- 验证结果
- 剩余风险
```

### 文档研究模板

```md
请研究这个仓库的协作文档和技术文档，重点阅读：
- `AGENTS.md`
- `CLAUDE.md`
- `docs/requirements.md`
- `docs/tech.md`
- `docs/tasks.md`

输出一份结构化总结，至少包括：
- 文档优先级
- 技术硬约束
- 组件边界规则
- 任务协作流程
- 验证与交付要求
- 当前代码与文档可能存在的漂移点

不要直接写代码，先做约束归纳。
```

### 写代码前的收口模板

```md
先不要写代码。
请根据 `AGENTS.md` 和相关 `docs/`，给出本任务的最小实现方案。
需要明确：
- 改哪些文件
- 为什么改这些文件
- 哪些文件不能动
- 哪些约束最容易被违反
- 完成后如何验证
我确认后你再实施。
```

### 代码审查模板

```md
请以代码审查模式检查这次改动。
先对照：
- `AGENTS.md`
- `docs/tech.md`
- `docs/tasks.md`

优先找：
- 行为错误
- 静态导出风险
- Server/Client 边界错误
- 缺失的 `generateStaticParams`
- 违反命名/目录/文件大小限制
- 未完成的验证项

先输出 findings，按严重程度排序，再给简短总结。
```

---

## 对这个仓库的进一步建议

### 给 `AGENTS.md` 增加“冲突处理规则”

建议补充一个小节，明确：

- 文档冲突时的优先级
- 代码与文档冲突时的默认处理方式
- Agent 是否允许顺手修复文档漂移

### 给 `docs/tasks.md` 每张任务卡增加“范围限制”

这样可以明显降低并行开发时的互相踩踏。

### 加一个“启动任务 prompt 模板”文档

建议新增类似：

- `docs/agent-prompts.md`

里面放 4 到 6 个固定模板：

- 新功能
- 修 Bug
- 研究文档
- 写计划
- 做 Review

这能把“人如何给 Agent 下指令”也工程化。

### 建一个“文档-代码一致性检查清单”

建议新增一份清单，专门检查这些高风险点：

- `next.config.ts` 是否仍符合静态导出要求
- 动态路由是否都有 `generateStaticParams`
- `globals.css` 是否仍承担 Tailwind v4 token
- 新组件是否默认 Server Component
- 是否出现组件直接 `import` `data/`
- 是否出现相对路径导入

---

## 最终原则

如果只保留一句话，那就是：

**不要试图用一条很聪明的 prompt 驯服 Agent；要用分层文档、明确优先级、可验证约束、任务卡边界和固定验证流程来约束 Agent。**

真正稳定的 Agent 工程化，依赖的是：

- 文档分层
- 规则可判定
- 任务可执行
- 输出可验证
- 漂移可暴露

这个项目已经有很好的基础。下一步不是把 prompt 写得更长，而是把“启动 prompt 模板”和“文档-代码漂移检查”补齐，这样整个体系会更闭环。