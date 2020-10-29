import { FaHandshake as icon } from 'react-icons/fa'

export default {
  name: 'partner',
  title: 'Partner',
  type: 'object',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Website',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageWidth',
      title: 'Image Width',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
