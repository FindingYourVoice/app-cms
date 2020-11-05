export default {
  name: 'wcb',
  title: 'Workers Compensation Board',
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
      name: 'button',
      type: 'externalResource',
      title: 'External Resource Button',
    },
    {
      name: 'additionalInformation',
      type: 'text',
      title: 'Additional Information',
      description: 'Paragraph displayed after button and before resource card.',
    },
    {
      name: 'resourceCard',
      title: 'Existing Resource Card',
      type: 'reference',
      to: [ { type: 'resource' } ]
    },
  ]
}