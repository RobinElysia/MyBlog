# RSDBlog

## 项目介绍
RSDBlog 是一个基于 VitePress 构建的多人博客平台，支持 Markdown 写作，提供了简洁优雅的阅读体验。

## 功能特点
-  支持 Markdown 写作
-  简洁现代的设计风格
-  基于 VitePress 构建，加载迅速
-  支持多人协作
-  全文搜索功能
-  响应式设计，支持移动端访问

## 快速开始

### 环境要求
- Node.js 16.0 或以上版本
- pnpm 包管理器
- Git

### 安装步骤
1. 克隆项目代码
   ```bash
   git clone https://github.com/RobinElysia/MyBlog.git
   cd MyBlog
   ```

2. 安装依赖
   ```bash
   pnpm install
   ```

3. 本地开发
   ```bash
   pnpm docs:dev
   ```

4. 构建静态文件
   ```bash
   pnpm docs:build
   ```

## 写作指南
1. 在 `docs/posts` 目录下创建新的 Markdown 文件
2. 按照以下格式添加文章元数据：
   ```markdown
   ---
   title: 文章标题
   date: YYYY-MM-DD
   author: 作者名
   tags: [标签1, 标签2]
   ---
   ```
3. 使用 Markdown 语法编写文章内容

## 部署指南
1. 构建项目
   ```bash
   pnpm docs:build
   ```
2. 将生成的静态文件部署到服务器
3. 配置服务器环境（如有需要）

## 贡献指南
1. Fork 本项目
2. 创建您的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交您的更改 (git commit -m "Add some AmazingFeature")
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 打开一个 Pull Request

## 维护者
- [@RobinElysia](https://github.com/RobinElysia)

## 开源协议
本项目采用 MIT 协议，详情请见 [LICENSE](LICENSE) 文件。
