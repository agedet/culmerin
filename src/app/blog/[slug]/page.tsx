'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { LuCalendar, LuUser, LuArrowLeft, LuArrowRight, LuClock, LuShare2 } from 'react-icons/lu'
import { getArticleBySlug, blogArticles } from '@/lib/blog-data'

interface BlogArticlePageProps {
  params: {
    slug: string
  }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  // Get next and previous articles
  const currentIndex = blogArticles.findIndex(a => a.id === article.id)
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <LuArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </nav>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <LuUser className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuCalendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShare2 className="w-4 h-4" />
                <span>Share</span>
              </div>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Article Excerpt */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(/\n/g, '<br />').replace(/###/g, '<h3>').replace(/##/g, '<h2>').replace(/#/g, '<h1>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded">$1</code>')
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            {relatedArticle.category}
                          </span>
                          <span className="text-gray-500 text-xs">{relatedArticle.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Previous Article */}
              {prevArticle ? (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <LuArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform duration-200" />
                  <div>
                    <p className="text-sm text-gray-500">Previous Article</p>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {/* Next Article */}
              {nextArticle ? (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Next Article</p>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                      {nextArticle.title}
                    </p>
                  </div>
                  <LuArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to get more insights and articles delivered to your inbox
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
