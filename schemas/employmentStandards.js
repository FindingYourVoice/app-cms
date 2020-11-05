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
      name: 'paragraphOne',
      type: 'text',
      title: 'First Paragraph',
    },
    {
      name: 'paragraphTwo',
      type: 'text',
      title: 'Second Paragraph',
    },
    {
      name: 'paragraphThree',
      type: 'text',
      title: 'Third Paragraph',
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