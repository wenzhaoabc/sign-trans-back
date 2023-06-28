# Sign Hear

### 介绍 📖

SignHear后台管理系统，基于[Geeker-Admin](https://github.com/HalseySpicy/Geeker-Admin)

文件目录均已建好，在相应文件中写内容，API请求统一写在[api/module](src/api/modules/)下

```text
+---about
|       index.vue   
+---home 
+---login
+---news
|       editNews.vue
+---system
|       user.vue
\---word
        list.vue
        statistic.vue
```


### 代码仓库 ⭐

- GitHub：http://github.com/wenzhaoabc/sign-trans-back


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

