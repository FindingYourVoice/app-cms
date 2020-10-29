import { FaBook as icon } from 'react-icons/fa'

export default {
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  icon,
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'phonetics',
      title: 'Phonetic Notation',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required()
    },
  ]
}
