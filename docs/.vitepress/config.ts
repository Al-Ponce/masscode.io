import { defineConfig } from 'vitepress'

const description = 'Code snippets manager for developers, developed using web technologies.'
const ogDescription = 'A free and open source code snippets manager for developers'
const ogImage = 'https://masscode.io/og-image.png'
const ogTitle = 'massCode'
const ogUrl = 'https://masscode.io'
const gsv = 'h-rU1tSutO83wOyvi4syrk_XTvgennlUPkL6fMmq5cI'

export default defineConfig({
  title: 'massCode',
  description,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-64w.png' }],
    ['meta', { property: 'description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'google-site-verification', content: gsv }]
  ],

  themeConfig: {
    logo: '/logo-64w.png',

    nav: [
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Releases', link: 'https://github.com/massCodeIO/massCode/releases/' },
      { text: 'Snippet Collection', link: '/snippets/ui/buttons/' },
      { text: 'Donate', link: '/donate' }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/antonreshetov' },
      { icon: 'github', link: 'https://github.com/massCodeIO/massCode' }
    ],

    footer: {
      message: 'massCode released under the AGPL v3 License.<br>Snippet collection released under the CC-BY-4.0 License.',
      copyright: 'Copyright © 2019-present Anton Reshetov'
    },

    sidebar: {
      '/documentation/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Layout', link: '/documentation/' },
            { text: 'Library', link: '/documentation/library' },
            { text: 'Folders', link: '/documentation/folders' },
            { text: 'Tags', link: '/documentation/tags' },
            { text: 'Snippets', link: '/documentation/snippets' },
            { text: 'Fragments', link: '/documentation/fragments' },
            { text: 'Description', link: '/documentation/description' },
            { text: 'Search', link: '/documentation/search' },
            { text: 'Storage', link: '/documentation/storage' },
            { text: 'Sync', link: '/documentation/sync' }
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'Markdown', link: '/documentation/markdown.md' }
          ]
        }
      ],
      '/snippets/': [
        {
          text: 'UI',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'Buttons', link: '/snippets/ui/buttons/' },
            { text: 'Checkboxes', link: '/snippets/ui/checkboxes/' },
            { text: 'Effects', link: '/snippets/ui/effects/' },
            { text: 'Inputs', link: '/snippets/ui/inputs/' },
            { text: 'Loaders', link: '/snippets/ui/loaders/' },
            { text: 'Switches', link: '/snippets/ui/switches/' }
          ]
        }
      ]
    }
  }

})
