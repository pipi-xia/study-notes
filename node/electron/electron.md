# [electron](https://electron.org.cn/)

## 简介

[electron](https://electronjs.org/)是由Github开发，是一个用Html、css、JavaScript来构建桌面应用程序的开源库，可以打包为Mac、Windows、Linux系统下的应用。

electron是一个运行时环境，包含Node和Chromium，可以理解成把web应用运行在node环境中

## 结构

electron主要分为主进程和渲染进程

electron运行`package.json`中的`main`字段标明脚本的进程称为**主进程**

在主进程创建web页面来展示用户页面，**一个electron有且只有一个主进程**

electron使用Chromium来展示web页面，每个页面运行在自己的`渲染进程`中



