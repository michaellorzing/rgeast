export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'heroHeader',
      title: 'Hero Header',
      type: 'string',
    },
    {
      name: 'heroSubheader',
      title: 'Hero Subheader',
      type: 'string',
    },
    {
      name: 'aboutUsHeader',
      title: 'About Us Header',
      type: 'string',
    },
    {
      name: 'aboutUsBody',
      title: 'About Us Body',
      type: 'text',
    },
    {
      name: 'aboutUsImage',
      title: 'About Us Image',
      type: 'image',
    },
    {
      name: 'workHeader',
      title: 'Work Section Header',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'project'}],
    },
    {
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blog'}}],
    },
  ],
}
