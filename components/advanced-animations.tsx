"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function MatrixRain() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-px h-20 bg-gradient-to-b from-primary to-transparent animate-matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export function TypingAnimation({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span className={`${className} border-r-2 border-primary animate-blink-cursor`}>{displayText}</span>
}

export function HolographicCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`holographic animate-hologram ${className}`}>
      <div className="relative z-10 p-6 glass rounded-lg">{children}</div>
    </div>
  )
}

export function GlitchText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return <span className={`${className} ${isGlitching ? "animate-glitch" : ""}`}>{children}</span>
}

export function CircuitBoard() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <defs>
          <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 20h40M20 0v40M10 10h20v20h-20z"
              stroke="oklch(0.65 0.25 270)"
              strokeWidth="0.5"
              fill="none"
              className="animate-circuit-flow"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" opacity="0.1" />
      </svg>
    </div>
  )
}

export function DataStream({ direction = "horizontal" }: { direction?: "horizontal" | "vertical" }) {
  return (
    <div className={`absolute ${direction === "horizontal" ? "inset-x-0 h-px" : "inset-y-0 w-px"} overflow-hidden`}>
      <div
        className={`${
          direction === "horizontal" ? "w-20 h-full" : "w-full h-20"
        } bg-gradient-to-${direction === "horizontal" ? "r" : "b"} from-transparent via-primary to-transparent animate-data-stream`}
      />
    </div>
  )
}

export function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-30" />
    </div>
  )
}

export function QuantumOrb({ size = "w-16 h-16" }: { size?: string }) {
  return (
    <div className={`${size} relative`}>
      <div className="absolute inset-0 rounded-full gradient-primary animate-morph animate-energy-pulse" />
      <div className="absolute inset-2 rounded-full bg-background/20 animate-quantum-flicker" />
      <div className="absolute inset-4 rounded-full gradient-accent animate-rotate-3d" />
    </div>
  )
}

export function NeuralNetwork() {
  return (
    <div className="neural-network absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 cyber-grid opacity-20" />
    </div>
  )
}
