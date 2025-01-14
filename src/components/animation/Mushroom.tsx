'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Mushroom() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const mushroomColor = '#FA4A14'
    let progress = { value: 0 }

    const drawMushroom = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const opacity = progress.value

      ctx.beginPath()
      ctx.moveTo(80, 100)
      ctx.bezierCurveTo(90, 50, 200, 45, 200, 100)
      ctx.bezierCurveTo(190, 120, 90, 120, 80, 100)
      ctx.closePath()
      ctx.fillStyle = mushroomColor
      ctx.globalAlpha = opacity
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(140, 80)
      ctx.bezierCurveTo(135, 20, 160, 200, 160, 300)
      ctx.lineTo(140, 300)
      ctx.bezierCurveTo(140, 20, 110, 110, 130, 100)
      ctx.closePath()
      ctx.fillStyle = mushroomColor
      ctx.globalAlpha = opacity
      ctx.fill()

      ctx.save()
      ctx.translate(70, -30)
      ctx.rotate(20 * (Math.PI / 180))
      ctx.beginPath()
      ctx.moveTo(150, 140)
      ctx.bezierCurveTo(145, 110, 210, 100, 210, 142)
      ctx.bezierCurveTo(195, 145, 150, 150, 150, 140)
      ctx.closePath()
      ctx.fillStyle = mushroomColor
      ctx.globalAlpha = opacity
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(180, 140)
      ctx.bezierCurveTo(185, 90, 185, 200, 180, 250)
      ctx.lineTo(170, 250)
      ctx.bezierCurveTo(165, 190, 170, 190, 175, 140)
      ctx.closePath()
      ctx.fillStyle = mushroomColor
      ctx.globalAlpha = opacity
      ctx.fill()
      ctx.restore()
    }

    gsap.to(progress, {
      value: 1,
      duration: 0.8,
      onUpdate: drawMushroom,
      ease: 'power2.out',
    })

    gsap.to(containerRef.current, {
      rotateY: 360,
      repeat: -1,
      duration: 7,
      ease: 'linear',
      transformOrigin: 'center',
    })
  }, [])

  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  )
}
