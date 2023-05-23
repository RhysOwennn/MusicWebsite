import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subscribe',
  title: 'Subscribe',
  type: 'document',
  fields: [
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subscribe',
      title: 'Subscribe',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
