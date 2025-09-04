import React from "react"

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Hi, I’m Guneet 👋
      </h2>
      <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl">
        I build clean, fast web apps and love shipping ideas. This portfolio
        is a living space for my projects, notes, and collaborations.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="#projects" className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
          View Projects
        </a>
        <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
          Contact Me
        </a>
      </div>
    </section>
  )
}
