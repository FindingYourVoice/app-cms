export default {
  name: 'typesOfHazards',
  title: 'Types Of Hazards',
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
      name: 'paragraph',
      type: 'text',
      title: 'Paragraph',
      description: 'Displayed before resource card',
    },
    {
      name: 'resourceCard',
      title: 'Existing Resource Card',
      type: 'reference',
      to: [ { type: 'resource' } ]
    }
  ]
}