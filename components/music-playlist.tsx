"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Pause, Heart, Music } from "lucide-react";

interface Song {
  id: number;
  title: string;
  artist: string;
  memory: string;
}

export default function MusicPlaylist() {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [lovedSongs, setLovedSongs] = useState<number[]>([]);

  const togglePlay = (id: number) => {
    setCurrentSong(currentSong === id ? null : id);
  };

  const toggleLove = (id: number) => {
    setLovedSongs(
      lovedSongs.includes(id)
        ? lovedSongs.filter((songId) => songId !== id)
        : [...lovedSongs, id]
    );
  };

  const songs: Song[] = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      memory: "The song that always define you ml just perfect",
    },
    {
      id: 2,
      title: "All of Me",
      artist: "John Legend",
      memory: "The song I found while i was creating the playlist lovely",
    },
    {
      id: 3,
      title: "Yamelalsegnal",
      artist: "Henok Abebe",
      memory: "The song that reminds me of our first kiss",
    },
    {
      id: 4,
      title: "Just the way you are",
      artist: "Bruno mars",
      memory: "The song that reminds me of you and your texts your appearance",
    },
    {
      id: 5,
      title: "Die for you",
      artist: "The weekend and Ariana Grande",
      memory: "The song that feels like I am with you like our loved artists",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">
        Songs That Remind Me of You
      </h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-pink-100">
        <div className="p-6 bg-gradient-to-r from-pink-50 to-red-50">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-5 h-5 text-pink-500" />
            <h3 className="text-xl font-medium text-gray-800">Our Playlist</h3>
          </div>
          <p className="text-gray-600 italic text-sm">
            These songs hold special memories of our time together. Each one
            takes me back to a moment we shared.
          </p>
        </div>

        <div className="divide-y divide-pink-100">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`flex items-center p-4 hover:bg-pink-50 transition-colors ${
                currentSong === song.id ? "bg-pink-50" : ""
              }`}
            >
              <div className="flex-shrink-0 mr-4 relative">
                <button
                  onClick={() => togglePlay(song.id)}
                  className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-md transition-opacity ${
                    currentSong === song.id
                      ? "opacity-100"
                      : "opacity-0 hover:opacity-100"
                  }`}
                >
                  {currentSong === song.id ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white" />
                  )}
                </button>
              </div>

              <div className="flex-grow min-w-0">
                <h4 className="font-medium text-gray-800 truncate">
                  {song.title}
                </h4>
                <p className="text-gray-500 text-sm">{song.artist}</p>
                <p className="text-pink-600 text-xs mt-1 italic">
                  {song.memory}
                </p>
              </div>

              <div className="flex items-center gap-3 ml-4">
                <button
                  onClick={() => toggleLove(song.id)}
                  className="focus:outline-none"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      lovedSongs.includes(song.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 text-center text-sm text-gray-600">
          <p>Check our playlist lovely</p>
        </div>
      </div>
    </section>
  );
}
