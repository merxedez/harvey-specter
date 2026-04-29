import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Photography', value: 'Photography' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Web Design', value: 'Web Design' },
          { title: 'Motion', value: 'Motion' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Top-left = 1, bottom-left = 2, top-right = 3, bottom-right = 4.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Optional external URL for the arrow button.',
    }),
  ],
  preview: {
    select: { title: 'title', order: 'order', media: 'coverImage' },
    prepare({ title, order, media }) {
      return { title, subtitle: `#${order}`, media }
    },
  },
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
