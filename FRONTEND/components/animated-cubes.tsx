"use client"

import { useEffect, useRef } from "react"

export default function AnimatedCubes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Cube configuration
    const cubes = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 40 + Math.random() * 80,
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationZ: Math.random() * 360,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotSpeedX: (Math.random() - 0.5) * 2,
      rotSpeedY: (Math.random() - 0.5) * 2,
      rotSpeedZ: (Math.random() - 0.5) * 2,
      opacity: 0.1 + Math.random() * 0.2,
    }))

    let animationId: number

    const drawCube = (cube: any) => {
      ctx.save()
      ctx.translate(cube.x, cube.y)

      // Simple 3D cube representation using 2D transforms
      const size = cube.size
      const perspective = Math.cos((cube.rotationX * Math.PI) / 180) * 0.5 + 0.5

      // Front face
      ctx.fillStyle = `rgba(100, 116, 139, ${cube.opacity * perspective})`
      ctx.fillRect(-size / 2, -size / 2, size, size)

      // Top face (lighter)
      ctx.fillStyle = `rgba(148, 163, 184, ${cube.opacity * perspective * 0.8})`
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(-size / 2 + size * 0.3, -size / 2 - size * 0.3)
      ctx.lineTo(size / 2 + size * 0.3, -size / 2 - size * 0.3)
      ctx.lineTo(size / 2, -size / 2)
      ctx.closePath()
      ctx.fill()

      // Right face (darker)
      ctx.fillStyle = `rgba(71, 85, 105, ${cube.opacity * perspective * 0.6})`
      ctx.beginPath()
      ctx.moveTo(size / 2, -size / 2)
      ctx.lineTo(size / 2 + size * 0.3, -size / 2 - size * 0.3)
      ctx.lineTo(size / 2 + size * 0.3, size / 2 - size * 0.3)
      ctx.lineTo(size / 2, size / 2)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cubes.forEach((cube) => {
        // Update position
        cube.x += cube.speedX
        cube.y += cube.speedY

        // Update rotation
        cube.rotationX += cube.rotSpeedX
        cube.rotationY += cube.rotSpeedY
        cube.rotationZ += cube.rotSpeedZ

        // Wrap around screen
        if (cube.x > canvas.width + cube.size) cube.x = -cube.size
        if (cube.x < -cube.size) cube.x = canvas.width + cube.size
        if (cube.y > canvas.height + cube.size) cube.y = -cube.size
        if (cube.y < -cube.size) cube.y = canvas.height + cube.size

        drawCube(cube)
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
