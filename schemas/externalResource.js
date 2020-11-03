import { FaHandshake as icon } from 'react-icons/fa'

export default {
  name: 'externalResource',
  title: 'External Resource Link',
  type: 'object',
  icon,
  fields: [
    {
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Web Page', value: 'web' },
          { title: 'File Download', value: 'file-download' },
        ]
      },
    },
    {
      name: 'url',
      title: 'Target URL',
      description: 'Insert the complete address including "http://" or "https://" and file extensions.',
      type: 'url',
      validation: Rule => Rule.required()
    },
  ]
}
