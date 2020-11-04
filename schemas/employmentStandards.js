export default {
  name: 'employmentStandards',
  title: 'Employment Standards',
  type: 'document',
  __experimental_actions: [
    //'create',
    'update',
    //'delete',
    'publish'
  ],
  fields: [
    {
      name: 'mainParagraph',
      type: 'text',
      title: 'Main Paragraph',
    },
    {
        name: 'resourceCard',
        title: 'Existing Resource Card',
        type: 'reference',
        to: [ { type: 'resource' } ]
    },
    {
        name: 'finalParagraph',
        type: 'text',
        title: 'Final Paragraph',
    },
    {
      name: 'button',
      type: 'externalResource',
      title: 'External Resource Button',
    }
  ]
}