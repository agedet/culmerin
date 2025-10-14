'use client'

import React, { useState } from 'react'
import { LuShare2, LuCopy, LuCheck } from 'react-icons/lu'

interface ShareButtonProps {
  title: string
  url: string
  description?: string
}

export default function ShareButton({ title, url, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url
  const shareTitle = title
  const shareDescription = description || ''

  const shareOptions = [
    {
      name: 'Twitter',
      icon: '𝕏',
      color: 'hover:bg-black hover:text-white',
      action: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
        window.open(twitterUrl, '_blank', 'width=600,height=400')
        setIsOpen(false)
      }
    },
    {
      name: 'Facebook',
      icon: 'f',
      color: 'hover:bg-blue-600 hover:text-white',
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        window.open(facebookUrl, '_blank', 'width=600,height=400')
        setIsOpen(false)
      }
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      color: 'hover:bg-blue-700 hover:text-white',
      action: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareDescription)}`
        window.open(linkedinUrl, '_blank', 'width=600,height=400')
        setIsOpen(false)
      }
    },
    {
      name: 'Copy Link',
      icon: copied ? <LuCheck className="w-4 h-4" /> : <LuCopy className="w-4 h-4" />,
      color: 'hover:bg-gray-600 hover:text-white',
      action: async () => {
        try {
          await navigator.clipboard.writeText(shareUrl)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
          setIsOpen(false)
        } catch (err) {
          console.error('Failed to copy: ', err)
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = shareUrl
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          try {
            document.execCommand('copy')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          } catch (fallbackErr) {
            console.error('Fallback copy failed: ', fallbackErr)
          }
          document.body.removeChild(textArea)
          setIsOpen(false)
        }
      }
    }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <LuShare2 className="w-4 h-4" />
        <span>Share</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share Menu */}
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 min-w-[200px]">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Share this article</h3>
            </div>
            
            <div className="py-1">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors duration-200 ${option.color}`}
                >
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {option.icon}
                  </span>
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
