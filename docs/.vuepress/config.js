module.exports = {
    base: "/",
    title: "Nodreame技术进阶",
    themeConfig: {
        nav: [
            {
                text: '大前端',
                items: [
                    { text: 'Vue', link: '/frontend/vue/' },
                    { text: 'VuePress', link: '/frontend/vuepress/' }
                ]
            },
            {
                text: '数据结构 & 算法',
                items: [
                    { text: '树', link: '/algorithms/tree/'},
                    { text: '动态规划', link: '/algorithms/dp/'}
                ],
            },
            { text: 'Github', link: 'https://github.com/Nodreame' }
        ],
        sidebar: {
            '/frontend/vue/': [
                '/frontend/vue/1',
                '/frontend/vue/2'
            ],
            '/frontend/vuepress/': [
                '/frontend/vuepress/1',
                '/frontend/vuepress/2',
                '/frontend/vuepress/3',
                '/frontend/vuepress/4'
            ],
            '/algorithms/dp/': [
                '/algorithms/dp/1',
                '/algorithms/dp/2'
            ],
            '/algorithms/tree/': [
                '/algorithms/tree/1',
                '/algorithms/tree/2'
            ]
        },
        sidebarDepth: 2
    }
}