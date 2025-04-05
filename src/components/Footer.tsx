'use client'

import React from 'react'

function Footer() {
  return (
    <section className="bg-dark flex justify-center items-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[25vh]">
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://culmerin.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          Culmerin Technologies
        </a>
      </footer>
    </section>
  )
}

export default Footer