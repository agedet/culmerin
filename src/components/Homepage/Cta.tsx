import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Cta() {
  return (
    <div>
        {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#000000] text-white">
        <div className="container mx-auto max-w-[95%] lg:max-w-[40%] text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business objectives and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="rounded-[50px] bg-primary font-bold text-[17px] text-white py-8 px-10 hover:bg-secondary hover:text-dark"
              asChild
            >
              <Link href="/#contact">
                Book a Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
