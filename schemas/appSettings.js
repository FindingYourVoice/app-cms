export default {
  name: 'appSettings',
  type: 'document',
  title: 'App Settings',
  __experimental_actions: [
    'create',
    'update',
    'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      type: 'color',
      name: 'primaryColor',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color',
      validation: Rule => Rule.required()
    },
    {
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color',
      validation: Rule => Rule.required()
    }
  ]
}