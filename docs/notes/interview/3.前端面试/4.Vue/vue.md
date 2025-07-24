---
title: vue
createTime: 2025/06/27 14:00:33
permalink: /before/6czvxm2x/
---

## 一、计算属性

1、 使用本地图片在 `vuepress` 下面的静态资源 直接使用 `images/img.png`

2、 网络链接图片直接使用

3、 本地图片非在 `vuepress` 下的图片,在全路径(绝对路经) `picture/img.png`
<Swiper :items="['images/img.png','https://test.hnnfs.com/html/img/index_bng.jpg','picture/img.png']"></Swiper>

### 1.计算属性 vs 侦听器

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。

### 2.计算属性 vs 方法

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。

### 3.依赖与注入 provide 和 inject

- provide 选项允许我们指定我们想要提供给后代组件的数据/方法

```js
provide: function () {
  return {
    getMap: this.getMap
  }
}
```

- inject 选项来接收指定的我们想要添加在这个实例上的 property

```js
inject: ["getMap"];
```

- 注: 依赖注入还是有负面影响的。它将你应用程序中的组件与它们当前的组织方式耦合起来，使重构变得更加困难。同时所提供的 property 是非响应式的。

## 二、响应式原理

### 1.对于对象

- Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的。例如：
- 对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式 property。
- 有时你可能需要为已有对象赋值多个新 property，比如使用 Object.assign() 或 \_.extend()。但是，这样添加到对象上的新 property 不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的 property 一起创建一个新的对象。

```js
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 });
```

### 2.对于数组

Vue 不能检测以下数组的变动：

- 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength

方法一

```js
Vue.set(vm.items, indexOfItem, newValue);
```

方法二

```js
vm.items.splice(indexOfItem, 1, newValue);
```
