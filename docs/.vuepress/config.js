const dirTree = require('directory-tree');
const path = require('path');

const rules = dirTree(path.join(__dirname, '../rules'), {
    extensions: /\.md/
});
const maven = dirTree(path.join(__dirname, '../maven'), {
    extensions: /\.md/
});
const eclipse = dirTree(path.join(__dirname, '../eclipse'), {
    extensions: /\.md/
});
const github = dirTree(path.join(__dirname, '../github'), {
    extensions: /\.md/
});


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
                    }
                ]
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
            '/maven/': ['getting-started'],
            '/eclipse/': ['getting-started','installation-guide','additional-configuration'],
            '/github/': ['getting-started', 'statistics'],
            '/rules/' : require('./rules.js'),
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