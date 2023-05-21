import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'latest',
  title: 'Latest',
  type: 'document',
  fields: [
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bgImage',
    },
  },
})
