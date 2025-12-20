import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  /** 站点基础配置（GitHub Pages 必须） */
  siteConfig: {
    title: '李夜落的小站',
    url: 'https://blog.liyeluo.top',
    base: '/',
    author: '李夜落',
    description: '李夜落的个人博客',
    lang: 'zh-CN',
  },

  /** 使用 yun 主题 */
  theme: 'yun',

  /** 主题配置 */
  themeConfig: {
    banner: {
      enable: true,
      title: '李夜落的小站',
    },

    /*
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],
    */

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '',
      },
    },
  },

  /** UnoCSS 配置 */
  unocss: {
    safelist,
  },
})
