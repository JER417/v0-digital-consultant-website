"use client"

import { useState, useEffect } from "react"
import { Star, Quote, TrendingUp } from "lucide-react"
import { HolographicCard, GlitchText, QuantumOrb } from "./advanced-animations"

const testimonials = [
  {
    name: "María González",
    company: "TechStart Solutions",
    role: "CEO & Fundadora",
    image: "/professional-woman-ceo.png",
    rating: 5,
    result: "+280% ingresos en 60 días",
    quote:
      "Pasamos de facturar $30,000 al mes a $114,000 en solo 60 días. La automatización de procesos que implementaron nos permitió escalar sin contratar más personal. Ahora trabajo 40% menos y gano 3 veces más.",
    metrics: { before: "$30K/mes", after: "$114K/mes", time: "60 días" },
  },
  {
    name: "Juan Rodríguez",
    company: "EcomPlus",
    role: "Fundador",
    image: "/professional-entrepreneur.png",
    rating: 5,
    result: "ROI del 400% en 45 días",
    quote:
      "Increíble. En 45 días recuperé mi inversión 4 veces. Los sistemas de IA que desarrollaron automatizan todo: desde el marketing hasta la atención al cliente. Mis ventas se dispararon un 320%.",
    metrics: { before: "$15K/mes", after: "$63K/mes", time: "45 días" },
  },
  {
    name: "Ana Martínez",
    company: "Digital Boost",
    role: "Directora de Operaciones",
    image: "/professional-woman-director.png",
    rating: 5,
    result: "+150% eficiencia operativa",
    quote:
      "Eliminamos 80% de las tareas manuales. Ahora procesamos 3x más pedidos con el mismo equipo. La automatización nos dio una ventaja competitiva brutal en nuestro mercado.",
    metrics: { before: "200 pedidos/día", after: "600 pedidos/día", time: "30 días" },
  },
]

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleTestimonials((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-testimonial-index]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary opacity-10" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          >
            <QuantumOrb size="w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-glow animate-energy-pulse">
            <Star className="w-4 h-4 text-primary animate-quantum-flicker" />
            <span className="text-sm font-medium text-primary">Resultados Reales de Clientes Reales</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-balance">
            <GlitchText>Casos de éxito</GlitchText>{" "}
            <span className="gradient-accent bg-clip-text text-transparent animate-gradient">comprobados</span>
          </h2>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Estos son solo algunos de los resultados que nuestros clientes han logrado.
            <br />
            <span className="text-primary font-semibold">Tu empresa podría ser la siguiente historia de éxito.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleTestimonials.includes(index)

            return (
              <div
                key={index}
                data-testimonial-index={index}
                className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <HolographicCard className="h-full group hover:scale-105 transition-all duration-500">
                  <div className="space-y-6">
                    {/* Header with results */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary animate-quantum-flicker" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-green-500 font-bold text-sm">
                        <TrendingUp className="w-4 h-4" />
                        {testimonial.result}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">"{testimonial.quote}"</p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Antes</div>
                        <div className="font-bold text-red-400">{testimonial.metrics.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Después</div>
                        <div className="font-bold text-green-400">{testimonial.metrics.after}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Tiempo</div>
                        <div className="font-bold text-primary">{testimonial.metrics.time}</div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          <GlitchText>{testimonial.name}</GlitchText>
                        </div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border-2 border-primary/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Quieres resultados como estos?</h3>
            <p className="text-muted-foreground mb-6">
              Únete a más de 127 empresas que ya transformaron su negocio con nosotros.
              <br />
              <span className="text-primary font-semibold">Tu consulta estratégica es completamente GRATIS.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 animate-pulse">
                🎁 RESERVAR MI CONSULTA GRATIS
              </button>
              <button className="px-8 py-3 glass border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                Ver Más Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
