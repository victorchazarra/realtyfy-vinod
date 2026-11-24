import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'victorchazarra/realtyfy-vinod',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Date' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Guides', value: 'guides' },
            { label: 'News', value: 'news' },
            { label: 'Analysis', value: 'analysis' },
            { label: 'Legal', value: 'legal' },
          ],
          defaultValue: 'guides',
        }),
        coverImage: fields.text({ label: 'Cover Image Path' }),
        readingTime: fields.text({ label: 'Reading Time', defaultValue: '5 min read' }),
        author: fields.text({ label: 'Author', defaultValue: 'Realtyfy Team' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
})
