import React from "react"

export default function Sidebar() {
  const link = "text-gray-600 hover:text-black transition"
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/90 backdrop-blur border-r border-gray-200 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Guneet</h1>
        <p className="text-sm text-gray-500 mt-1">CS @ UofA</p>
        <nav className="mt-8 flex flex-col gap-3">
          <a className={link} href="#home">Home</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#about">About</a>
          <a className={link} href="#contact">Contact</a>
        </nav>
      </div>
      <div className="text-xs text-gray-400">© {new Date().getFullYear()} Guneet</div>
    </aside>
  )
}
