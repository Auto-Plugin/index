### 安装

```shell
npm i autofit.js
```

### 引入

```js
import autofit from 'autofit.js'
```

### 使用

```js
autofit.init()
```

你的 dom 结构应该是这样的：

```html
<body style="这里将由 autofit 自动注入样式，包括宽高和缩放值">
  <div id="最外层元素">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    ...
  </div>
</body>
```

你的 css 样式应该是这样的：

```css
body {
 /* 这里不要有 !important 强制覆盖 宽高、缩放、变形原点 */
}
#最外层元素 {
  width: 100%; /* 这样即可充满全屏，无需再写设计宽度 */
  height: 100%; /* 这样即可充满全屏，无需再写设计高度 */
}
```