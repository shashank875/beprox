import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/beprox/',
  title: "BeProx",
  description: "Local Domain Proxy & Traffic Inspector",
  sitemap: {
    hostname: 'https://jekibus.github.io/beprox/'
  },
  transformPageData(pageData) {
    if (pageData.relativePath === 'changelog.md') {
      pageData.frontmatter.description = "BeProx version history and release notes"
      pageData.description = "BeProx version history and release notes"
    }
  },
  transformHead: ({ pageData }) => {
    const canonicalUrl = `https://jekibus.github.io/beprox/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')}`
    
    const head: [string, Record<string, string>][] = [
        ['link', { rel: 'canonical', href: canonicalUrl }],
    ]

    // Only add description if it's NOT already in frontmatter
    // VitePress adds frontmatter description automatically, so we only need to handle the fallback
    if (!pageData.frontmatter.description) {
      head.push(['meta', { name: 'description', content: "Local Domain Proxy & Traffic Inspector" }])
    }
    
    return head
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Roadmap', link: '/roadmap' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Roadmap', link: '/roadmap' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jekibus/beprox' }
    ]
  }
})
