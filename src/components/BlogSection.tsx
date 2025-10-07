'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { LuCalendar, LuUser, LuArrowRight } from 'react-icons/lu'
import { getFeaturedArticles } from '@/lib/blog-data'

function BlogSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              BLOG & ARTICLES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-6 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web development, 
            design, and digital marketing from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getFeaturedArticles().map((article) => (
            <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-dark group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0">
                <div className="w-full">
                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <LuUser className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuCalendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span className="text-gray-400">{article.readTime}</span>
                  </div>
                  
                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
                  >
                    Read More
                    <LuArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            View All Articles
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
