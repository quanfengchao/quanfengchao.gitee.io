module.exports = {
    title: 'vuepress',
    description: '我的个人网站',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }]
    ],
    base: '/',
    markdown: {
        lineNumbers: false
    },
    plugins: ['permalink-pinyin', 'rpurl', ['autobar', {'pinyinNav': true}]],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '指引', link: '/guide/'},
            {text: '安装', link: '/install/'},
            {
                text: '菜单',
                items: [
                    {text: '子菜单1', link: '/menu/'},
                    {text: '子菜单2', link: '/menu/'}
                ]
            },
            {text: 'Hope', link: 'https://vuepress-theme-hope.github.io/zh/guide'},
        ],
        sidebar: 'auto',
        sidebarDepth: 3,
    }
};
