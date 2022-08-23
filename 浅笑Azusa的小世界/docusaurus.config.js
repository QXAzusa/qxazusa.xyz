// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '浅笑Azusa的小世界',
  tagline: 'Dinosaurs are cool',
  url: 'https://blog.qxazusa.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
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
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
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
        title: '浅笑Azusa的小世界',
        logo: {
          alt: 'Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站地图',
            items: [
              {
                label:'所有文章',
                to:'/blog'
              },
              {
                label: '关于我',
                to: '/about-me',
              },
            ],
          },
          {
            title: '社交账号',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/QXAzusa',
              },
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/profiles/76561198416930740',
              },
              {
                label: 'Blibili',
                href: 'https://space.bilibili.com/148833361',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '旧版博客(Hexo)',
                href: 'https://hexo.qxazusa.xyz/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/QXAzusa/new.qxazusa.xyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} QXAzusa  |  Powered by Docusaurus<br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" rel="noopener" href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">本站由&nbsp;<img src="/img/upyun_logo.png" width="4%" align="center">&nbsp;提供CDN加速服务</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
