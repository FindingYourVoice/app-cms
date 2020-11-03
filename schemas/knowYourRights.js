import { TiWarning as colorIcon } from 'react-icons/ti'


export default {
  name: 'knowYourRights',
  title: 'Know Your Rights',
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
    },
  ]
}