const path = require('path');

module.exports = {
    title: 'jSparrow Documentation',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-144352955-2'
            }
        ]
    ],
    themeConfig: {
        nav: [{
            text: 'jSparrow',
            link: '/'
        },
        {
            text: 'Maven Plugin',
            link: '/maven/getting-started.html'
        },
        {
            text: 'Eclipse Plugin',
            link: '/eclipse/getting-started.html',
        },
        {
            text: 'GitHub App',
            link: '/github/getting-started.html'
        },
        {
            text: 'Rules',
            link: '/rules/'
        },
        {
            text: 'Homepage',
            link: 'https://jsparrow.eu/'
        }
        ],
        logo: '/logo.png',
        sidebar: {
            '/maven/': ['getting-started', 'local-license-server', 'additional-configuration', 'troubleshooting', 'release-notes'],
            '/eclipse/': ['getting-started', 'installation-guide', 'jsparrow-starter-registration', 'profiles', 'additional-configuration', 'release-notes'],
            '/github/': ['getting-started', 'statistics'],
            '/rules/': require('./rules.js'),
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
