"use client"

import { useState, useEffect, useRef } from "react"
import { Bot, Zap, TrendingUp, Cog, BarChart3, Shield } from "lucide-react"
import { HolographicCard, GlitchText, CircuitBoard, DataStream, QuantumOrb, NeuralNetwork } from "./advanced-animations"

const services = [
  {
    icon: Bot,
    title: "Automatización con IA",
    description:
      "Implementamos sistemas de inteligencia artificial que automatizan tareas repetitivas y optimizan flujos de trabajo.",
    features: ["Chatbots inteligentes", "Procesamiento automático", "Análisis predictivo"],
  },
  {
    icon: Cog,
    title: "Optimización de Procesos",
    description:
      "Analizamos y mejoramos tus procesos empresariales para maximizar la eficiencia y reducir costos operativos.",
    features: ["Mapeo de procesos", "Eliminación de cuellos de botella", "Workflows optimizados"],
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzado",
    description:
      "Dashboards en tiempo real y análisis de datos que te permiten tomar decisiones informadas y estratégicas.",
    features: ["Dashboards personalizados", "Reportes automáticos", "KPIs en tiempo real"],
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Escalable",
    description:
      "Estrategias digitales que se adaptan al crecimiento de tu empresa, garantizando escalabilidad sostenible.",
    features: ["Arquitectura escalable", "Integración de sistemas", "Migración a la nube"],
  },
  {
    icon: Shield,
    title: "Seguridad Digital",
    description:
      "Protegemos tus datos y sistemas con las mejores prácticas de ciberseguridad y cumplimiento normativo.",
    features: ["Auditorías de seguridad", "Encriptación avanzada", "Cumplimiento GDPR"],
  },
  {
    icon: Zap,
    title: "Integración Rápida",
    description: "Implementación ágil de soluciones que se integran perfectamente con tu infraestructura existente.",
    features: ["APIs personalizadas", "Migración sin interrupciones", "Soporte 24/7"],
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden cyber-grid">
      <div className="absolute inset-0 gradient-secondary opacity-5" />
      <CircuitBoard />
      <NeuralNetwork />

      {/* Floating quantum orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <QuantumOrb size="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-glow animate-energy-pulse">
            <Cog className="w-4 h-4 text-primary animate-rotate-3d" style={{ animationDuration: "3s" }} />
            <span className="text-sm font-medium text-primary">Soluciones que generan $$$</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-balance">
            <GlitchText>Servicios que</GlitchText>{" "}
            <span className="gradient-accent bg-clip-text text-transparent animate-gradient">multiplican</span> tus
            ganancias
          </h2>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Cada servicio está diseñado para generar ROI inmediato. Nuestros clientes ven resultados en promedio en 45
            días.
            <br />
            <span className="text-primary font-semibold">Garantía de resultados o devolución del 100%</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <DataStream direction="horizontal" />
                </div>

                <HolographicCard className="group hover:scale-105 transition-all duration-500 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:animate-energy-pulse transition-all duration-300 animate-morph">
                        <Icon className="w-6 h-6 text-primary-foreground animate-quantum-flicker" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        <GlitchText>{service.title}</GlitchText>
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-pretty">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-energy-pulse" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HolographicCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
