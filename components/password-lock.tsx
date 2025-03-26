"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Heart } from "lucide-react"

interface PasswordLockProps {
  onUnlock: () => void
}

export default function PasswordLock({ onUnlock }: PasswordLockProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const handleInput = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.charAt(value.length - 1)
    }

    if (value && /^[0-9]$/.test(value)) {
      const newPassword = password.split("")
      newPassword[index] = value
      setPassword(newPassword.join(""))

      // Move to next input
      if (index < 3 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && index > 0 && !password[index]) {
      inputRefs[index - 1].current?.focus()
    }
  }

  useEffect(() => {
    if (password.length === 4) {
      if (password === "0719") {
        onUnlock()
      } else {
        setError(true)
        setShake(true)
        setTimeout(() => setShake(false), 500)
        setTimeout(() => {
          setPassword("")
          setError(false)
          inputRefs[0].current?.focus()
        }, 1000)
      }
    }
  }, [password, onUnlock])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-white z-50">
      <div className={`bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 ${shake ? "animate-shake" : ""}`}>
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Heart className="h-16 w-16 text-pink-500 animate-pulse" />
          </div>
          <h2 className="text-2xl font-serif text-pink-600 mb-2">Our Special Place</h2>
          <p className="text-gray-600">Enter the passcode to unlock our memories</p>
        </div>

        <div className="flex justify-center gap-4 my-8">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={password[index] || ""}
              onChange={(e) => handleInput(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-14 h-14 text-center text-2xl font-bold rounded-lg border-2 ${
                error ? "border-red-500 text-red-500" : "border-pink-300 text-gray-700"
              } focus:border-pink-500 focus:outline-none`}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-center">Incorrect passcode. Please try again.</p>}

        <div className="text-center text-gray-500 text-sm mt-6">
          <p>Hint: Our both B-day (DD-DD)</p>
        </div>
      </div>
    </div>
  )
}

