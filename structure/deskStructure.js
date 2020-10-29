import S from '@sanity/desk-tool/structure-builder'
import { VscSettings as settingsIcon } from 'react-icons/vsc'
import { TiWarning as disclaimerIcon } from 'react-icons/ti'

export default () =>
  S.list()
    .title( 'Content' )
    .items( [
      S.listItem()
        .title( 'App Settings' )
        .icon(settingsIcon)
        .child(
          S.editor()
            .schemaType( 'appSettings' )
            .documentId( 'appSettings' )
            .title( 'App Settings' )

      ),
      S.listItem()
        .title( 'Disclaimer' )
        .icon( disclaimerIcon )
        .child(
          S.editor()
            .schemaType( 'disclaimer' )
            .documentId( 'disclaimer' )
            .title('Disclaimer Screen Settings' )

        ),
      ...S.documentTypeListItems().filter( listItem => ![ 'appSettings', 'disclaimer' ].includes( listItem.getId() ) )
    ])