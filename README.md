<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:35:21
 * @LastEditTime: 2020-06-19 17:31:51
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