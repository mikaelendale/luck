"use client"

import { useEffect, useRef } from "react"

export default function AnimatedHeart() {
  const heartRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heart = heartRef.current
    const glow = glowRef.current
    if (!heart || !glow) return

    // Add a subtle pulse animation
    let scale = 1
    let growing = false
    let glowOpacity = 0.7
    let glowGrowing = false

    const animate = () => {
      // Heart animation
      if (growing) {
        scale += 0.0015
        if (scale >= 1.08) growing = false
      } else {
        scale -= 0.0015
        if (scale <= 0.95) growing = true
      }

      // Glow animation
      if (glowGrowing) {
        glowOpacity += 0.005
        if (glowOpacity >= 0.8) glowGrowing = false
      } else {
        glowOpacity -= 0.005
        if (glowOpacity <= 0.5) glowGrowing = true
      }

      if (heart) {
        heart.style.transform = `scale(${scale})`
      }

      if (glow) {
        glow.style.opacity = String(glowOpacity)
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative flex justify-center items-center h-72 w-72 mx-auto">
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-red-300 to-pink-300 blur-3xl opacity-70"
      ></div>

      <div className="absolute inset-0 animate-spin-slow opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-400"></div>
        <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-red-300"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pink-300"></div>
        <div className="absolute top-1/4 left-0 w-1 h-1 rounded-full bg-red-400"></div>
      </div>

      <div ref={heartRef} className="relative z-10 transition-transform duration-1000">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 32 32" className="w-full h-full fill-current text-red-500 drop-shadow-lg">
            <path
              d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
            C30,20.335,16,28.261,16,28.261z"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-600 opacity-80 blur-md rounded-full"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-full"></div>
    </div>
  )
}

