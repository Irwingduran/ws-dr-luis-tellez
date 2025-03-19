import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Clock, Calendar, ShieldCheck, Award, Sparkles, Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Rinoplastia"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-4 text-white">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Procedimiento Premium
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Rinoplastia</h1>
            <p className="text-lg md:text-xl">
              Transforma tu nariz y mejora tu perfil facial con un procedimiento personalizado realizado por el Dr. Téllez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-medium">
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20"
              >
                Ver Antes y Después
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">El Procedimiento</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Redefine tu Perfil con Rinoplastia
              </h2>
              <p className="text-muted-foreground">
                La rinoplastia es un procedimiento quirúrgico que modifica la forma y estructura de la nariz para mejorar
                la armonía facial. Este procedimiento puede corregir problemas funcionales, como dificultades
                respiratorias, o estéticos, como una nariz demasiado grande, torcida o con protuberancias.
              </p>
              <p className="text-muted-foreground">
                El Dr. Téllez utiliza técnicas avanzadas para garantizar resultados naturales y personalizados, adaptados
                a las necesidades y deseos de cada paciente. Su enfoque artístico asegura que la nariz se integre
                perfectamente con el resto de las facciones.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center border-2 border-background"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-muted-foreground"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Más de 1,500 pacientes satisfechos</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">5.0 (350+ reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Procedimiento de Rinoplastia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Beneficios</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué Elegir Rinoplastia?</h2>
            <p className="text-muted-foreground">
              Descubre los beneficios transformadores de este procedimiento facial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resultados Naturales</h3>
                <p className="text-muted-foreground">
                  Una nariz que se integra armoniosamente con el resto de tus facciones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Personalizado</h3>
                <p className="text-muted-foreground">
                  Diseñado para cumplir con tus expectativas y necesidades individuales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recuperación Rápida</h3>
                <p className="text-muted-foreground">
                  Técnicas avanzadas que minimizan el tiempo de recuperación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resultados Duraderos</h3>
                <p className="text-muted-foreground">
                  Disfruta de los resultados de por vida con un cuidado adecuado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seguridad Garantizada</h3>
                <p className="text-muted-foreground">
                  Realizado en instalaciones de última generación con los más altos estándares de seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Confianza Mejorada</h3>
                <p className="text-muted-foreground">
                  Aumenta tu autoestima con una apariencia facial equilibrada y atractiva.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para Transformar tu Perfil?</h2>
              <p className="text-primary-foreground/90 text-lg">
                Da el primer paso hacia la nariz que siempre has deseado. Agenda una consulta con el Dr. Téllez para
                discutir cómo la rinoplastia puede ayudarte a alcanzar tus metas estéticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Agendar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contáctanos
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Resultados de Rinoplastia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}