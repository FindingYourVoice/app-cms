import { RiContactsFill as icon } from 'react-icons/ri'

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Resource Name',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
          {
              name: 'description',
              title: 'Description',
              type: 'text',
          },
          {
              name: 'phone',
              title: 'Phone',
              type: 'string',
          },
          {
              name: 'website',
              title: 'Website',
              type: 'string',
          },

      ]
    }

  ]
}
