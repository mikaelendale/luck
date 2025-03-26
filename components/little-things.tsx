"use client"
import { Heart } from "lucide-react"

export default function LittleThings() {
  const littleThings = [
    "The way you treat me as me",
    "How genius you are ",
    "Your excitement when you talk about things you love",
    "The giggles you give me when i say smth funny",
    "How you always make sure my emotions are valid",
    "The way you are always excited to talk to me after a long day",
    "How you always make me feel safe",
    "The way you always make me feel loved",
    "Your dirty text messages in the middle of the night",
    "The way you always make me feel like I'm the only person in the room",
    "How you remember my birthdays",
    "The way you rule, think and act",
    "How you always know when I am off without me saying anything",
    "Your adorable concentration face when you're focused",
    "The way you always check if I'm feeling loved",
  ]

  const getRandomColor = (index: number) => {
    const colors = [
      { bg: "bg-yellow-100", border: "border-yellow-300", shadow: "shadow-yellow-200/50", icon: "text-yellow-500" },
      { bg: "bg-pink-100", border: "border-pink-300", shadow: "shadow-pink-200/50", icon: "text-pink-500" },
      { bg: "bg-blue-100", border: "border-blue-300", shadow: "shadow-blue-200/50", icon: "text-blue-500" },
      { bg: "bg-green-100", border: "border-green-300", shadow: "shadow-green-200/50", icon: "text-green-500" },
      { bg: "bg-purple-100", border: "border-purple-300", shadow: "shadow-purple-200/50", icon: "text-purple-500" },
      { bg: "bg-orange-100", border: "border-orange-300", shadow: "shadow-orange-200/50", icon: "text-orange-500" },
    ]
    return colors[index % colors.length]
  }

  const getRandomRotation = (index: number) => {
    const rotations = [-3, -2, -1, 0, 1, 2, 3]
    return rotations[index % rotations.length]
  }

  const getRandomIcon = (index: number) => {
    const icons = ["✨", "💫", "💕", "✏️", "📌", "🌟", "💭", "💝", "🎀", "💌", "🌈", "🍀"]
    return icons[index % icons.length]
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">Little Things You Do That I Love</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 text-pink-200 text-5xl opacity-20 rotate-12">💕</div>
        <div className="absolute -bottom-10 -right-10 text-red-200 text-5xl opacity-20 -rotate-12">💘</div>

        <div className="flex flex-wrap justify-center gap-6 relative">
          {littleThings.map((thing, index) => {
            const colors = getRandomColor(index)
            const rotation = getRandomRotation(index)
            const icon = getRandomIcon(index)

            return (
              <div key={index} className="group w-64 h-64 relative">
                {/* Pin */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full shadow-md z-20 group-hover:scale-110 transition-transform duration-300"></div>

                {/* Note with hover effect */}
                <div
                  className={`absolute inset-0 ${colors.bg} ${colors.border} border ${colors.shadow} shadow-lg rounded-lg p-6 transform transition-all duration-500 ease-in-out`}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "center top",
                  }}
                >
                  {/* Front content (visible by default) */}
                  <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col backface-hidden group-hover:opacity-0 transition-opacity duration-300">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="flex-grow flex items-center justify-center">
                      <p className="text-center text-gray-700 font-handwriting text-xl">Hover to reveal</p>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Heart className={`w-5 h-5 ${colors.icon} opacity-50`} />
                    </div>
                  </div>
                </div>

                {/* Flipped content (appears on hover) */}
                <div
                  className={`absolute inset-0 ${colors.bg} ${colors.border} border ${colors.shadow} shadow-lg rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-105 flex flex-col`}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "center top",
                  }}
                >
                  <div className="flex-grow flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-white/50 blur-sm rounded-lg"></div>
                      <p className="relative text-center text-gray-700 font-handwriting text-xl leading-relaxed">
                        {thing}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Heart className={`w-5 h-5 ${colors.icon} animate-pulse`} fill="currentColor" />
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-100/80 rounded-sm rotate-3 z-10"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

