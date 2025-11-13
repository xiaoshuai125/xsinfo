export default {
    // 应用级配置选项
    lang: 'zh-cn',
    title: '阿帅正传',
    description: 'Vite & Vue powered static site generator.',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
        siteTitle: false,
        logo: '/logo.png',
        search: {
            provider: 'local'
        },
        lastUpdated: {
            text: '文档更新时间',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        editLink: {
            pattern: 'https://github.com/xiaoshuai125/xsinfo/edit/master/docs/:path',
            text: '在 Github 上编辑该文档'
        },
        footer: {
            message: '<a href="https://beian.miit.gov.cn" target="_blank">冀ICP备2025104367号</a>/<a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">京公网安备11011502038830号</a>',
            copyright: 'Copyright ©2025 阿帅正传 版权所有 | 转载请注明出处'
        },
        nav: [
            { text: '游戏记录',
                items: [
                    {text: '图灵完备Turing Complete', link: '/game/turing_complete'},
                ]
            },
            // { text: 'Linux', link: '/linux/linux' },
            { text: '关于', link: '/about' },
            // { text: '瑞芯微系列', link: '/config' },
            // { text: '六轴机械臂', link: '/config' },
            { text: '文档源码', link: 'https://github.com/xiaoshuai125/xsinfo' },
        ],
        sidebar: {
            '/linux/': [
                {
                    text: 'Linux',
                    items: [
                        {text: 'Linux踩坑日记', link: '/linux/linux'},
                        {text: '学习使用Neovim', link: '/linux/01-nvim'},
                    ]
                }
            ],
            '/game/': [
                {
                    // text: '游戏记录',
                    items: [
                        {text: '图灵完备Turing Complete', link: '/game/turing_complete'},
                    ]
                }
            ],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xiaoshuai125' },
            { icon: 'gitee', link: 'https://gitee.com/song_kang_shuai' },
        ],
    }
}