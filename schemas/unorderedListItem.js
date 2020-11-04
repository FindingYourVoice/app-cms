import { FaListAlt as icon } from 'react-icons/fa'

export default {
  name: 'unorderedListItem',
  title: 'Unordered List Item',
  icon,
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bold',
      title: 'Bold Text?',
      description: 'Set this toggle on if you want to display the text in Bold.',
      type: 'boolean',
      }
  ],
}
