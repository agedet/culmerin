import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
// import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

// export const dynamic = 'force-static'
// export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    // overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div>
      <PageClient />
      <section className="bg-gradient-to-r from-primary to-primary text-white py-14">
        <div className='container mb-16'>
          <div className="prose dark:prose-invert max-w-none text-center">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6'>Latest Articles</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Insights, tips, and trends in web development, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div> */}

      <section className='py-16'>
        <CollectionArchive posts={posts.docs} />
      </section>

      <section className='py-12 bg-gray-50'>
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}