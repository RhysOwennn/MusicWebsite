import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bandcamp',
  title: 'Bandcamp Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
    }),
  ],
})
