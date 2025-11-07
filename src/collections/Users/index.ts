import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['email', 'name', 'createdAt'],
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
        name: 'name',
        type: 'text',
    },
  ],
  timestamps: true,
}