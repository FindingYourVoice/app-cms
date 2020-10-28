import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title( 'Content' )
    .items( [
      S.listItem()
        .title( 'App Settings' )
        .child(
          S.editor()
            .schemaType( 'appSettings' )
            .documentId( 'appSettings' )
        ),
      ...S.documentTypeListItems().filter( listItem => ![ 'appSettings' ].includes( listItem.getId() ) )
    ])