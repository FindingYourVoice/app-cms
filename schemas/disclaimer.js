import { TiWarning as colorIcon } from 'react-icons/ti'


export default {
  name: 'disclaimer',
  title: 'Disclaimer',
  type: 'document',
  __experimental_actions: [
    //'create',
    'update',
    //'delete',
    'publish'
  ],
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'General Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'availableLanguagesLabel',
      type: 'string',
      title: 'Available Languages Label',
      validation: Rule => Rule.required()
    },
    {
      name: 'fundingLabel',
      type: 'string',
      title: 'Funding Label',
      validation: Rule => Rule.required()
    },
    {
      name: 'fundingPartner',
      type: 'partner',
      title: 'Funding Partner',
      options: { collapsible: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'partnershipsLabel',
      type: 'string',
      title: 'Partnerships Label',
      validation: Rule => Rule.required()
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{type: 'partner'}]
    }

  ]
}