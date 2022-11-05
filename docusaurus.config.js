// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Skydev',
    tagline: 'Development made easy!',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/Skydev/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'itsbittoosharma', // Usually your GitHub org/user name.
    projectName: 'skydev', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),

                },
                blog: {
                    showReadingTime: true,

                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Skydev',
            logo: {
                alt: 'Skeydev Logo',
                src: 'img/logo.png',
                srcDark: 'img/logo-dark.png'
            },
            items: [{
                    type: 'doc',
                    docId: 'Tutorial/intro',
                    to: '/docs/Tutorial/intro',
                    position: 'left',
                    label: 'Tutorial',
                },
                {
                    // type: 'doc',
                    // docId: 'DSA/intro',
                    to: '/docs/category/Web3-tutorial',
                    position: 'left',
                    label: 'Web3',
                },
                {
                    // type: 'doc',
                    // docId: 'DSA/intro',
                    to: '/docs/category/Data-Structures-and-Algorithms',
                    position: 'left',
                    label: 'Data Structures',
                },
                {
                    // type: 'doc',
                    // docId: 'DSA/intro',
                    to: '/docs/category/oops',
                    position: 'left',
                    label: 'OOPS',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://github.com/itsbittoosharma',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'DSA',
                        to: '/docs/DSA/Roadmap',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/itsbittoosharma',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/itsbittoosharma',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Skydev, Inc.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;