"use client"

import { useState, useEffect } from "react"
import { PlusCircle, X, Save } from "lucide-react"

export default function PromiseWall() {
  const [promises, setPromises] = useState<Array<{ id: string; text: string; date: string }>>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newPromise, setNewPromise] = useState("")

  // Load promises from localStorage on component mount
  useEffect(() => {
    const savedPromises = localStorage.getItem("anniversary-promises")
    if (savedPromises) {
      try {
        setPromises(JSON.parse(savedPromises))
      } catch (e) {
        console.error("Error loading promises", e)
      }
    } else {
      // Default promises if none exist
      const defaultPromises = [
        { id: "1", text: "I promise to always keep your emotions, whenever you feel emotional", date: "Jan 1, 2023" },
        { id: "2", text: "I promise to be your biggest supporter in all your dreams", date: "Jan 1, 2023" },
        { id: "3", text: "I promise to keep you mine and be on your side", date: "Jan 1, 2023" },
        { id: "4", text: "I promise to always hold your hand through life's challenges", date: "Jan 1, 2023" },
        { id: "5", text: "I promise to never go to bed angry (improving)", date: "Jan 1, 2023" },
      ]
      setPromises(defaultPromises)
      localStorage.setItem("anniversary-promises", JSON.stringify(defaultPromises))
    }
  }, [])

  // Save promises to localStorage whenever they change
  useEffect(() => {
    if (promises.length > 0) {
      localStorage.setItem("anniversary-promises", JSON.stringify(promises))
    }
  }, [promises])

  const addPromise = () => {
    if (newPromise.trim()) {
      const today = new Date()
      const formattedDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })

      const newPromiseObj = {
        id: Date.now().toString(),
        text: newPromise.trim(),
        date: formattedDate,
      }

      setPromises([...promises, newPromiseObj])
      setNewPromise("")
      setIsAdding(false)
    }
  }

  const removePromise = (id: string) => {
    setPromises(promises.filter((promise) => promise.id !== id))
  }

  const getRandomRotation = (id: string) => {
    // Use the id to generate a consistent but random-looking rotation
    const num = Number.parseInt(id, 10) % 10
    return (num - 5) * 1.5 // Between -7.5 and 7.5 degrees
  }

  const getRandomColor = (id: string) => {
    const colors = ["bg-pink-100", "bg-red-50", "bg-rose-100", "bg-pink-50", "bg-red-100"]
    const num = Number.parseInt(id, 10) % colors.length
    return colors[num]
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">Our Promise Wall</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {promises.map((promise) => (
          <div
            key={promise.id}
            className={`relative w-64 p-5 shadow-md rounded-lg ${getRandomColor(promise.id)} border border-pink-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:z-10`}
            style={{ transform: `rotate(${getRandomRotation(promise.id)}deg)` }}
          >
            <button
              onClick={() => removePromise(promise.id)}
              className="absolute top-2 right-2 text-pink-400 hover:text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-gray-700 font-medium mb-3">{promise.text}</p>
            <p className="text-xs text-right text-gray-500 mt-2">{promise.date}</p>
          </div>
        ))}
      </div>

      {isAdding ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-pink-200">
          <h3 className="text-lg font-medium text-pink-600 mb-3">Add a New Promise</h3>
          <textarea
            value={newPromise}
            onChange={(e) => setNewPromise(e.target.value)}
            placeholder="I promise to..."
            className="w-full p-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 min-h-[100px]"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-1"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
            <button
              onClick={addPromise}
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 flex items-center gap-1"
            >
              <Save className="w-4 h-4" /> Save Promise
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <PlusCircle className="w-5 h-5" /> Add a New Promise
          </button>
        </div>
      )}
    </section>
  )
}

