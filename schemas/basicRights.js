export default {
  name: 'basicRights',
  title: 'Basic Rights',
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
    },
    {
      name: 'slide1',
      title: 'Slide 01',
      type: 'slide',
    },
    {
      name: 'slide2',
      title: 'Slide 02',
      type: 'slide',
    },
    {
      name: 'slide3',
      title: 'Slide 03',
      type: 'slide',
    },
    {
      name: 'slide4',
      title: 'Slide 04',
      type: 'slide',
    },
    {
      name: 'additionalInformation',
      type: 'text',
      title: 'Additional Information',
      description: 'Paragraph displayed after slider and before alert text box.',
    },
    {
      name: 'alertText',
      type: 'text',
      title: 'Alert Text',
      description: 'Paragraph displayed inside alert text box.',
    },
    {
      name: 'button',
      type: 'externalResource',
      title: 'External Resource Button',
    }
  ]
}