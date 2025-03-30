# 📝 个人简历网站

## 🌟 项目简介

这是一个基于现代化前端技术栈构建的个人简历网站项目。该项目旨在展示个人信息、教育背景、专业技能、工作经验、项目经历等内容，以响应式设计确保在各种设备上都能获得良好的浏览体验。

## 🛠️ 技术栈

- **框架**：React 18、Vite
- **UI组件**：Shadcn UI (基于Radix UI)
- **样式**：Tailwind CSS
- **语言**：TypeScript
- **路由**：React Router v6
- **状态管理**：React Query
- **表单处理**：React Hook Form、Zod
- **UI组件和动画**：
  - 轮播组件 (Embla Carousel)
  - 吐司通知 (Sonner)
  - 日期选择器 (React Day Picker)
  - 图表 (Recharts)
  - 各种UI组件 (来自Radix UI)

## ✨ 功能特点

- 🏠 **首页**：总览个人信息和导航
- 👤 **关于我**：详细的个人介绍，包括照片、座右铭和个人价值观展示
- 🎓 **教育经历**：学历和教育背景
- 💼 **工作经验**：专业工作经历和职责描述
- 🛠️ **技能展示**：专业技能和熟练程度的可视化展示
- 📂 **项目展示**：个人项目及其详细说明
- 🖼️ **作品集**：视觉作品展示
- 🔍 **兴趣爱好**：个人兴趣和日常活动
- 📄 **PDF下载**：提供简历的PDF版本下载
- 🚀 **性能优化**：
  - 图片懒加载：使用自定义 LazyImage 组件，结合原生 loading="lazy" 属性
  - 渐进式加载：图片加载过程中显示平滑过渡动画

## 🚀 安装指南

### 前提条件

- Node.js (v18+)
- npm, yarn 或 pnpm

### 安装步骤

1. 克隆仓库
```bash
git clone <repository-url>
cd new-resume
```

2. 安装依赖
```bash
npm install
# 或
yarn
# 或
pnpm install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

4. 打开浏览器访问 [http://localhost:5173](http://localhost:5173)

## 📦 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

## 📝 使用指南

1. 修改 `src/components` 目录下的各组件文件，更新个人信息
2. 替换 `public` 目录下的简历PDF和图片资源
3. 自定义主题颜色可以修改 `tailwind.config.ts` 文件中的颜色变量：
   ```typescript
   resume: {
     blue: '#1E40AF',     // 主色调
     lightBlue: '#3B82F6', // 次要蓝色
     gray: '#F3F4F6',      // 浅灰背景
     darkGray: '#4B5563',  // 深灰文字
     accent: '#8B5CF6'     // 强调色(紫色)
   }
   ```
4. 根据需要在 `src/App.tsx` 中添加或删除路由

## 📄 许可证

[MIT](LICENSE)

## 👨‍💻 作者

项目由甘智斌创建和维护
