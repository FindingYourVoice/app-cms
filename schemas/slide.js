import { RiSlideshow2Fill as icon } from 'react-icons/ri'

export default {
  name: 'slide',
  title: 'Slide Item',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Regular Title',
      description: 'This field is not mandatory. Sometimes you may have to leave it empty.',
      type: 'string'
    },
    {
      name: 'boldTitle',
      title: 'Emphasized Title',
      description: 'This field is not mandatory. It only applies to some components, such as Basic Rights Slider.',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ]
}