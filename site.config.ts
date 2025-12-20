import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '李夜落的小站',
  author: {
    name: '李夜落',
    avatar: 'https://img.liyeluo.top/file/website/1762556330522_头像小.png',
  },
   subtitle: '即使饱受摧残',
  description: '我仍一笑置之',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Li-Ye-Luo',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
  
    {
      name: 'Telegram',
      link: 'https://t.me/liyeluo',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:liyeluo@liyeluo.top',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      /*{
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },*/
    ],
  },
})
