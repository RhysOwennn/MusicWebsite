import {SanityCodegenConfig} from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: '../web/app/types/sanity-schema.ts',
}

export default config
