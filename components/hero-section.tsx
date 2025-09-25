"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Bot } from "lucide-react"
import {
  MatrixRain,
  TypingAnimation,
  HolographicCard,
  GlitchText,
  CircuitBoard,
  DataStream,
  ScanLine,
  QuantumOrb,
  NeuralNetwork,
} from "./advanced-animations"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-primary animate-gradient opacity-20" />
      <MatrixRain />
      <CircuitBoard />
      <NeuralNetwork />
      <ScanLine />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-morph opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            <QuantumOrb size="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-glow animate-energy-pulse">
                <Zap className="w-4 h-4 text-primary animate-quantum-flicker" />
                <span className="text-sm font-medium text-primary">🔥 Últimas 3 plazas disponibles este mes</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                <GlitchText>Multiplica tus</GlitchText>{" "}
                <span className="gradient-primary bg-clip-text text-transparent animate-gradient">
                  <TypingAnimation text="ingresos" />
                </span>{" "}
                en 90 días
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                <strong className="text-primary">Garantizado:</strong> Automatizamos tu negocio para que generes{" "}
                <span className="text-primary font-bold">$50,000+ adicionales</span> cada mes, o te devolvemos tu
                dinero.
                <br />
                <span className="text-sm mt-2 block">✅ Sin riesgo • ✅ Resultados en 90 días • ✅ Soporte 24/7</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Reservar Mi Consulta GRATIS (Valor $500)
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Ver Casos de Éxito Reales
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "$2.5M+", label: "Generados para clientes" },
                { value: "127", label: "Empresas transformadas" },
                { value: "45 días", label: "Promedio de ROI" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="glass rounded-lg p-4 border-l-4 border-primary">
              <p className="text-sm italic text-muted-foreground">
                "En 60 días aumentamos nuestros ingresos un 280%. La automatización cambió completamente nuestro
                negocio."
              </p>
              <p className="text-xs text-primary mt-1">- María González, CEO TechStart</p>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Data streams around the dashboard */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <DataStream direction="horizontal" />
              </div>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <DataStream direction="vertical" />
              </div>

              {/* Main dashboard mockup with holographic effect */}
              <HolographicCard className="animate-float">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      <TypingAnimation text="Panel de Control" />
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-energy-pulse" />
                      <span className="text-xs text-muted-foreground">En línea</span>
                    </div>
                  </div>

                  {/* Revenue chart mockup */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ingresos</span>
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp className="w-3 h-3 animate-quantum-flicker" />
                        <GlitchText className="text-sm font-medium">+150%</GlitchText>
                      </div>
                    </div>

                    <div className="h-32 gradient-secondary rounded-lg relative overflow-hidden holographic">
                      <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                        {[40, 65, 45, 80, 95, 70, 100].map((height, i) => (
                          <div
                            key={i}
                            className="w-6 bg-primary/80 rounded-t animate-energy-pulse"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Automation status */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 animate-hologram">
                    <Bot className="w-5 h-5 text-primary animate-rotate-3d" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        <GlitchText>IA Activa</GlitchText>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <TypingAnimation text="Optimizando procesos..." />
                      </div>
                    </div>
                  </div>
                </div>
              </HolographicCard>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 animate-morph">
                <QuantumOrb />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 gradient-secondary rounded-full animate-rotate-3d opacity-40" />

              <div className="absolute inset-0 pointer-events-none">
                <CircuitBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
