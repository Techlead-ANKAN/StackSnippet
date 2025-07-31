"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Color orbs that move around the entire website
    const orbs = [
      { x: 0, y: 0, radius: 400, color: "59, 130, 246", speed: 0.3, angle: 0, offsetY: 0 }, // blue
      { x: 0, y: 0, radius: 350, color: "147, 51, 234", speed: 0.2, angle: Math.PI, offsetY: 200 }, // purple
      { x: 0, y: 0, radius: 300, color: "34, 197, 94", speed: 0.25, angle: Math.PI / 2, offsetY: 400 }, // green
      { x: 0, y: 0, radius: 280, color: "249, 115, 22", speed: 0.35, angle: Math.PI * 1.5, offsetY: 600 }, // orange
      { x: 0, y: 0, radius: 320, color: "236, 72, 153", speed: 0.28, angle: Math.PI * 0.7, offsetY: 800 }, // pink
      { x: 0, y: 0, radius: 360, color: "168, 85, 247", speed: 0.22, angle: Math.PI * 1.2, offsetY: 1000 }, // violet
    ]

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      orbs.forEach((orb, index) => {
        // Move orbs in circular patterns throughout the page
        orb.angle += orb.speed * 0.01
        orb.x = canvas.width / 2 + Math.cos(orb.angle + time) * (canvas.width * 0.4)
        orb.y = orb.offsetY + canvas.height * 0.3 + Math.sin(orb.angle + time) * (canvas.height * 0.2)

        // Create gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `rgba(${orb.color}, 0.08)`)
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.04)`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
