import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listen',
  title: 'Listen',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bandcampLinks',
      title: 'Bandcamp Link',
      type: 'array',
      of: [{type: 'bandcamp'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bgImage',
    },
  },
})
