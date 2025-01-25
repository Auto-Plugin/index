---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "autofit.js"
  text: "迄今为止最易用的自适应工具"
  image:
    src: './logo.png'
    alt: autofit.js
  tagline: 大屏适配仅需一行代码
  actions:
    - theme: brand
      text: ⚡ 即刻使用
      link: /use
    - theme: alt
      text: 了解 autofit.js 的原理
      link: /theory
    - theme: alt
      text: 还有问题？
      link: /question

features:
  - title: 易用🚀
    details: 调用仅需一行代码，即可适配设置分辨率以下的所有屏幕，无需任何其他辅助
  - title: 轻量🍀
    details: 纯js原生代码，gzip后仅有2.71KB，支持多种引入方式，且无任何第三方依赖
  - title: 性能⚡
    details: 只影响一个元素样式，计算量极小，提供关闭选项和个性化参数
---

<style>
:root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: linear-gradient(-45deg, #bd34fe 10%, #41d1ff);

    --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    --vp-home-hero-image-filter: blur(88px);

    --vp-button-brand-border: transparent;
    --vp-button-brand-text: #fff;
    --vp-button-brand-bg: #5468ff;

    --vp-button-brand-hover-border: transparent;
    --vp-button-brand-hover-text: #fff;
    --vp-button-brand-hover-bg: #5c73e7;
}
</style>
