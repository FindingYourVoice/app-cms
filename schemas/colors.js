import { RiPaletteLine as icon } from 'react-icons/ri'

export default {
  name: 'colors',
  title: 'Colors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Color Name',
      type: 'string'
    },
    {
      name: 'code',
      title: 'Color Code',
      type: 'color'
    }
  ]
}
