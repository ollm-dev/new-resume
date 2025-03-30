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


>
> @description 关于@ui组件库和Radix UI的技术解析
>
> @ui目录
>
> src/components/ui目录是一个基于Shadcn UI的组件库集合，它提供了多种预设计的界面组件，使开发者能够快速构建美观、一致的用户界面。这些组件包括：
>
> - 基础界面元素：按钮(button)、输入框(input)、表单(form)
> - 导航组件：导航菜单(navigation-menu)、面包屑(breadcrumb)
> - 反馈组件：提示框(toast)、对话框(dialog)、警告框(alert)
> - 数据展示：表格(table)、卡片(card)、进度条(progress)
> - 特殊功能：轮播图(carousel)、图表(chart)、懒加载图片(lazy-image)
>
> @Radix UI技术
>
> Radix UI是一个低层级的无样式(headless)UI组件库，它提供了一系列无样式但功能完整的界面原语(primitives)。其特点包括：
>
> 1. 无样式设计：组件不包含默认样式，允许开发者完全自定义外观
> 2. 可访问性：内置了键盘导航、屏幕阅读器支持等无障碍功能
> 3. 组合模式：采用组合式API，让开发者可以灵活组装组件
> 4. 强类型：完全使用TypeScript编写，提供良好的类型支持
>
> 从代码中可以看出，每个组件文件都从@radix-ui导入基础组件，如:
>
> tsx * import * as AccordionPrimitive from "@radix-ui/react-accordion" *
>
> @Shadcn UI与Radix UI的关系
>
> Shadcn UI不是传统意义上的组件库，而是一个组件集合，它基于Radix UI构建并添加了样式和额外功能：
>
> 1. 在Radix UI无样式组件的基础上添加了Tailwind CSS样式
> 2. 提供了可复用、可定制的组件模式
> 3. 允许直接复制组件代码到项目中，而不是作为依赖引入
> 4. 通过components.json配置文件管理组件样式和路径别名
>
> 例如，button.tsx组件就是在Radix UI的Slot基础上，使用Tailwind CSS添加样式并支持变体:
>
> tsx * const buttonVariants = cva( * "inline-flex items-center justify-center gap-2 whitespace-nowrap...", * { * variants: { ... } * } * ) *
>
> 这种方式让开发者能够获得既美观又功能完整的组件，同时保持高度的可定制性，非常适合构建个性化的UI界面，比如这个个人简历网站。

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

以下为你生成几种不同风格的颜色配置，涵盖清新、复古、科技感等不同风格，你可以根据网站整体风格和个人喜好来选择。

### 清新风格

```typescript
resume: {
  blue: '#3498DB',      // 主色调，天空蓝
  lightBlue: '#85C1E9', // 次要蓝色，淡天蓝
  gray: '#E5F6FF',      // 浅灰背景，淡蓝灰
  darkGray: '#5D6D7E',  // 深灰文字，铁灰色
  accent: '#73C6B6'     // 强调色，薄荷绿
}
```

### 复古风格

```typescript
resume: {
  blue: '#4682B4',      // 主色调，钢蓝
  lightBlue: '#72A0C1', // 次要蓝色，浅钢蓝
  gray: '#F5EBFF',      // 浅灰背景，淡紫灰
  darkGray: '#665D1E',  // 深灰文字，橄榄褐
  accent: '#C39BD3'     // 强调色，淡紫色
}
```

### 科技感风格

```typescript
resume: {
  blue: '#007BFF',      // 主色调，亮蓝
  lightBlue: '#4DA8FF', // 次要蓝色，浅亮蓝
  gray: '#EDEDED',      // 浅灰背景，银灰
  darkGray: '#343A40',  // 深灰文字，炭黑灰
  accent: '#FF6B6B'     // 强调色，亮红
}
```

### 温暖风格

```typescript
resume: {
  blue: '#2980B9',      // 主色调，群青蓝
  lightBlue: '#5499C7', // 次要蓝色，浅群青蓝
  gray: '#F9EBEA',      // 浅灰背景，淡粉灰
  darkGray: '#784212',  // 深灰文字，深棕
  accent: '#F39C12'     // 强调色，橙黄
}
```

这些颜色配置能适配不同的简历网站风格，你可依据实际需求对颜色进行调整和组合。

## 📄 许可证

[MIT](LICENSE)

## 👨‍💻 作者

项目由甘智斌创建和维护
