module.exports = {
    title: 'jSparrow Documentation',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
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
            '/maven/': ['getting-started', 'local-license-server', 'release-notes'],
            '/eclipse/': ['getting-started', 'installation-guide', 'additional-configuration', 'release-notes'],
            '/github/': ['getting-started', 'statistics'],
            '/rules/': require('./rules.js'),
            '/': ['']
        }
    },
    port: 8081,
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        }
    }
};
