# Todo List App

一个使用 React + TypeScript + Vite 构建的现代化待办事项应用。

## 功能特性

- ✅ 添加、删除、编辑待办事项
- ✅ 标记任务完成/未完成
- ✅ 过滤显示：全部、未完成、已完成
- ✅ 批量操作：全选/取消全选、清除已完成
- ✅ 本地存储：页面刷新后数据保持
- ✅ 响应式设计：适配不同屏幕尺寸
- ✅ 键盘快捷键：Enter 添加、双击编辑、Escape 取消

## 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **CSS3** - 样式和动画
- **localStorage** - 数据持久化

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # React 组件
│   ├── AddTodo.tsx     # 添加待办事项组件
│   ├── TodoItem.tsx    # 单个待办事项组件
│   ├── TodoList.tsx    # 待办事项列表组件
│   └── Filter.tsx      # 过滤器组件
├── hooks/              # 自定义 Hook
│   └── useTodos.ts     # 待办事项状态管理
├── types/              # TypeScript 类型定义
│   └── Todo.ts         # Todo 相关类型
├── utils/              # 工具函数
│   └── storage.ts      # 本地存储工具
├── App.tsx             # 主应用组件
├── App.css             # 应用样式
├── index.css           # 全局样式
└── main.tsx            # 应用入口
```

## 使用说明

1. **添加任务**：在输入框中输入任务内容，按 Enter 键添加
2. **完成任务**：点击任务前的复选框标记完成
3. **编辑任务**：双击任务文本进入编辑模式
4. **删除任务**：鼠标悬停在任务上，点击右侧的 × 按钮
5. **过滤显示**：使用底部的过滤按钮切换显示状态
6. **批量操作**：使用"全选"复选框或"清除已完成"按钮
