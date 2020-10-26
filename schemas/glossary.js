import { FiBookOpen as icon } from 'react-icons/fi'

export default {
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  icon,
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'string'
    },
    {
      name: 'phonetics',
      title: 'Phonetic Notation',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'noun', value: 'noun' },
          { title: 'verb', value: 'verb' },
          { title: 'adjective', value: 'adjective' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Meaning Definition',
      type: 'text',
    },
  ]
}
