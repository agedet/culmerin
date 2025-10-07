'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { LuMessageCircle, LuLinkedin, LuInstagram, LuTwitter, LuFacebook, LuArrowRight, LuPhone, LuMail } from 'react-icons/lu'

const services = [
  { name: 'Web Development', href: '#services' },
  { name: 'Mobile App Development', href: '#services' },
  { name: 'UI/UX Design', href: '#services' },
  { name: 'Branding', href: '#services' },
  { name: 'SEO Optimization', href: '#services' },
  { name: 'Consultation', href: '#contact' }
]

const blogArticles = [
  { 
    title: 'The Future of Web Development', 
    href: '/blog', 
    date: 'Dec 15, 2024',
    excerpt: 'Exploring the latest trends in web development...'
  },
  { 
    title: 'Mobile-First Design Principles', 
    href: '/blog', 
    date: 'Dec 10, 2024',
    excerpt: 'Why mobile-first approach matters for your business...'
  },
  { 
    title: 'SEO Best Practices for 2024', 
    href: '/blog', 
    date: 'Dec 5, 2024',
    excerpt: 'Essential SEO strategies to boost your online presence...'
  }
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: LuFacebook },
  { name: 'Instagram', href: '#', icon: LuInstagram },
  { name: 'Twitter', href: '#', icon: LuTwitter },
  { name: 'LinkedIn', href: '#', icon: LuLinkedin },
  { name: 'WhatsApp', href: 'https://wa.me/message/CMEEDQ4PSHVTG1', icon: LuMessageCircle }
]

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <Image 
                  src='/culmerinlogoc.png'
                  alt='Culmerin Technologies Logo'
                  width={200}
                  height={60}
                  className='w-[180px] h-auto'
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-6 mb-6">
              Culmerin Technologies is a leading software development agency specializing in web development, mobile apps, and digital solutions that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LuPhone className="w-4 h-4 text-primary" />
                <span className="text-sm">+234 80 8174 4745</span>
              </div>
              <div className="flex items-center gap-3">
                <LuMail className="w-4 h-4 text-primary" />
                <span className="text-sm">culmerin@gmail.com</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <LuMapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">England, Uk</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <LuArrowRight className="w-3 h-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Articles */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Latest Articles</h3>
            <div className="space-y-4">
              {blogArticles.map((article, index) => (
                <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                  <Link 
                    href={article.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    <h4 className="text-sm font-medium mb-1 line-clamp-2">{article.title}</h4>
                    <p className="text-xs text-gray-400 mb-1">{article.date}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{article.excerpt}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Culmerin Technologies. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            
            <div className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary transition-colors duration-200 mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer