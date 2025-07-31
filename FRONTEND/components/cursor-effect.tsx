"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [cursorColor, setCursorColor] = useState("rgba(59, 130, 246, 0.5)") // Default blue
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; size: number; opacity: number; id: number }>>([])
  const [rippleId, setRippleId] = useState(0)

  // Colors to cycle through
  const colors = [
    "rgba(59, 130, 246, 0.5)", // blue
    "rgba(139, 92, 246, 0.5)", // purple
    "rgba(236, 72, 153, 0.5)", // pink
    "rgba(34, 197, 94, 0.5)", // green
    "rgba(249, 115, 22, 0.5)", // orange
  ]

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Change color based on position
      const colorIndex = Math.floor((e.clientX / window.innerWidth) * colors.length)
      setCursorColor(colors[colorIndex])
    }

    const handleClick = (e: MouseEvent) => {
      setClicked(true)
      setTimeout(() => setClicked(false), 300)

      // Create ripple
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        size: 0,
        opacity: 0.8,
        id: rippleId,
      }

      setRipples((prev) => [...prev, newRipple])
      setRippleId((prev) => prev + 1)

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("click", handleClick)
    }
  }, [rippleId, colors])

  // Animate ripples
  useEffect(() => {
    if (ripples.length === 0) return

    const interval = setInterval(() => {
      setRipples((prev) =>
        prev.map((ripple) => ({
          ...ripple,
          size: ripple.size + 10,
          opacity: ripple.opacity - 0.03,
        })),
      )
    }, 20)

    return () => clearInterval(interval)
  }, [ripples])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? "40px" : "20px",
          height: clicked ? "40px" : "20px",
          backgroundColor: cursorColor,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />

      {/* Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            backgroundColor: cursorColor,
            opacity: ripple.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  )
}
