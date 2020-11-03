export default {
    name: 'introSlides',
    title: 'Intro Slides',
    type: 'document',
    __experimental_actions: [
      'create',
      'update',
      'delete',
      'publish'
    ],
    fieldsets: [
        { name: 'welcomeSlide', title: 'Weclome' },
    
        { name: 'learningSlide', title: 'Learning' },
    
        { name: 'interactiveSlide', title: 'Interractive Learning' },
    
        { name: 'disclaimerSlide', title: 'Disclaimer' }
      ],
    fields: [
      {
        name: 'welcomeTitle',
        type: 'string',
        title: 'Slide Ttle',
        fieldset: 'welcomeSlide'
      },
      {
        name: 'welcomeDescription',
        type: 'text',
        title: 'Slide Description',
        fieldset: 'welcomeSlide'
      },
      {
        name: 'learningTitle',
        type: 'string',
        title: 'Slide Title',
        fieldset: 'learningSlide'
      },
      {
        name: 'learningDescription',
        type: 'text',
        title: 'Slide Description',
        fieldset: 'learningSlide'
      },
      {
        name: 'interactiveTitle',
        type: 'string',
        title: 'Slide Title',
        fieldset: 'interactiveSlide'
      },
      {
        name: 'interactiveDescription',
        type: 'text',
        title: 'Slide Description',
        fieldset: 'interactiveSlide'
      },
      {
        name: 'disclaimerTitle',
        type: 'string',
        title: 'Slide Title',
        fieldset: 'disclaimerSlide'
      },
      {
        name: 'disclaimerDescription',
        type: 'text',
        title: 'Slide Description',
        fieldset: 'disclaimerSlide'
      },
      
    ]
  }