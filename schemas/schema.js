// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import appSettings from './appSettings'

import introSlides from './introSlides'
import knowYourRights from './knowYourRights'
import ohs from './ohs'
import covidInfo from './covidInfo'
import typesOfHazards from './typesOfHazards'
import basicRights from './basicRights'
import wcb from './wcb'
import employmentStandards from './employmentStandards'
import humanRights from './humanRights'
import resource from './resource'
import glossary from './glossary'
import disclaimer from './disclaimer'

import partner from './partner'
import externalResource from './externalResource'
import unorderedListItem from './unorderedListItem'
import slide from './slide'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    glossary,
    resource,
    disclaimer,
    knowYourRights,
    ohs,
    covidInfo,
    typesOfHazards,
    basicRights,
    wcb,
    employmentStandards,
    humanRights,
    introSlides,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    partner,
    externalResource,
    unorderedListItem,
    slide
  ])
})
