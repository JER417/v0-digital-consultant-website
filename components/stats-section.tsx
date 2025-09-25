"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, Users, Zap, Award } from "lucide-react"
import { GlitchText, CircuitBoard, QuantumOrb, NeuralNetwork, MatrixRain, HolographicCard } from "./advanced-animations"

const stats = [
  {
    icon: TrendingUp,
    value: "$2.5M+",
    label: "Generados para clientes",
    description: "En ingresos adicionales este año",
  },
  {
    icon: Users,
    value: "127",
    label: "Empresas transformadas",
    description: "Con resultados comprobados",
  },
  {
    icon: Zap,
    value: "45",
    label: "Días promedio de ROI",
    description: "Para ver resultados reales",
  },
  {
    icon: Award,
    value: "98%",
    label: "Tasa de éxito",
    description: "Clientes que superan objetivos",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<string[]>(["$0", "0", "0", "0%"])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateNumbers()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    const targets = ["$2.5M+", "127", "45", "98%"]
    const durations = [2500, 2000, 1800, 2200]

    targets.forEach((target, index) => {
      let current = 0
      let increment: number

      if (target.includes("$")) {
        increment = 2.5 / 50 // Para $2.5M
      } else if (target.includes("%")) {
        increment = 98 / 50 // Para 98%
      } else if (target === "127") {
        increment = 127 / 50 // Para 127
      } else {
        increment = 45 / 50 // Para 45 días
      }

      const timer = setInterval(() => {
        if (target.includes("$")) {
          if (current < 2.5) {
            current += increment
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = `$${Math.min(current, 2.5).toFixed(1)}M+`
              return newValues
            })
          } else {
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = "$2.5M+"
              return newValues
            })
            clearInterval(timer)
          }
        } else if (target.includes("%")) {
          const targetNum = Number.parseInt(target)
          if (current < targetNum) {
            current += increment
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = `${Math.min(Math.floor(current), targetNum)}%`
              return newValues
            })
          } else {
            clearInterval(timer)
          }
        } else {
          const targetNum = Number.parseInt(target)
          if (current < targetNum) {
            current += increment
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = `${Math.min(Math.floor(current), targetNum)}`
              return newValues
            })
          } else {
            clearInterval(timer)
          }
        }
      }, durations[index] / 50)
    })
  }

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <MatrixRain />
      <CircuitBoard />
      <NeuralNetwork />

      {/* Floating quantum orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            <QuantumOrb size="w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-balance mb-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <GlitchText>Números que</GlitchText>{" "}
            <span className="gradient-secondary bg-clip-text text-transparent animate-gradient">
              comprueban resultados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estos no son solo números, son <span className="text-primary font-semibold">resultados reales</span> de
            empresas como la tuya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <HolographicCard
                key={index}
                className={`text-center space-y-4 group ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center group-hover:animate-energy-pulse transition-all duration-300 animate-morph">
                    <Icon className="w-8 h-8 text-accent-foreground animate-quantum-flicker" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-primary animate-hologram">
                    <GlitchText>{animatedValues[index]}</GlitchText>
                  </div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </HolographicCard>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-xl p-6 max-w-xl mx-auto border border-primary/30">
            <p className="text-muted-foreground mb-4">
              <span className="text-primary font-semibold">¿Quieres ser parte de estas estadísticas?</span>
              <br />
              Tu consulta estratégica es completamente gratuita
            </p>
            <button className="px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 animate-pulse">
              🚀 RESERVAR MI CONSULTA GRATIS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
