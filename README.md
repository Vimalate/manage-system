<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:35:21
 * @LastEditTime: 2020-06-20 18:00:33
 * @Description: 
 * @FilePath: \vue-manage-system\README.md
--> 
# vue-manage-system

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
## 解决ElementUI导航栏重复点菜单报错问题

在VUE中路由遇到

```Error: Avoided redundant navigation to current location:```报错显示是路由重复，
虽然对项目无影响，但是看到有红的还是不舒服。

在router的配置文件中（router -> index.js）加上
```js
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```
## git 优雅的提交
- feat：新增一个功能
- fix：修复一个bug
- docs：文档变更
- style：代码格式（不影响功能，例如空格、分号等格式修正）
- refactor：代码重构
- perf：改善性能
- test：测试
- build：变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
- ci：更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等
- chore：变更构建流程或辅助工具
- revert：代码回退