const dirTree = require('directory-tree');
const path = require('path');

const rules = dirTree(path.join(__dirname, '../rules'), {
    extensions: /\.md/
});

module.exports = {
    title: 'jSparrow Github Documentation',
    themeConfig: {
        nav: [{
                text: 'jSparrow',
                link: '/'
            },
            {
                text: 'Rules',
                link: '/rules/'
            }
        ],
        sidebar: {
            '/rules/': rules.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                        .sort((a, b) => b < a)
        }
    },
    port: 8081
};