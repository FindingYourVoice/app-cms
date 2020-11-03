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
  fieldsets: [
    { name: 'slide1', title: 'Slide 01' },

    { name: 'slide2', title: 'Slide 02' },

    { name: 'slide3', title: 'Slide 03' },

    { name: 'slide4', title: 'Slide 04' }
  ],
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'General Description',
    },
    {
      title: 'Slide Title',
      name: 'slide1Title',
      type: 'string',
      fieldset: 'slide1'
    },
    {
      title: 'Slide Description',
      name: 'slide1Description',
      type: 'string',
      fieldset: 'slide1',
    },
    {
      title: 'Slide Title',
      name: 'slide2Title',
      type: 'string',
      fieldset: 'slide2'
    },
    {
      title: 'Slide Description',
      name: 'slide2Description',
      type: 'string',
      fieldset: 'slide2',
    },
    {
      title: 'Slide Title',
      name: 'slide3Title',
      type: 'string',
      fieldset: 'slide3'
    },
    {
      title: 'Slide Description',
      name: 'slide3Description',
      type: 'string',
      fieldset: 'slide3',
    },
    {
      title: 'Slide Title',
      name: 'slide4Title',
      type: 'string',
      fieldset: 'slide4'
    },
    {
      title: 'Slide Description',
      name: 'slide4Description',
      type: 'string',
      fieldset: 'slide4',
    },
    {
      name: 'paragraph',
      type: 'text',
      title: 'Paragraph',
      description: 'Paragraph before resource card',
    },
    {
      name: 'resourceCard',
      title: 'Existing Resource Card',
      type: 'reference',
      to: [ { type: 'resource' } ]
    }
  ]
}