module.exports = {
    title: 'Documentation',
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
            }
        ],
        logo: '/jsparrow.png',
        sidebar: {
            '/maven/': ['getting-started', 'release-notes'],
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