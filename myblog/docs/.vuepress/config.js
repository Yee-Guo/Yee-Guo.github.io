module.exports = {
    title: '小易的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/read.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/study.png',  // 左上角logo
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '案例', link: '/' },
            { text: '技术文档', link: '/tech/' },
            { text: 'CSDN主页', link: 'https://blog.csdn.net/weixin_44717486?spm=1000.2115.3001.5343' }
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2,
    }
};