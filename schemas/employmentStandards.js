


export default {
  name: 'employmentStandards',
  title: 'Employment Stabndards',
  type: 'document',
  __experimental_actions: [
    //'create',
    'update',
    //'delete',
    'publish'
  ],
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
    },
    {
      name: 'paragraph1',
      type: 'text',
      title: 'First Paragraph',
    },
    {
        name: 'paragraph2',
        type: 'text',
        title: 'Second Paragraph',
    },
    {
        name: 'paragrapgh3',
        type: 'text',
        title: 'Third Paragrapgh',
    },
    {
        name: 'paragraph4',
        type: 'text',
        title: 'Fourth Paragraph',
    },
    {
        name: 'resourceCard',
        title: 'Existing Resource Card',
        type: 'reference',
        to: [ { type: 'resource' } ]
    },
    {
        name: 'paragraph5',
        type: 'text',
        title: 'Final Paragraph',
    },
    {
        name: 'linkbutton',
        type: 'externalResource',
        title: 'External Resource Button',
    }
  ]
}