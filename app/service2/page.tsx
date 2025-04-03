import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Calendar, ShieldCheck, Award, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import SocialMediaButtons from "@/components/social-media-buttons"


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialMediaButtons/>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-blue-50/95 backdrop-blur supports-[backdrop-filter]:bg-blue-50/60">
  <div className="container flex h-16 items-center justify-between">
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-blue-900">Dr. Luis M. Téllez Bernés</span>
    </Link>
    
    <nav className="hidden md:flex gap-6">
      <Link href="/" className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors">
        Inicio
      </Link>
      <Link href="/#about" className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors">
        Conóceme
      </Link>
      <Link href="/#services" className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors">
        Servicios
      </Link>
      <Link href="/#reviews" className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors">
        Reseñas
      </Link>
      <Link href="/#contact" className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors">
        Contacto
      </Link>
    </nav>
    
    <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
      <Button className="hidden md:inline-flex bg-blue-900 hover:bg-blue-700 text-white">
        Agendar Cita
      </Button>
    </Link>
    
    <Button variant="outline" size="icon" className="md:hidden border-blue-200 text-blue-800 hover:bg-blue-100">
      <span className="sr-only">menu</span>
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
        className="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  </div>
</header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img1.png"
            alt="Bichectomía"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-4 text-white m-4">
            <div className="inline-block rounded-lg bg-white opacity-70 px-3 py-1 text-sm text-blue-950">
              Procedimiento Premium
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Bichectomía</h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
              <Button size="lg" className="font-medium bg-blue-900">
                Agendar Consulta
              </Button></Link>
             
            </div>
          </div>
        </div>
      </section>

            {/* Overview Section */}
            <section className="py-16 md:py-16 m-4 bg-white">
        <div className="container bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Procedimiento</div>
              <h2 className="text-3xl text-blue-950 font-bold tracking-tight sm:text-4xl">
                Define tu Rostro con Bichectomía
              </h2>
              <p className="text-muted-foreground">
                La bichectomía es un procedimiento quirúrgico que reduce el volumen de las mejillas al extraer las bolsas
                de grasa de Bichat. Este procedimiento es ideal para quienes desean un rostro más definido y estilizado.
              </p>
              <p className="text-muted-foreground">
                El Dr. Téllez utiliza técnicas avanzadas para garantizar resultados naturales y armoniosos, adaptados a
                las necesidades y deseos de cada paciente. Su enfoque artístico asegura que el rostro mantenga un aspecto
                equilibrado y atractivo.
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
                      <Star key={i} className="h-3 w-3 fill-primary text-blue-900" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">5.0 (350+ reseñas)</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
    <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
      <Button className="w-full sm:w-auto bg-blue-900">
        Agendar Cita
      </Button>
    </Link>
  </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden">
              {/* Video de Facebook */}
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F280014774445763&show_text=false&width=476&t=0"
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white m-4">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Beneficios</div>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">¿Por qué Elegir Bichectomía?</h2>
            <p className="text-muted-foreground">
              Descubre los beneficios transformadores de este procedimiento facial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="bg-blue-50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rostro Definido</h3>
                <p className="text-muted-foreground">
                  Reduce el volumen de las mejillas para un rostro más estilizado y armónico.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
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

            <Card className="bg-blue-50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recuperación Rápida</h3>
                <p className="text-muted-foreground">
                  Procedimiento mínimamente invasivo con un tiempo de recuperación corto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resultados Duraderos</h3>
                <p className="text-muted-foreground">
                  Disfruta de un rostro definido de por vida con un cuidado adecuado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
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

            <Card className="bg-blue-50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Confianza Mejorada</h3>
                <p className="text-muted-foreground">
                  Aumenta tu autoestima con un rostro más definido y atractivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-950 text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center m-4">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Lista para Definir tu Rostro?</h2>
              <p className="text-primary-foreground/90 text-lg">
                Da el primer paso hacia el rostro que siempre has deseado. Agenda una consulta con el Dr. Téllez para
                discutir cómo la bichectomía puede ayudarte a alcanzar tus metas estéticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
                <Button size="lg" variant="secondary">
                  Agendar Consulta
                </Button></Link>
               
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/img1.jpg"
                alt="Resultados de Bichectomía"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
      </section>
      <Footer/>
    </div>
  );
}
