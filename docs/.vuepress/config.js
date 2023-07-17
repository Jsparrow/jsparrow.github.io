const path = require('path');

module.exports = {
    title: 'jSparrow Documentation',
    head: [
        ['meta', {
            name: 'google-site-verification',
            content: '1EOegR91kbVWv-4x23fHUki6OgU7loau_CsiGDtJHok'
        }],
        ['link', {
            rel: 'icon',
            href: '/jsparrow-tab-icon.png'
        }]
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-B39Q6TLDBR'
            }
        ]
    ],
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Rules',
                link: '/rules/'
            },
            {
                text: 'Tags',
                link: '/tags/'
            },
            {
                text: 'Eclipse Plugin',
                link: '/eclipse/getting-started.html',
            },
            {
                text: 'Maven Plugin',
                link: '/maven/getting-started.html'
            },
            {
                text: 'Statistics',
                link: '/statistics/statistics-summary.html'
            }
        ],
        logo: '/jsparrow-logo.png',
        sidebar: {
            '/maven/': ['getting-started', 'local-license-server', 'additional-configuration', 'build-integration', 'troubleshooting', 'release-notes'],
            '/eclipse/': ['getting-started', 'installation-guide', 'jsparrow-starter-registration', 'profiles', 'additional-configuration', 'release-notes'],
            '/cloud/': ['getting-started'],
            '/rules/': require('./rules.js'),
            '/statistics/': ['statistics-summary', 'statistics'],
            '/tags/': [''],
            '/': ['']
        }
    },
    port: 8081,
    extendMarkdown(md) {
        toc: {
            includeLevel: [2, 3, 4]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, './styles')
            }
        }
    }
};