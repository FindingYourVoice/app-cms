export default {
  name: 'introSlides',
  title: 'Intro Slides',
  type: 'document',
  __experimental_actions: [
    //'create',
    'update',
    //'delete',
    'publish'
  ],
  fields: [
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
      description: 'This is slide is always displayed with a check mark button.',
      type: 'slide',
    },
  ]
}