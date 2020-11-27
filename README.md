# uni项目构建 

## 1.0.0封装请求接口

## 2.0.0升级为整个项目构建

## 接下来介绍项目基本构成
 * common 放置全局基础初始化样式 base.css 全局布局样式 global.sacss
 * components 放置组件
 * pages 主包页面
 * pagesA 分包A 可继续添加分包B分包C
 * request 封装请求和api接口列表
 * static 防止静态图片资源
 * store 封装vuex全局状态管理
 * utils 全局工具集 统一从function文件下，导入index.js再导出  待扩展...
 * App.vue 导入全局样式
 * main.js 入口文件 导入store、API、util并挂载vue.prototype
 * manifest.json uni-app配置文件 appid 插件等
 * pages.json 页面url注册 分包已建好
 * uni.scss //全局uni-app自带全局scss变量
## pages index下首页 有请求接口示例 也有vuex存储变量示例
