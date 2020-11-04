


export default {
  name: 'covidInfo',
  title: 'Covid Information',
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
        name: 'subHeading',
        type: 'string',
        title: 'Sub Heading',
    },
    {
        name: 'covidSteps',
        title: 'Covid Steps',
        type: 'array',
        of: [{type: 'unorderedListItem'}]
    },
    {
        name: 'finalParagraph',
        type: 'text',
        title: 'Final Paragraph',
        description: 'The text before the external resources buttons.',
    },
    {
      name: 'buttons',
      type: 'array',
        of: [{type: 'externalResource'}],
        title: 'External Resource Buttons',
    }
  ]
}