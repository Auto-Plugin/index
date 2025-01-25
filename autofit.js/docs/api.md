## 使用

- `el` : 选择一个 autofit.js 影响的 dom 元素，默认是 "body"，支持所有 css 选择器 (推荐使用 id)
- `dw` : 设计稿的宽度，默认是 1920
- `dh` : 设计稿的高度，默认是 1080
- `resize` : 是否监听 resize 事件，默认是 true，关闭后无法自动计算拖动后的大小
- `ignore` : 忽略缩放的元素（该元素将反向缩放），参数见下文
- `transition` : 过渡时间，默认是 0
- `delay` : 默认是 0
- `limit` : 默认是 0.1，当缩放阈值不大于此值时不缩放
- `cssMode` : 选择 css 缩放方式，默认值为 scale
- `allowScoll` : 是否允许滚动，默认值为 false

## 示例

```js
// 用了默认参数，等价于 autofit.init()
autofit.init({
  dh: 1080,
  dw: 1920,
  el: "body",
  resize: true,
});
```

## 事件热区偏移

1. **使用 `ignore` 参数**

   ```js
   autofit.init({
     ignore: [
       {
         el: ".gaodeMap", //必填
         height: "300px", //可选，需注明单位
         width: "80%", //可选，需注明单位
         scale: 1.2, //可选：回放程度，基于主元素缩放后的大小
         fontSize: 26, //可选，如果自定义缩放后文字大小不合适，可以在这里设置文字大小
       },
       {
         //...
       },
     ],
   });
   ```

   如果反向缩放后的元素大小使结构发生变化，你还可以手动传入宽高、回放程度。

   如果无需过多参数，`ignore` 还支持传入字符串数组：

   ```js
   autofit.init({
     ignore: [".gaodeMap", ".leaflet", "#someElementClassOrId"],
   });
   ```

   ::: tip 🟢

   使用 ignore参数 时，无需被矫正的元素挂载

   :::

2. ##### 使用 `elRectification` 方法

   一些 canvas 渲染的图表也会有事件偏移，而图表不同于地图，当使用 ignore 时，过大的图表可能会显示不全，因此可以使用 `elRectification` 。

   ```js
   import { elRectification } from "autofit.js";
   ```

   ```html
   <div class="G2plot"></div>
   <div class="G2plot"></div>
   <div class="G2plot"></div>
   ```

   ```js
   onMounted(() => {
     elRectification(".G2plot");
   });
   ```

   ::: warning 🔴

   使用 elRectification 时，需要被矫正的元素已经挂载

    :::

## element 等弹出层偏移

感谢 [@hellorayza](https://github.com/hellorayza) [PR#74](https://github.com/LarryZhu-dev/autofit.js/pull/74) 

对于 element-plus`（如果弹出层组件未在autofit影响的元素(默认是body)内，则不受影响）` 使用 **子串匹配属性** 选择器 div[id*="el-popper-container"]  可以解决 element 弹出层偏移问题，其他组件库也是类似用法，例：

```js
autofit.init({
  ignore:['div[id*="el-popper-container"]']
});
```

elRectification 同样也可以解决弹出层偏移问题，只需

```js
onMounted(() => {
  elRectification('div[id*="el-popper-container"]');
});
```

对于 element-ui 可以直接使用 auto-element 替换原有的 element-ui，auto-element 是对 element-ui 的偏移问题进行了修复，使用方法与 element-ui 一致。

此方法由仓库成员 [@ffgenius](https://github.com/ffgenius) 提供

```shell
pnpm i auto-element
```

具体参考：[auto-element](https://github.com/Auto-Plugin/auto-element/blob/dev/README.md)
