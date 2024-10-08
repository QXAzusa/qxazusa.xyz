// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '浅笑Azusa的小世界',
  tagline: 'Dinosaurs are cool',
  url: 'https://www.qxazusa.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//static.qxazusa.xyz/public/image/favicon.png?x-image-process=style/favicon',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','ja','zh-Hant'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editLocalizedFiles: true
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
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/blog/tags/**','/album/***','/error-page/***'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-MD28TLTYRQ',
          anonymizeIP: false,
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
          src: '//static.qxazusa.xyz/public/image/favicon.png?x-image-process=style/favicon',
        },
        items: [
          {to: '/blog', label: '文章', position: 'left'},
          {
            type: 'doc',
            docId: 'wiki',
            position: 'left',
            label: '百科',
          },
          /**{to: '/album', label: '相册'},**/
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站地图',
            items: [
              {
                label:'文章',
                to:'/blog'
              },
              {
                label:'百科',
                to:'/docs/wiki'
              },
              /**{
                label: '相册',
                to: '/album',
              },**/
            ],
          },
          {
            title: '社交账号',
            items: [
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/QXAzusa',
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
                label: '联系方式',
                to: '/contact',
              },
              {
                label: '旧版(Powered by Hexo)',
                href: 'https://hexo.qxazusa.xyz/',
              },
              {
                label: '关于我',
                to: '/about',
              }
            ],
          },
        ],
        copyright: `
        <div id="footer_pc">Copyright © ${new Date().getFullYear()} QXAzusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by Docusaurus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="gongan_logo" alt="gongan_logo" src="//static.qxazusa.xyz/public/image/gongan.png" align="center">&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://icp.gov.moe/?keyword=20220417" target="_blank" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">萌ICP备20220417号</a><br></div>
        <div id="footer_mobile">
        <br><a href="https://icp.gov.moe/?keyword=20220417" target="_blank" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">萌ICP备20220417号</a>
        <br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a>
        <br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a><br>
        Copyright © ${new Date().getFullYear()} QXAzusa
        <br>Powered by Docusaurus
        </div>
        `
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{name: 'referrer', content: 'always'}],
    }),
  scripts: [
      {
        src: 'https://static.qxazusa.xyz/public/script/jquery-3.6.0.min.js',
        async: false,
      },
      {
        src: 'https://static.qxazusa.xyz/docusaurus/script/clipboard.min.js',
        async: true,
      }
    ]
};

module.exports = config;
