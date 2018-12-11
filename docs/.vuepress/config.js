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
                items: [{
                    text: 'Getting Started',
                    link: '/maven/getting-started.html'
                }]
            },
            {
                text: 'Eclipse Plugin',
                link: '/eclipse/getting-started.html',
                items: [{
                        text: 'Getting Started',
                        link: '/eclipse/getting-started.html'
                    },
                    {
                        text: 'Installation Guide',
                        link: '/eclipse/installation-guide.html'
                    },
                    {
                        text: 'Additional Configuration',
                        link: '/eclipse/additional-configuration.html'
                    },
                    {
                        text: 'Release Notes',
                        link: '/eclipse/release-notes.html'
                    }
                ]
            },
            {
                text: 'GitHub App',
                items: [{
                        text: 'Getting Started',
                        link: '/github/getting-started.html',
                    },
                    {
                        text: 'Statistics',
                        link: '/github/statistics.html',
                    },
                ]
            },
            {
                text: 'Rules',
                link: '/rules/'
            }
        ],
        logo: '/logo.png',
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