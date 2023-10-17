import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {netlifyTool} from 'sanity-plugin-netlify'

export default defineConfig({
  name: 'default',
  title: 'rge',

  projectId: 'jnriarh8',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), netlifyTool()],

  schema: {
    types: schemaTypes,
  },
})
