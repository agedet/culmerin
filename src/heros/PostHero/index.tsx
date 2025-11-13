import { formatDateTime } from '../../utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="bg-white flex flex-col gap-8">
      <div className=''>
        <div className="pt-8">
          <h1 className="mb-6 text-2xl md:text-4xl lg:text-4xl">{title}</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          {hasAuthors && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm">Author</p>

                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            </div>
          )}
          {publishedAt && (
            <div className="flex flex-row gap-1">
              {/* <p className="text-sm">Date Published:</p> */}

              <time className='text-sm' dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>
      </div>

      <div className=''>
        <div className="relative w-full aspect-video">
          {heroImage && typeof heroImage !== 'string' && (
            <Media priority imgClassName="rounded-md aspect-video object-cover" resource={heroImage} />
          )}
          <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black-900 to-black-500" />
          
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase">
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <React.Fragment key={index}>
                      {titleToUse}
                      {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                    </React.Fragment>
                  )
                }
                return null
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}