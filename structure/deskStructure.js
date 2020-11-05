import S from '@sanity/desk-tool/structure-builder'
import { VscSettings as settingsIcon } from 'react-icons/vsc'
import { TiWarning as disclaimerIcon } from 'react-icons/ti'
import { GoMegaphone as kyrIcon } from 'react-icons/go'
import { RiHandHeartFill as ohsIcon } from 'react-icons/ri'
import { AiOutlineFieldTime as esIcon } from 'react-icons/ai'
import { GoLaw as hrIcon } from 'react-icons/go'
import { RiVirusFill as covidIcon } from 'react-icons/ri'
import { RiSlideshow2Fill as slidesIcon } from 'react-icons/ri'
import { GiFalling as hazardsIcon } from 'react-icons/gi'
import { GoChecklist as basicRightsIcon } from 'react-icons/go'
import { FaUserInjured as wcbIcon } from 'react-icons/fa'

export default () =>
  S.list()
    .title( 'Content' )
    .items( [
      S.listItem()
        .title( 'Intro Slides' )
        .icon( slidesIcon )
        .child(
          S.editor()
            .schemaType('introSlides')
            .documentId( 'introSlides' )
            .title( 'Intro Slides Settings' )
        ),
      S.divider(),
      S.listItem()
        .title( 'Know Your Rights' )
        .icon( kyrIcon )
        .child(
          S.editor()
            .schemaType( 'knowYourRights' )
            .documentId( 'knowYourRights' )
            .title( 'Know Your Rights Screen Settings' )
      ),
      S.divider(),
      S.listItem()
        .title( 'Occupational Health & Safety' )
        .icon( ohsIcon )
        .child(
          S.editor()
            .schemaType( 'ohs' )
            .documentId( 'ohs' )
            .title( 'OHS Screen Settings' )
      ),
      S.listItem()
        .title( 'Employment Standards' )
        .icon( esIcon )
        .child(
          S.editor()
            .schemaType( 'employmentStandards' )
            .documentId( 'employmentStandards' )
            .title( 'Employment Standards Screen Settings' )
        ),
      S.listItem()
        .title( 'Human Rights' )
        .icon( hrIcon )
        .child(
          S.editor()
            .schemaType( 'humanRights' )
            .documentId( 'humanRights' )
            .title( 'Human Rights Screen Settings' )
        ),
      S.divider(),
      S.listItem()
        .title( 'Covid Information' )
        .icon( covidIcon )
        .child(
          S.editor()
            .schemaType( 'covidInfo' )
            .documentId( 'covidInfo' )
            .title( 'Covid Information Screen Settings' )
      ),
      S.listItem()
        .title( 'Types of Hazards' )
        .icon( hazardsIcon )
        .child(
          S.editor()
            .schemaType( 'typesOfHazards' )
            .documentId( 'typesOfHazards' )
            .title( 'Types of Hazards Screen Settings' )
      ),
      S.listItem()
        .title( 'Basic Rights' )
        .icon( basicRightsIcon )
        .child(
          S.editor()
            .schemaType( 'basicRights' )
            .documentId( 'basicRights' )
            .title( 'Basic Rights Screen Settings' )
      ),
      S.listItem()
        .title( 'Workers Compensation Board' )
        .icon( wcbIcon )
        .child(
          S.editor()
            .schemaType( 'wcb' )
            .documentId( 'wcb' )
            .title( 'Workers Compensation Board Screen Settings' )
      ),
      S.divider(),
      ...S.documentTypeListItems().filter( listItem => [ 'resource','glossary'  ].includes( listItem.getId() ) ),
      S.divider(),
      S.listItem()
        .title( 'Disclaimer' )
        .icon( disclaimerIcon )
        .child(
          S.editor()
            .schemaType( 'disclaimer' )
            .documentId( 'disclaimer' )
            .title( 'Disclaimer Screen Settings' )
      )

    ]
  )