"use client"

import { useEffect, useRef } from "react"

export default function LoveReasons() {
  const reasons = [
    "How lovely you are",
    "Your kindness and compassion toward everyone you meet",
    "How you always know exactly what to say to make me feel better",
    "Your incredible strength wifey material", 
    "Your passion and dedication to everything you do",
    "The way you understand me better than anyone else",
    "How you keep me up to be a better person every day",
    "The little moments of joy we create together like the meetups we had",
    "Your beautiful heart that loves so deeply and real love you give me",
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">What is the reason I love you more than any thing</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <ReasonItem key={index} text={reason} index={index} />
        ))}
      </div>
    </section>
  )
}

function ReasonItem({ text, index }: { text: string; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0", "translate-y-4")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className="p-5 bg-gradient-to-br from-white to-pink-50 rounded-lg shadow-md border border-pink-100 opacity-0 translate-y-4 transition-all duration-700 ease-out relative overflow-hidden group"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-pink-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="absolute top-2 left-2 text-pink-300 opacity-50">❤️</div>
      <p className="text-gray-700 relative z-10">{text}</p>
    </div>
  )
}

