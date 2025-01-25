import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "autofit.js",
  description: "迄今为止最易用的自适应工具",
  base: "/index/autofit.js/",
  head: [
    [
      'link',
      { rel: 'icon', href: './logo.png' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./logo.png",
    nav: [
      { text: '概览', link: '/' },
      { text: '文档', link: '/use' }
    ],

    sidebar: [
      {
        items: [
          { text: '即刻使用', link: '/use' },
          { text: '进阶参数', link: '/api' },
          { text: '关闭 autofit.js', link: '/close' },
          { text: '了解 autofit.js 原理', link: '/theory' },
          { text: '还有问题？', link: '/question' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LarryZhu-dev/autofit.js' }
    ]
  }
})
