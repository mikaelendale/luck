"use client"
import Image from "next/image"

export default function PolaroidGallery() {
  const memories = [
    {
      title: "Our First Picture",
      description: "under a table 😭😭",
      image: "/first.png",
    },
    {
      title: "Our dirty texts",
      description: "late night talks",
      image: "/texts.png", // Corrected path for public folder
    },
    {
      title: "The first picture ",
      description: "ughh so nostalgic  ",
      image: "/firut.png",
    }, 
  ]

  const getRandomRotation = (index: number) => {
    const rotations = [-6, -3, 0, 3, 6]
    return rotations[index % rotations.length]
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {memories.map((memory, index) => (
        <div
          key={index}
          className="group relative w-64 bg-white p-3 pb-12 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            transform: `rotate(${getRandomRotation(index)}deg)`,
            transformOrigin: "center center",
          }}
        >
          <div className="relative h-56 w-full overflow-hidden bg-gray-100">
            <Image src={memory.image || "/placeholder.svg"} alt={memory.title} fill className="object-cover" />
          </div><br /><br />
          <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
            <h3 className="font-handwriting text-xl text-gray-800">{memory.title}</h3>
            <p className="text-sm text-gray-600">{memory.description}</p>
          </div>

          {/* Tape effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-100/80 rounded-sm rotate-3"></div>
        </div>
      ))}
    </div>
  )
}

