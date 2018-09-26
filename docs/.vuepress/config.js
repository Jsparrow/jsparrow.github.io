const dirTree = require('directory-tree');
const path = require('path');

const rules = dirTree(path.join(__dirname, '../rules'), {
    extensions: /\.md/
});
const eclipse = dirTree(path.join(__dirname, '../eclipse'), {
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
                text: 'Eclipse Plug-In',
                link: '/eclipse/'
            }
            // ,
            // {
            //     text: 'Rules',
            //     link: '/rules/'
            // }
        ],
        logo: '/logo.png',
        sidebar: {
            '/rules/': rules.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a),
            '/eclipse/': eclipse.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '')
                .sort((a, b) => b < a)
        }
    },
    port: 8081
};