"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Our first date" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Summer vacation" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Anniversary dinner" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Weekend getaway" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Holiday celebration" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Surprise party" },
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">Our Memories</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-3 font-medium text-sm">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={photos[selectedImage].src || "/placeholder.svg"}
              alt={photos[selectedImage].alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
              {photos[selectedImage].alt}
            </div>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-4">
            <button
              className="text-white hover:text-pink-300 transition-colors disabled:opacity-50 disabled:hover:text-white"
              onClick={() => setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : null))}
              disabled={selectedImage === 0}
            >
              ❮
            </button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-4">
            <button
              className="text-white hover:text-pink-300 transition-colors disabled:opacity-50 disabled:hover:text-white"
              onClick={() => setSelectedImage((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : null))}
              disabled={selectedImage === photos.length - 1}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

