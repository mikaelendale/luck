"use client"

import { useState } from "react"

export default function SecretMessages() {
  const [revealedMessages, setRevealedMessages] = useState<number[]>([])

  const messages = [
    "I always smile when I see your name pop up on my phone",
    "I always stair at you even if you didn't see me especially (🍑)",
    "I am so proud like extra sure of you even if i let the guys ur number",
    "I love watching your flashed",
    "You make my dreams come true",
    "You are one motivation for me to live",
    "So valuable to me i would risk every thing to keep you safe mommy",
    "I love when you call me daddy",
  ];

  const toggleReveal = (index: number) => {
    if (revealedMessages.includes(index)) {
      setRevealedMessages(revealedMessages.filter((i) => i !== index))
    } else {
      setRevealedMessages([...revealedMessages, index])
    }
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">Secret Messages</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <p className="text-center text-gray-600 mb-6">Click each envelope to reveal a secret message</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-500 transform ${
              revealedMessages.includes(index) ? "scale-105" : "hover:scale-105"
            }`}
            onClick={() => toggleReveal(index)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg shadow-md border border-pink-200 p-6 flex items-center justify-center transition-all duration-500 ${
                revealedMessages.includes(index) ? "opacity-0 rotate-y-180 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">✉️</div>
                <p className="text-pink-600 font-medium">Secret #{index + 1}</p>
                <p className="text-xs text-gray-500 mt-2">Click to reveal</p>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-red-100 to-pink-100 rounded-lg shadow-md border border-pink-200 p-6 min-h-[180px] flex items-center justify-center transition-all duration-500 ${
                revealedMessages.includes(index) ? "opacity-100" : "opacity-0 rotate-y-180 pointer-events-none"
              }`}
            >
              <p className="text-gray-700 italic text-center">{message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

