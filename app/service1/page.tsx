import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Calendar, ShieldCheck, Award, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import SocialMediaButtons from "@/components/social-media-buttons"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
            src="/rino.png"
            alt="Rinoplastia"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-4 text-white m-4">
            <div className="inline-block rounded-lg opacity-70 bg-white px-3 py-1 text-sm text-blue-950">
              Procedimiento Premium
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Rinoplastia</h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
              <Button size="lg" className="font-medium bg-blue-900">
                Agendar Consulta
              </Button></Link>
             
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 m-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Procedimiento</div>
  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-950">
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
          <Star key={i} className="h-3 w-3 fill-primary text-blue-900" />
        ))}
        <span className="ml-1 text-xs text-muted-foreground">5.0 (350+ reseñas)</span>
      </div>
    </div>
  </div>

  {/* Botón Agendar Cita añadido aquí */}
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
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F529244346052462&show_text=0&width=560"
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-xl"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-950">¿Por qué Elegir Rinoplastia?</h2>
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
                <h3 className="text-xl font-bold">Resultados Naturales</h3>
                <p className="text-muted-foreground">
                  Una nariz que se integra armoniosamente con el resto de tus facciones.
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
                  Técnicas avanzadas que minimizan el tiempo de recuperación.
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
                  Disfruta de los resultados de por vida con un cuidado adecuado.
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
                  Aumenta tu autoestima con una apariencia facial equilibrada y atractiva.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-950 text-primary-foreground">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-12 items-center m-4">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Lista para Transformar tu Perfil?</h2>
        <p className="text-primary-foreground/90 text-lg">
        Da el primer paso hacia la nariz que siempre has deseado. Agenda una consulta con
         el Dr. Téllez para discutir cómo la rinoplastia puede ayudarte a alcanzar tus metas estéticas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontre%20su%20sitio%20web%20y%20me%20gustaria%C3%ADa%20realizar%20una%20consulta" target="_blank">
            <Button size="lg" variant="secondary">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Carrusel de imágenes */}
      <div className="w-full max-w-lg mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="rounded-xl overflow-hidden"
        >
          <CarouselContent>
            {[
              "/rino/slide1.jpg",
              "/rino/slide2.jpg",
              "/rino/slide3.jpg",
              "/rino/slide4.jpg",
              "/rino/slide5.jpg",
              "/rino/slide6.jpg",
              "/rino/slide7.jpg",
              "/rino/slide8.jpg",
              "/rino/slide9.jpg",
              "/rino/slide10.jpg",
              "/rino/slide11.jpg",
              "/rino/slide12.jpg",
              "/rino/slide13.jpg",
              "/rino/slide14.jpg",
              "/rino/slide15.jpg",
              "/rino/slide16.jpg",
              "/rino/slide17.jpg",
              "/rino/slide18.jpg",
              "/rino/slide19.jpg",
              "/rino/slide20.jpg",
              "/rino/slide21.jpg",
              "/rino/slide22.jpg",
              "/rino/slide23.jpg",
              "/rino/slide24.jpg",
              "/rino/slide25.jpg",
              "/rino/slide26.jpg",
          
            ].map((imgSrc, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-square md:aspect-auto md:h-[400px]">
                  <Image
                    src={imgSrc}
                    alt={`Resultado de tratamiento ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white" />
        </Carousel>
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </div>
  );
}
