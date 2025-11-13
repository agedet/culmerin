'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
  onPageChange?: (page: number) => void
}> = (props) => {
  const router = useRouter()

  const { className, page, totalPages, onPageChange } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const handlePageChange = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage)
    } else {
      router.push(`/posts/page/${newPage}`)
    }
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5 // Maximum number of page buttons to show

    if (totalPages <= maxVisible) {
      // Show all pages if total pages is less than maxVisible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show pages with ellipsis
      if (page <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      } else if (page >= totalPages - 2) {
        // Near the end
        pages.push(1)
        pages.push('ellipsis')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // In the middle
        pages.push(1)
        pages.push('ellipsis')
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className={cn('my-1', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              isActive={!hasPrevPage}
              onClick={() => hasPrevPage && handlePageChange(page - 1)}
            />
          </PaginationItem>

          {pageNumbers.map((pageNum, index) => {
            if (pageNum === 'ellipsis') {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }

            const pageNumber = pageNum as number
            const isActive = pageNumber === page

            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={isActive}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            <PaginationNext
              isActive={!hasNextPage}
              onClick={() => hasNextPage && handlePageChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}