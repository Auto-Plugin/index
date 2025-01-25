# 常见疑难解答

## 为什么我使用后有白边？

检查 是否使用了 `rem\em\vh\vw` 等相对单位，推荐使用 `px` & `%` 作为单位<br>

## 为什么我的图表、地图、背景图没有撑满？

建议使用 `%` 使其总是充满父元素，而不是使用 `px` 固定宽高，
如果使用的第三方库有 `resize` 事件或方法，建议尝试使用 第三方库提供的 `resize`<br>

## 需要和其他自适应库一起使用吗？

不需要，也不可以，因为 autofit.js 接管的页面中，相对单位或缩放会造成冲突。<br>

## 为什么我使用后，第三方组件库的弹出层错位了？

各大第三方组件库依旧没有做好对 `transform` 属性的支持，因为 `transform` 不会改变元素的实际位置，当其计算弹出层位置时，不会考虑元素的视觉位置，而是考虑元素的实际位置，因此会出现错位。

## 全屏后自适应失效了？

全屏的元素无法修改其宽高、缩放等样式，在使用全屏 API 时，不要选择 autofit.js 接管的元素，而是选择其上级元素。

## 还有问题？

欢迎来到诺克萨斯（不朽堡垒已满200，请加黑色玫瑰）

<center style="display: flex;justify-content: center;align-items: flex-start;flex-wrap: wrap;">
    <img src="./c.jpg" style="width:50%;height:480px;object-fit:cover;"/><img src="./c1.jpg" style="width:50%;height:480px;object-fit:cover;"/>
</center>

::: tip 🟢

群二维码过期请添加德莱厄斯

:::
