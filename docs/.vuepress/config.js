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
            text: 'What is jSparrow?',
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
            text: 'Cloud App',
            link: '/cloud/getting-started.html'
        },
        {
            text: 'Statistics',
            link: '/statistics/statistics.html'
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
            '/cloud/': ['getting-started'],
            '/rules/': require('./rules.js'),
            '/statistics/': ['statistics', 'jenkins-statistics', 'mdm-statistics', 'neo4j-statistics'],
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
