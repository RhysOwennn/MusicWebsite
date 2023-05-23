import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{type: 'route'}],
    }),
  ],
})
