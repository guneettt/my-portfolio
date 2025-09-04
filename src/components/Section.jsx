import React from "react"

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 border-t border-gray-200">
      <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      <div className="mt-6">
        {children}
      </div>
    </section>
  )
}
