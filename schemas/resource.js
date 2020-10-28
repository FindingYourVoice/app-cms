import { FiBookOpen as icon } from 'react-icons/fi'

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
              type: 'string',
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
