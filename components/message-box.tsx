export default function MessageBox() {
  return (
    <div className="max-w-xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white via-pink-50 to-red-50 shadow-lg border border-pink-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-red-200 opacity-30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-200 to-red-200 opacity-30 rounded-tr-full"></div>

      <h2 className="text-2xl font-serif text-pink-700 mb-4 relative z-10">My Love,</h2>
      <p className="text-gray-700 leading-relaxed italic relative z-10">
        It's been a year wow! I can hardly believe it. This is really happening, and I am so happy and excited for this day. I hope you are too, baby. I truly cherish everything we’ve shared our first kiss, the first time we met, even the very first text I sent you. Every moment with you is unforgettable. Every time I see you, my heart races so fast, as if it recognizes you before I do. You are a gift from God, and I feel so blessed to have you. If I ever needed proof that God loves me, I see it in you because He gave me you. Let’s continue this beautiful journey together, my love. I hope you like this. ❤️
      </p>
      <div className="mt-6 text-right text-pink-700 font-serif relative z-10">Forever yours ❤️</div>

      {/* Small decorative hearts */}
      <div className="absolute top-4 left-4 text-pink-200 text-xs">❤️</div>
      <div className="absolute bottom-4 right-4 text-pink-200 text-xs">❤️</div>
    </div>
  )
}

