export default {
    // 应用级配置选项
    lang: 'zh-cn',
    title: '阿帅正传',
    description: 'Vite & Vue powered static site generator.',
    themeConfig: {
        footer: {
            message: '<a href="https://beian.miit.gov.cn" target="_blank">冀ICP备2025104367号</a>/<a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">京公网安备11011502038830号</a>',
            copyright: 'Copyright © 2019-2025 阿帅正传'
        },
        sidebar: {
            // 当用户位于 `guide` 目录时，会显示此侧边栏
            '/linux/': [
                {
                    text: 'Linux',
                    items: [
                        {text: 'Index', link: '/linux/linux'},
                        {text: 'nvim', link: '/linux/01-nvim'},
                    ]
                }
            ],
        },
        socialLinks: [
            { icon: 'gitee', link: 'https://gitee.com/song_kang_shuai' },
            { icon: 'github', link: 'https://github.com/xiaoshuai125' },
        ],
    }
}