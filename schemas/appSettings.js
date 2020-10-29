import { RiPaletteFill as colorIcon } from 'react-icons/ri'


export default {
  name: 'appSettings',
  title: 'App Settings',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      title: 'App Colors',
      name: 'appColors',
      type: 'array',
      options: {
        sortable: false,
      },
      of: [
        {
          name: 'appColor',
          title: 'App Color',
          type: 'object',
          icon: colorIcon,
          fields: [
            {
              name: 'name',
              title: 'Color Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'code',
              title: 'Color Code',
              type: 'color',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
  ]
}