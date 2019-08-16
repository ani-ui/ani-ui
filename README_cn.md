# ani-ui
使用vue.js 2.0构建的动效组件
### [English Version Getting Start](./README.md)
### [使用文档(中文)](https://laiiihz.github.io/ani-ui)

![](https://npm.taobao.org/badge/d/ani-ui.svg) 
![](https://npm.taobao.org/badge/v/ani-ui.svg?version=0.1.20)
![npm (scoped)](https://img.shields.io/npm/v/ani-ui/latest?label=ani-ui%40latest)
![](./logo.png)
## 开始入手
### 使用`yarn` 安装
```shell script
yarn add ani-ui@latest
```

### 使用 CDN 的方式安装
```html
<link rel="stylesheet" href="https://unpkg.com/ani-ui/dist/ani-ui.css">
<script src="https://unpkg.com/ani-ui/dist/ani-ui.common.js"/>
```
## 使用质感设计图标
```html
    <link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css" rel="stylesheet">
```
在vue或html中使用此图标

比如face图标
```html
<i class="material-icons">face</i>
```

## 自行构建最新版本
### 使用 `yarn` 或 `vue-cli-service` 命令
```shell script
yarn output
```

```shell script
vue-cli-service build --target lib --name ani-ui ./src/lib/index.js
```
> 这两行命令是同一命令
> 在`$repo root dir`/dist 中可查看构建的输出文件 

## 源代码许可
###  `MIT LICENSE`
查看 [源代码许可](./LICENSE) 文件

## 作者
[laiiihz](https://github.com/laiiihz)

## 特别感谢
none
