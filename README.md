# 李星星的个人简历

基于Vue3 + Pinia + Vite + Ant Design Vue开发的在线简历项目，支持多主题模式切换。

## 项目特点

- 📱 响应式设计，适配多种屏幕尺寸
- 🌓 支持亮色/暗色模式切换
- ✨ 支持商务/炫酷风格切换
- 📄 支持简历打印和PDF导出
- 🚀 基于现代化前端技术栈

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到GitHub Pages

### 方法一：使用gh-pages包

```bash
# 自动构建并部署到GitHub Pages
npm run deploy
```

### 方法二：使用部署脚本

```bash
# 运行部署脚本
./deploy.sh
```

### 方法三：GitHub Actions自动部署

当推送代码到main分支时，GitHub Actions会自动构建并部署网站。

> 注意：使用GitHub Actions方法需要先在GitHub仓库设置中添加名为`ACCESS_TOKEN`的secret。

## 定制化

编辑`src/assets/resume-data.json`文件来更新简历内容，无需修改组件代码。

## 项目结构

```
src/
├── assets/             # 静态资源
│   └── resume-data.json    # 简历数据
├── components/         # 组件
│   └── resume/             # 简历相关组件
├── layouts/            # 布局组件
├── stores/             # Pinia 状态管理
├── utils/              # 工具函数
└── views/              # 页面
```

## 贡献

欢迎提交 Issue 或 Pull Request 来帮助改进这个项目。

## 许可证

MIT
