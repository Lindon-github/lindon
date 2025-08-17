import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import * as path from "node:path";
/**
 *  frontmatter 用法  https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html
 */
export default defineUserConfig({
  base: '/lindon/', // 部署站点的基础路径(如github page 对应的仓库名【lindon】)
  lang: 'zh-CN',
  title: 'Lidon',
  description: '',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],
  locales: {
    '/': {
      title: 'Lidon Blog',
      lang: 'zh-CN',
      description: 'Lidon Blog Site',
    },
    '/en/': {
      title: 'Lidon Blog',
      lang: 'en-US',
      description: 'Lidon Blog Site',
    },
  },
  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://plus-wave.github.io/',
    // copyright: 'CC-BY-NC-SA-4.0',
    // 贡献者
    contributors: false,

    autoFrontmatter: {
      permalink: true, // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true, // 是否生成标题
    },
    /**
    * 加密功能
    * @see https://theme-plume.vuejs.press/guide/features/encryption/
    */
    encrypt: {
      rules: {
        "/article/hidden/": "20250723",
      }
    },
    search: {
      // 本地搜索
      provider: 'local',
    },
    // search: {
    //   provider: 'algolia',
    //   appId: "I76E33RAQW",
    //   apiKey: "2f441d2c2736f879a5fe5c73efdaaab5",
    //   indexName: "plus-waveio",
    // },
    markdown: {
      chat: true,
    },
    plugins: {
      git: true,

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      //   // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   langs: ['shell', 'bash', 'typescript', 'javascript'],
      //   // twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      //   lineNumbers: true, // 启用行号
      // },
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },

      markdownImage: {
        // figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       * @see https://theme-plume.vuejs.press/guide/embed/video/artplayer/
       */
      markdownPower: {
        pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
        caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        plot: true,         // 启用隐秘文本语法 !!xxxx!!
        bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
        youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
        artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
        audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
        icons: true,        // 启用内置图标语法  :[icon-name]:
        codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
        replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
        codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
        jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
        npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        demo: true,         // 启用 demo 容器  ::: demo
        repl: {             // 启用 代码演示容器
          go: true,         // ::: go-repl
          rust: true,       // ::: rust-repl
          kotlin: true,     // ::: kotlin-repl
        },
        imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      },

      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,

      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      watermark: false,

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'PLUS-WAVE/PLUS-WAVE.github.io',
        repoId: 'R_kgDONTjEgw',
        category: 'Announcements',
        categoryId: 'DIC_kwDONTjEg84CkjoX',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },

      /**
       *  本地搜索, 默认启用
       * */
      // search: true,
      /**
       * 文章字数统计、阅读时间，设置为 false 则禁用
       * */
      // readingTime: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      docsearch: {
        appId: "I76E33RAQW",
        apiKey: "5a647a9266ea269c5c219a4af315b3f3",
        indexName: "plus-waveio",
      },
    },

  }),

  /**
   *  By alias, the page is rebuilt
   */
  // alias: {
  //   "@theme/Nav/VPNavBarTitle.vue": path.resolve(
  //     __dirname,
  //     "./theme/components/NavBarTitle.vue"
  //   ),
  // },
})
