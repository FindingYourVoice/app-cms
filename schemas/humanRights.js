export default {
    name: 'humanRights',
    title: 'Human Rights',
    type: 'document',
    __experimental_actions: [
      //'create',
      'update',
      //'delete',
      'publish'
    ],
    fields: [
      {
        name: 'paragraph1',
        type: 'text',
        title: 'First Paragraph',
      },
      {
        name: 'linkbutton1',
        type: 'externalResource',
        title: 'External Resource Button 1',
    },
      {
          name: 'paragraph2',
          type: 'text',
          title: 'Second Paragraph',
      },
      {
          name: 'subParagraph2',
          type: 'text',
          title: 'Sub Paragraph',
      },
      {
        name: 'linkbutton2',
        type: 'externalResource',
        title: 'External Resource Button 2',
    }

    ]
  }