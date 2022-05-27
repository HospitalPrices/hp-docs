// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hospital Prices',
  tagline: 'A contributors guide to making hospital prices accessible to everyone. ',
  url: 'https://www.hospitalprices.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hp_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hospitalprices', // Usually your GitHub org/user name.
  projectName: 'hp-docs', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hospitalprices/hp-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hospitalprices/hp-docs/tree/main/',
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
        title: 'Hospital Prices',
        logo: {
          alt: 'Hospital Prices Logo',
          src: 'img/hp_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docId: 'learn/index',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'contribute/index',
            position: 'left',
            label: 'Contribute',
          },
          {
            type: 'doc',
            docId: 'resources/index',
            position: 'left',
            label: 'Resources',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.hospitalprices.app',
            label: 'Hospital Prices App',
            position: 'right',
          },
          {
            href: 'https://github.com/hospitalprices/hp-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contributors Guide',
            items: [
              {
                label: 'About',
                to: '/docs/intro',
              },
              {
                label: 'Learn',
                to: '/docs/learn',
              },
              {
                label: 'Contribute',
                to: '/docs/contribute',
              },
              {
                label: 'Resources',
                to: '/docs/resources',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Hospital Prices App',
                href: 'https://www.hospitalprices.app',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hospitalprices/hp-docs',
              },
            ],
          },
        ],
        copyright: `GNU General Public License v3.0 | ${new Date().getFullYear()} | Hospital Prices`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
