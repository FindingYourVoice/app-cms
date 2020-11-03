


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
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
    },
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
        type: 'text',
        title: 'Covid Steps',
        description: 'Steps after the bold text',
    },
    {
        name: 'finalParagraph',
        type: 'text',
        title: 'Final Paragraph',
        description: 'The two paragraphs before the buttons',
    },
    {
        name: 'button1',
        type: 'externalResource',
        title: 'External Resource Button 1',
    },
    {
        name: 'button2',
        type: 'externalResource',
        title: 'External Resource Button 2',
    },
    {
        name: 'button3',
        type: 'externalResource',
        title: 'External Resource Button 3',
    }
  ]
}