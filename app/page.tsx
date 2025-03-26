"use client"

import { useState } from "react"
import AnimatedHeart from "../components/animated-heart"
import LoveReasons from "../components/love-reasons"
import MessageBox from "../components/message-box"
import SpecialDates from "../components/special-dates"
import SecretMessages from "../components/secret-messages"
import PromiseWall from "../components/promise-wall"
import LittleThings from "../components/little-things"
import PolaroidGallery from "../components/polaroid-gallery"
import PasswordLock from "../components/password-lock"
import MusicPlaylist from "../components/music-playlist"
import FavoritePics from "../components/favourite-pic"

export default function AnniversaryPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  if (!isUnlocked) {
    return <PasswordLock onUnlock={() => setIsUnlocked(true)} />
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-pink-100 via-red-50 to-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/hearts-pattern.png')] opacity-5 z-0"></div>
      <div className="max-w-4xl w-full mx-auto text-center space-y-16 relative z-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-pink-600 tracking-tight">
            Happy Anniversary Fiker
          </h1>
          <p className="text-lg text-red-400 italic">
            Every moment with you is a gift for me
          </p>
          <div className="pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"></div>
          </div>
        </header>

        <div className="py-8">
          <AnimatedHeart />
        </div>

        <MessageBox />

        <div className="relative py-8">
          <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">
            Our Memories
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>
          <PolaroidGallery />
        </div>

        <MusicPlaylist />

        <SpecialDates />
        <FavoritePics />

        <PromiseWall />

        <LittleThings />

        <SecretMessages />

        <LoveReasons />

        <footer className="pt-16 pb-8 text-pink-500 text-sm">
          <p>With all my love, always and forever ❤️ Mike</p>
        </footer>
      </div>
    </main>
  );
}

