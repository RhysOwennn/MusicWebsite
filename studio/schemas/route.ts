import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ttile',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
  ],
})
