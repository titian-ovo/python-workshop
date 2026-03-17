# 🐍 Python 零基础学习工坊

一个专为编程初学者设计的 Python 学习网站，包含 30 个核心知识点，从基础到进阶，系统掌握 Python 编程。

## 📦 项目结构

```
python-workshop/
├── index.html          # 首页
├── learn.html          # 学习页（渐进式卡片）
├── flashcard.html      # 闪卡复习
├── roots.html          # 知识点索引
├── progress.html       # 学习进度
├── root-detail.html    # 知识点详情
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker
├── sitemap.xml         # SEO 地图
├── robots.txt          # 爬虫指令
├── css/
│   └── minimal.css     # 样式文件
└── js/
    ├── wordData.js     # 30 个知识点数据
    ├── siteConfig.js   # 网站配置
    └── storage.js      # 学习进度存储
```

## 🚀 部署到 Vercel

### 方法 1：Vercel 控制台（推荐）

1. 访问 https://vercel.com/new
2. 点击 "Add New Project"
3. 拖拽 `python-workshop` 文件夹到上传区域
4. 点击 "Deploy"

### 方法 2：Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 进入项目目录
cd python-workshop

# 部署
vercel --prod
```

### 方法 3：GitHub + Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 中导入 GitHub 仓库
3. 自动部署

## 💻 本地预览

### 使用 Python

```bash
# Python 3
python -m http.server 8000

# 访问 http://localhost:8000
```

### 使用 Node.js

```bash
npx serve .
```

### 使用 VS Code

安装 "Live Server" 扩展，右键 index.html 选择 "Open with Live Server"

## 📱 PWA 支持

网站支持 PWA，可以：
- 安装到手机主屏幕
- 离线访问
- 全屏显示

## 🎯 学习路径

### 基础篇（1-15）
1. Python 简介
2. 变量与数据类型
3. 列表 (List)
4. 字典 (Dictionary)
5. 条件语句
6. for 循环
7. while 循环
8. 函数定义
9. 字符串操作
10. 模块导入
11. 异常处理
12. 文件操作
13. 列表推导式
14. 元组 (Tuple)
15. 集合 (Set)

### 进阶篇（16-30）
16. 面向对象（类与对象）
17. 继承
18. 装饰器
19. 生成器
20. 迭代器
21. Lambda 函数
22. 上下文管理器
23. 正则表达式
24. 多进程与多线程
25. 异步编程
26. 类型提示
27. 虚拟环境
28. 包管理 (pip)
29. 单元测试
30. 常用标准库

## ✨ 功能特性

- 📚 **渐进式学习** - 按顺序学习每个知识点
- 📇 **闪卡复习** - 快速记忆核心概念
- 📝 **即时测试** - 每个知识点都有小测试
- 📊 **进度追踪** - 记录学习进度和已掌握内容
- 📱 **响应式设计** - 适配手机、平板、电脑
- 📴 **离线访问** - PWA 支持，无网络也能学习

## 📄 License

MIT

---

**祝你学习愉快！🎉**
