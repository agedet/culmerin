'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { LuFilter, LuSearch } from 'react-icons/lu'
import { CollectionArchive } from '@/components/CollectionArchive'
import type { CardPostData } from '@/components/Card'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'

type PostsClientProps = {
  posts: CardPostData[]
}

const POSTS_PER_PAGE = 20

export const PostsClient: React.FC<PostsClientProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    posts.forEach((post) => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach((category) => {
          if (typeof category === 'object' && category !== null && 'title' in category) {
            categorySet.add(category.title)
          }
        })
      }
    })
    return ['All', ...Array.from(categorySet).sort()]
  }, [posts])

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter - check title and meta description
      const matchesSearch =
        searchTerm === '' ||
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.meta?.description?.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory =
        selectedCategory === 'All' ||
        (post.categories &&
          Array.isArray(post.categories) &&
          post.categories.some((category) => {
            if (typeof category === 'object' && category !== null && 'title' in category) {
              return category.title === selectedCategory
            }
            return false
          }))

      return matchesSearch && matchesCategory
    })
  }, [posts, searchTerm, selectedCategory])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <LuFilter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <CollectionArchive posts={paginatedPosts} />
      </section>

      <section className="py-4 bg-gray-50">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className='flex flex-col gap-4 py-8 items-center justify-between sm:flex-row'>
            <div>
              <PageRange
                collection="posts"
                currentPage={currentPage}
                limit={POSTS_PER_PAGE}
                totalDocs={filteredPosts.length}
              />
            </div>
            <div>
              {totalPages > 0 && (
                <Pagination 
                  page={currentPage} 
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

