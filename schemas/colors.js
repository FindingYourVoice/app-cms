import { RiPaletteLine as icon } from 'react-icons/ri'

export default {
  name: 'colors',
  title: 'Colors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'word',
      title: 'Color Name',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Color Definition',
      type: 'color'
    }
  ]
}
