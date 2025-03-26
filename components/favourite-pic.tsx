"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface FavoritePic {
  id: number;
  image: string;
  caption: string;
  reason: string;
}

export default function FavoritePics() {
  const [selectedPic, setSelectedPic] = useState<number | null>(null);

  const favorites: FavoritePic[] = [
    {
      id: 1,
      image: "/firut-mirror.jpg",
      caption: "Ahh just perfect pic for me",
      reason: "The way your stand they way you dress your cute face ughh.",
    },
    {
      id: 2,
      image: "/firut.png",
      caption: "The first pic",
      reason: "This is the best pic ever for me just you are such a perfection",
    },
    {
      id: 3,
      image: "/firut-lip.jpg",
      caption: "Sexy ahh",
      reason: "You are just the perfect girl my lady your lips are kissable.",
    },
    {
      id: 4,
      image: "/firut-hair.jpg",
      caption: "If I dot love this then im not in love",
      reason: "No reason just love it",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">
        My Favorite Pics of You
      </h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 text-pink-200 text-4xl opacity-20">
          ❤️
        </div>
        <div className="absolute -bottom-6 -left-6 text-pink-200 text-4xl opacity-20">
          ❤️
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((pic) => (
            <div
              key={pic.id}
              className="group relative cursor-pointer"
              onClick={() =>
                setSelectedPic(selectedPic === pic.id ? null : pic.id)
              }
            >
              <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={pic.image || "/placeholder.svg"}
                    alt={pic.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg">
                    {pic.caption}
                  </h3>
                  <div className="flex items-center gap-1 text-pink-200 mt-1">
                    <Heart className="w-4 h-4 fill-pink-200" />
                    <span className="text-sm">Tap to see why I love this</span>
                  </div>
                </div>
              </div>

              {selectedPic === pic.id && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-5 flex flex-col items-center justify-center text-center z-10 animate-fade-in">
                  <Heart className="w-8 h-8 text-red-500 fill-red-500 mb-3" />
                  <p className="text-gray-700 font-medium italic">
                    {pic.reason}
                  </p>
                  <button
                    className="mt-4 text-sm text-pink-600 hover:text-pink-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPic(null);
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
