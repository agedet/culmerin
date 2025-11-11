import sharp from 'sharp'
// import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path';
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { getServerSideURL } from './utilities/getURL'
import { Categories } from './collections/Categories';
import { defaultLexical } from './fields/defaultLexical';
import { plugins } from './plugins';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: 'http://localhost:3000',
      collections: ['pages'],
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // If you'd like to use Rich Text, pass your editor here
  // editor: lexicalEditor(),
  editor: defaultLexical,

  // Define and configure your collections in this array
  collections: [Pages, Posts, Users, Media, Categories],
  cors: [getServerSideURL()].filter(Boolean),
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
})