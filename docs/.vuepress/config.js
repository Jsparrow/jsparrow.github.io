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
    title: 'jSparrow GitHub Documentation',
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
                link: '/eclipse/getting-started.html'
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
        logo: '/logo.png',
        sidebar: {
            '/rules/': rules.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a),
            '/maven/': maven.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a),
            '/eclipse/': eclipse.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a),
            '/github/': github.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a)
        }
    },
    port: 8081,
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        }
    }
};
