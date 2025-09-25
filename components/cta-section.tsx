"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-primary animate-gradient opacity-20" />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 gradient-secondary rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="text-sm font-medium text-red-400">
                ⏰ Oferta limitada: Solo 3 cupos disponibles este mes
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-balance">
              ¿Listo para generar <span className="gradient-accent bg-clip-text text-transparent">$50,000+</span>{" "}
              adicionales cada mes?
            </h2>

            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              <strong className="text-primary">GARANTÍA TOTAL:</strong> Si no aumentas tus ingresos al menos $50,000 en
              90 días, te devolvemos el 100% de tu inversión + $1,000 por las molestias.
              <br />
              <span className="text-primary text-lg font-semibold mt-2 block">¡Sin letra pequeña, sin excusas!</span>
            </p>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-6 mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {[
              { icon: Mail, title: "Email VIP", value: "Respuesta en 2 horas", action: "Escribir Ahora", urgent: true },
              {
                icon: Phone,
                title: "Llamada Directa",
                value: "Habla con un experto",
                action: "Llamar Ya",
                urgent: false,
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Express",
                value: "Chat inmediato",
                action: "Chatear",
                urgent: true,
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <div
                  key={index}
                  className={`glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group relative ${
                    contact.urgent ? "border-primary/50 bg-primary/5" : ""
                  }`}
                >
                  {contact.urgent && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      ¡RÁPIDO!
                    </div>
                  )}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground">{contact.title}</div>
                      <div className="text-sm text-muted-foreground">{contact.value}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-primary/30 hover:bg-primary/10 bg-transparent ${
                        contact.urgent ? "animate-pulse border-primary" : ""
                      }`}
                    >
                      {contact.action}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className={`glass rounded-2xl p-8 max-w-2xl mx-auto border-2 border-primary/30 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  🎁 Consulta Estratégica GRATUITA (Valor $500)
                </h3>
                <p className="text-muted-foreground">
                  Recibe un plan personalizado para automatizar tu negocio y generar $50,000+ adicionales cada mes.
                  <br />
                  <span className="text-primary font-semibold">
                    ✅ Análisis completo ✅ Estrategia personalizada ✅ Plan de implementación
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="tu@empresa.com (para enviarte el plan)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 group animate-pulse"
                >
                  RESERVAR MI CUPO GRATIS
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="text-center space-y-2">
                <p className="text-xs text-muted-foreground">
                  ⚡ Respuesta inmediata • 🔒 100% confidencial • 🎯 Sin compromiso
                </p>
                <p className="text-sm text-primary font-semibold">⏰ Solo quedan 3 cupos disponibles este mes</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass rounded-lg p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MG</span>
                </div>
                <div>
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "Pasé de facturar $30K/mes a $180K/mes en solo 4 meses. La automatización fue clave."
                  </p>
                  <p className="text-xs text-primary">María González - CEO TechStart</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">JR</span>
                </div>
                <div>
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "ROI del 400% en 60 días. Ahora trabajo 50% menos y gano 3x más."
                  </p>
                  <p className="text-xs text-primary">Juan Rodríguez - Fundador EcomPlus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
