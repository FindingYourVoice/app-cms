export default {
  name: 'ohs',
  title: 'Occupational Health and Safety',
  type: 'document',
  __experimental_actions: [
    //'create',
    'update',
    //'delete',
    'publish'
  ],
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'General Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'button',
      type: 'externalResource',
      title: 'External Resource Button',
    }
  ]
}