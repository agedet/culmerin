'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  LuWebhook,  
  LuActivity, 
  LuSearch, 
  LuSmartphone, 
  LuPalette,
  LuCircleCheck,
  LuArrowRight,
  LuUsers,
  LuTrendingUp,
  LuZap,
  LuTarget,
  LuGlobe
} from 'react-icons/lu'

const services = [
  {
    id: 1,
    icon: <LuWebhook className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: [
      'Responsive Design',
      'Fast Loading Speed',
      'SEO Optimized',
      'Cross-Browser Compatibility',
      'Mobile-First Approach',
      'Content Management System'
    ],
    benefits: [
      'Increase online visibility and brand presence',
      'Generate more qualified leads and conversions',
      'Improve user engagement and retention',
      'Reduce bounce rate and increase time on site',
      'Build trust and credibility with professional design',
      'Scale your business with scalable web solutions'
    ],
    process: [
      'Discovery & Planning',
      'Design & Prototyping',
      'Development & Testing',
      'Launch & Optimization',
      'Maintenance & Support'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    image: '/371shots_so.png',
    price: 'Starting from $2,500',
    timeline: '4-8 weeks'
  },
  {
    id: 2,
    icon: <LuSmartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Development',
      'Offline Functionality',
      'Push Notifications',
      'App Store Optimization',
      'Real-time Synchronization'
    ],
    benefits: [
      'Reach customers on their preferred devices',
      'Increase customer engagement and loyalty',
      'Generate new revenue streams through mobile commerce',
      'Improve customer service with mobile support',
      'Gain competitive advantage in mobile market',
      'Collect valuable user data and analytics'
    ],
    process: [
      'Requirements Analysis',
      'UI/UX Design',
      'Development & Testing',
      'App Store Submission',
      'Launch & Marketing Support'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    image: '/jobshots_so.png',
    price: 'Starting from $5,000',
    timeline: '8-16 weeks'
  },
  {
    id: 3,
    icon: <LuPalette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Design Systems',
      'Accessibility Compliance'
    ],
    benefits: [
      'Increase user satisfaction and engagement',
      'Improve conversion rates and sales',
      'Reduce development costs and time',
      'Enhance brand recognition and loyalty',
      'Minimize user errors and support requests',
      'Create competitive advantage through superior UX'
    ],
    process: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Visual Design',
      'Prototyping & Testing',
      'Design Handoff'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Zeplin'],
    image: '/371shots_so.png',
    price: 'Starting from $1,500',
    timeline: '2-6 weeks'
  },
  {
    id: 4,
    icon: <LuActivity className="w-8 h-8" />,
    title: 'Branding & Identity',
    description: 'Complete brand identity solutions that establish a strong, memorable, and consistent brand presence across all touchpoints.',
    features: [
      'Logo Design & Brand Guidelines',
      'Color Palette & Typography',
      'Business Card & Stationery',
      'Social Media Templates',
      'Brand Voice & Messaging',
      'Brand Strategy & Positioning'
    ],
    benefits: [
      'Build strong brand recognition and recall',
      'Differentiate from competitors',
      'Increase customer trust and loyalty',
      'Command premium pricing',
      'Attract top talent and partners',
      'Create consistent brand experience'
    ],
    process: [
      'Brand Discovery',
      'Strategy Development',
      'Visual Identity Creation',
      'Brand Guidelines',
      'Implementation Support',
      'Brand Management'
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Brand Guidelines'],
    image: '/jobshots_so.png',
    price: 'Starting from $1,000',
    timeline: '3-6 weeks'
  },
  {
    id: 5,
    icon: <LuSearch className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies that improve your website\'s visibility, rankings, and organic traffic growth.',
    features: [
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Content Marketing',
      'Link Building',
      'Local SEO & Google My Business'
    ],
    benefits: [
      'Increase organic traffic and visibility',
      'Generate more qualified leads',
      'Improve search engine rankings',
      'Build authority and credibility',
      'Reduce cost per acquisition',
      'Long-term sustainable growth'
    ],
    process: [
      'SEO Audit & Analysis',
      'Keyword Research',
      'Technical Optimization',
      'Content Strategy',
      'Link Building',
      'Monitoring & Reporting'
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
    image: '/371shots_so.png',
    price: 'Starting from $800/month',
    timeline: 'Ongoing'
  },
  {
    id: 6,
    icon: <LuUsers className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive traffic, engagement, and conversions across multiple channels.',
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click (PPC)',
      'Marketing Automation',
      'Analytics & Reporting'
    ],
    benefits: [
      'Increase brand awareness and reach',
      'Generate more leads and sales',
      'Improve customer engagement',
      'Build email subscriber base',
      'Increase social media following',
      'Measure and optimize ROI'
    ],
    process: [
      'Strategy Development',
      'Campaign Creation',
      'Content Production',
      'Channel Management',
      'Performance Monitoring',
      'Optimization & Scaling'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Hootsuite'],
    image: '/jobshots_so.png',
    price: 'Starting from $1,200/month',
    timeline: 'Ongoing'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and current challenges to develop a tailored strategy.'
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed wireframes, prototypes, and project plans to ensure every detail is considered.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using cutting-edge technologies while maintaining the highest quality standards.'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'We launch your project and continuously monitor performance to ensure optimal results and user satisfaction.'
  }
]

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary text-white py-20">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive digital solutions designed to help your business grow, 
              compete, and succeed in the digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-primary hover:bg-white hover:bg-gray-100"
                asChild
              >
                <Link href="#contact">
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help Your Business Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to address specific business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <LuCircleCheck className="w-5 h-5 text-primary" />
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          <LuCircleCheck className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <LuTrendingUp className="w-5 h-5 text-primary" />
                      Business Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <LuTarget className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <LuZap className="w-5 h-5 text-primary" />
                      Our Process
                    </h3>
                    <div className="space-y-2">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-600">
                          <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <LuGlobe className="w-5 h-5 text-primary" />
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Pricing</h4>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                        <p className="text-lg text-gray-600">{service.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      asChild
                    >
                      <Link href="#contact">
                        Get Started
                        <LuArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business objectives and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-dark hover:bg-secondary"
              asChild
            >
              <Link href="/#contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-dark hover:bg-secondary"
              asChild
            >
              <Link href="/#contact">
                View Our Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
