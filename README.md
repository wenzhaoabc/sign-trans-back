# Geeker-Admin

### 介绍 📖

SignHear后台管理系统，基于[Geeker-Admin](https://github.com/HalseySpicy/Geeker-Admin)


### 代码仓库 ⭐

- GitHub：http://github.com/wenzhaoabc/sign-trans-back


### 项目功能 🔨

- 使用 Vue3.3 + TypeScript 开发，单文件组件**＜ script setup ＞**
- 采用 Vite4 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装（请求拦截、取消、常用请求封装…）
- 基于 Element 二次封装 [ProTable](https://juejin.cn/post/7166068828202336263) 组件，表格页面全部为配置项 columns
- 支持 Element 组件大小切换、暗黑模式、i18n 国际化
- 使用 VueRouter 进行路由权限拦截、页面按钮权限配置、路由懒加载
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套页面缓存
- 常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按…）
- 使用 Prettier 统一格式化代码，集成 ESLint、Stylelint 代码校验规范
- 使用 husky、lint-staged、commitlint、czg、cz-git 规范提交信息

### 安装使用步骤 📔

- **Clone：**

```text
# GitHub
git clone http://github.com/wenzhaoabc/sign-trans-back.git
```

- **Install：**

```text
npm install
```

- **Run：**

```text
npm dev
npm serve
```

- **Build：**

```text
# 开发环境
npm build:dev

# 测试环境
npm build:test

# 生产环境
npm build:pro
```


### 项目截图 📷

- 登录页：

![login_light](https://i.imgtg.com/2023/04/13/8tknp.png)

![login_dark](https://i.imgtg.com/2023/04/13/8tmpP.png)

- 首页：

![home_light](https://i.imgtg.com/2023/04/13/8tl1j.png)

![home_dark](https://i.imgtg.com/2023/04/13/8tpfb.png)


### 文件资源目录 📚

```text
SignHear
├─ .vscode                # VSCode 推荐配置
├─ build                  # Vite 配置项
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目常用枚举
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ languages           # 语言国际化 i18n
│  ├─ layouts             # 框架布局模块
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia store
│  ├─ styles              # 全局样式文件
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
├─ .editorconfig          # 统一不同编辑器的编码风格
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .gitignore             # 忽略 git 提交
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.cjs     # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件
```

