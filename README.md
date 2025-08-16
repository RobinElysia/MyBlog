Set-Content -Path README.md -Value @'
# RSDBlog

<p align="center">
  <img src="./docs/.vitepress/public/logo.png" width="200" alt="RSDBlog Logo">
</p>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vitepress" alt="node compatibility"></a>
  <a href="https://github.com/RobinElysia/MyBlog/blob/main/LICENSE"><img src="https://img.shields.io/github/license/RobinElysia/MyBlog" alt="License"></a>
  <a href="https://github.com/RobinElysia/MyBlog"><img src="https://img.shields.io/github/stars/RobinElysia/MyBlog" alt="GitHub stars"></a>
</p>

## 📝 项目介绍

RSDBlog 是一个基于 VitePress 构建的现代化多人博客平台。它继承了 VitePress 的优秀特性，提供了开箱即用的文档撰写体验和快速的页面响应速度。

### ✨ 主要特性

- **🚀 极致性能**
  - 基于 Vite 构建，冷启动迅速
  - 自动代码分割
  - 静态站点生成 (SSG)

- **📖 优秀的写作体验**
  - 完整的 Markdown 支持
  - 代码高亮
  - 自动生成目录
  - 支持数学公式（KaTeX）
  - Emoji 支持

- **🎨 美观的界面**
  - 响应式设计
  - 深色模式支持
  - 可自定义主题
  - 支持自定义布局

- **🔍 搜索功能**
  - 内置全文搜索
  - 支持标签分类
  - 文章归档功能

## 🚀 快速开始

### 环境准备

- Node.js 16.0 或更高版本
- pnpm v7 或更高版本
- Git

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/RobinElysia/MyBlog.git
   cd MyBlog
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **本地开发**
   ```bash
   pnpm docs:dev
   ```

4. **构建静态文件**
   ```bash
   pnpm docs:build
   ```

## 📖 目录结构

```
MyBlog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress 配置文件
│   │   ├── theme/            # 自定义主题
│   │   └── public/           # 静态资源
│   ├── posts/                # 博客文章
│   ├── AboutUs.md           # 关于我们
│   └── Link.md              # 友情链接
├── package.json
└── pnpm-lock.yaml
```

## 📝 写作指南

### 创建新文章

1. 在 `docs/posts` 目录下创建新的 `.md` 文件
2. 添加文章前置信息（Front Matter）：

```markdown
---
title: 文章标题
date: YYYY-MM-DD
author: 作者名
tags: 
  - 标签1
  - 标签2
categories: 
  - 分类
description: 文章描述
image: /path/to/cover-image.jpg
sticky: false  # 是否置顶
---
```

### Markdown 增强功能

#### 1. 提示框

```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 详情
这是一个详情块
:::
```

#### 2. 代码块

\`\`\`js{4}
export default {
  data () {
    return {
      msg: "高亮第4行"
    }
  }
}
\`\`\`

#### 3. 数学公式

```markdown
$E = mc^2$
```

## 🔧 配置指南

### 1. 基础配置

编辑 `docs/.vitepress/config.ts`:

```typescript
import { defineConfig } from "vitepress"

export default defineConfig({
  title: "RSDBlog",
  description: "A VitePress Blog",
  themeConfig: {
    // 站点配置
    nav: [...],
    sidebar: [...],
    // 更多配置...
  }
})
```

### 2. 主题定制

1. 创建 `docs/.vitepress/theme/index.ts`
2. 自定义样式和组件

## 🚀 部署指南

### GitHub Pages 部署

1. 在 `.github/workflows` 创建 CI/CD 配置文件
2. 配置 GitHub Pages 设置
3. 推送代码触发自动部署

### 自定义服务器部署

1. 构建项目
   ```bash
   pnpm docs:build
   ```
2. 将 `docs/.vitepress/dist` 目录下的文件部署到服务器
3. 配置 Nginx（示例配置）：
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     root /path/to/dist;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. 提交更改
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. 推送到分支
   ```bash
   git push origin feature/amazing-feature
   ```
5. 提交 Pull Request

### 提交规范

使用 [约定式提交](https://www.conventionalcommits.org/zh-hans/) 规范：

- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档更改
- `style`: 代码格式修改
- `refactor`: 代码重构
- `test`: 测试用例修改
- `chore`: 其他修改

## 📌 维护者

- [@RobinElysia](https://github.com/RobinElysia) - 项目负责人

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议，详情请查看 LICENSE 文件。

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 本项目基于 VitePress 构建
- [Vue.js](https://vuejs.org/) - 优秀的前端框架
- [所有贡献者](https://github.com/RobinElysia/MyBlog/graphs/contributors)

## 📊 统计

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=RobinElysia.MyBlog)

---

<p align="center">如果这个项目对您有帮助，请考虑给它一个⭐️</p>
'@