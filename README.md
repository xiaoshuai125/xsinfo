# xsinfo

xsinfo 是一个知识记录与分享平台，主要用于整理和发布关于软件开发、系统使用等方面的技巧和经验。通过这个平台，你可以学习到各种实用的技术内容，涵盖 Linux 使用、开发工具配置、编程技巧等多个方面。

## 项目特点

- **内容丰富**：涵盖 Linux 使用技巧、JetBrains 系列 IDE 快捷键、Clion 配置等实用内容。
- **文档友好**：采用清晰的文档结构，便于查阅和学习。
- **持续更新**：内容将持续更新，确保提供最新、最实用的技术信息。

## 目录结构

- `docs/`：存放所有文档内容，包括 Linux 使用、JetBrains 配置、游戏相关内容等。
- `docs/.vitepress/`：VitePress 配置文件，用于构建文档网站。
- `docs/public/`：静态资源文件，如图片、图标等。
- `package.json`：项目依赖配置文件。
- `run_prod.sh`：用于部署和运行项目的脚本。

## 如何运行

1. 确保你已经安装了 Node.js 和 npm。
2. 安装项目依赖：
   ```bash
   npm install
   ```
3. 运行项目：
   ```bash
   npm run docs:dev
   ```
4. 构建生产环境版本：
   ```bash
   npm run docs:build
   ```

## 如何贡献

欢迎提交 Issue 和 Pull Request，帮助我们改进内容和功能。如果你有新的技术文章或配置技巧，也可以提交到 `docs/` 目录中。

## 许可证

本项目遵循 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。