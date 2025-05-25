"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resize)
    resize()

    // Colors based on theme
    const isDark = theme === "dark"

    // Gradient colors
    const colors = isDark ? ["#0f172a", "#1e293b", "#334155"] : ["#f8fafc", "#f1f5f9", "#e2e8f0"]

    // Create gradient points
    const points: { x: number; y: number; vx: number; vy: number; radius: number; color: string | undefined }[] = []
    for (let i = 0; i < 5; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 300 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Move points
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1
      })

      // Create radial gradients
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, `${point.color}40`) // 25% opacity
        gradient.addColorStop(1, `${point.color}00`) // 0% opacity

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}
