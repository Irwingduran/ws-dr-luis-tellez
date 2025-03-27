"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ChevronRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SocialMediaButtons from "@/components/social-media-buttons"
import React, { useRef } from 'react';
import Footer from "@/components/footer"
import Carousel from "@/components/carousel"
import Mockup from "@/components/mockup"
import { Quote as QuoteIcon, Star as StarIcon } from 'lucide-react';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Función de desplazamiento mejorada
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
  
    const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
    const scrollAmount = direction === 'right' ? clientWidth : -clientWidth;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
  
    if ((direction === 'left' && isAtStart) || (direction === 'right' && isAtEnd)) {
      return;
    }
  
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  
  return (
    <>
    <SocialMediaButtons/>
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Dr. Luis M. Téllez Bernés</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Conóceme
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-primary">
              Reseñas
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta"><Button className="hidden md:inline-flex">Agendar Cita</Button></Link>
          <Button variant="outline" size="icon" className="md:hidden">
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

      <main className="flex-1 p-5">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-img.jpg"
              alt="Hero Background"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
            
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-200">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden">
                <Image src="/profile.jpg" alt="Dr" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-base text-primary">
                  Sobre el Dr. Téllez
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Una trayectoria de excelencia en cirugía plástica
                </h2>
                <p className="text-muted-foreground">
                El Doctor Téllez cursó la carrera de Médico Cirujano en la Universidad Popular
                 Autónoma del Estado de Pubela (UPAEP), egresó de la especialidad en Otorrinolaringología
                  y Cirugía de Cabeza y Cuello en el Centro Médico Nacional Siglo XXI, actualmente
                   miembro certificado del Consejo Mexicano de Otorrinolaringología y Cirugía de
                    Cabeza y Cuello, así como miembro del Colegio Poblano de Otorrinolaringología
                    y Cirugía de Cabeza y Cuello.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Miembro del Consejo Mexicano de Otorrinolaringología y Cirugía de Cabeza y Cuello</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Miembro del Colegio Poblano de Otorrinolaringología y Cirugía de Cabeza y Cuello</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Profesor adjunto curso de especialidad en otorrinolaringología en IMSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Catedrático UPAEP 2015 y 2016</span>
                  </li>
                </ul>
              
              </div>
            </div>
          </div>
        </section>


    <div className="mb-16 flex flex-col md:flex-row items-center gap-8" style={{ maxWidth: '800px', margin: '0 auto' }}>

  {/* Contenedor del video */}
  <div className="flex-1 rounded-xl bg-gray-50/50 overflow-hidden shadow-lg py-6" style={{ maxHeight: '100vh', maxWidth: '400px' }}>
    <div className="relative" style={{ paddingTop: '177.78%' }}> {/* 9:16 aspect ratio */}
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1627772480978271&show_text=0&width=560"
        width="100%"
        height="100%"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  {/* Título y texto descriptivo */}
  <div className="flex-1 space-y-4">
    <h2 className="text-2xl font-bold text-gray-900">
      Aprende más sobre el Dr. Luis M. Téllez Bernés
    </h2>
    <p className="text-gray-600">
      En este video, el Dr. Téllez comparte su experiencia y enfoque en cirugía plástica y otorrinolaringología. Descubre cómo puede ayudarte a alcanzar tus objetivos de belleza y salud.
    </p>
    <div className="py-4">
    <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
      <Button className="bg-primary text-white hover:bg-primary/90">
        Agendar una cita
      </Button>
    </Link>
    </div>
  </div>
</div>
  
        {/* Services Section */}
<section id="services" className="py-16 bg-gray-50">
  <div className="container">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-base text-primary">Mis Servicios</div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Procedimientos Estéticos</h2>
      <p className="text-muted-foreground">
        Ofrecemos una gama de procedimientos adaptados a sus necesidades y objetivos únicos
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
      {/* Service 1 */}
      <Card className="overflow-hidden">
        <Link href="/service2">
          <div className="aspect-video relative">
            <Image
              src="/bichectomia.webp"
              alt="Bichectomia"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Bichectomia</h3>
            <p className="text-muted-foreground mb-4">
              La bichectomía es un procedimiento quirúrgico de carácter estético o funcional en el que se elimina la grasa presente en las mejillas
            </p>
            <Link href="/service2" className="text-primary inline-flex items-center">
              Ver más <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </CardContent>
        </Link>
      </Card>

      {/* Service 2 */}
      <Card className="overflow-hidden">
        <Link href="/service1">
          <div className="aspect-video relative">
            <Image
              src="/rinoplastia.webp"
              alt="Rinoplastia"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Rinoplastia</h3>
            <p className="text-muted-foreground mb-4">
              La rinoplastia es la cirugía que modifica la forma de la nariz.
            </p>
            <Link href="/service1" className="text-primary inline-flex items-center">
              Ver más <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </CardContent>
        </Link>
      </Card>
    </div>
  </div>
</section>

     {/* Location Section */}
<section id="location" className="py-16 md:py-24 bg-muted/50">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-base text-primary">Mi ubicación</div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visítanos para una mejor valoración</h2>
        <p className="text-muted-foreground">
          Contamos con el mejor equipo y con la última tecnología, diseñada pensando en su comodidad. Estamos
          convenientemente situados en el corazón de la ciudad.
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium">Dirección</h3>
              <p className="text-muted-foreground">
                Av 5 Pte 715, Centro, 72000 
                <br />
                Heroica Puebla de Zaragoza, Pue.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium">Teléfono</h3>
              <p className="text-muted-foreground"> <a href="tel:2222576989">2222576989 (Citas Hospital UPAEP)</a></p>
              <p className="text-muted-foreground"> <a href="tel:2223643125">2223643125 (Urgencias)</a></p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">ltellez_bernes@hotmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium">Horario</h3>
              <p className="text-muted-foreground">
                Lunes - Viernes: 10am - 8pm
                <br />
                Sábados: 10am - 2pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps iframe */}
      <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.417015668337!2d-98.20784272479541!3d19.0453941821529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzQzLjQiTiA5OMKwMTInMTkuMCJX!5e0!3m2!1ses-419!2smx!4v1742664900980!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>

<section>
  <Mockup/>
</section>
       
{/* Reviews Section */}
<section id="reviews" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-base text-primary">
        Reseñas
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Lo que dicen nuestros pacientes
      </h2>
      <p className="text-muted-foreground">
        Lea los testimonios de pacientes que han transformado sus vidas con
        nuestros procedimientos.
      </p>
    </div>

    <div className="relative group">
      {/* Botón izquierdo */}
      <button
        onClick={() => scroll('left')}
        aria-label="Desplazar reseñas a la izquierda"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        disabled={carouselRef.current?.scrollLeft === 0}
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
          className="h-5 w-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Carrusel con tarjetas rectangulares */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto py-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {[
          {
            name: "Marysol Roldán",
            review: "Yo lleve a mi mama por una alergia muy severa, no se le quitaba con nada, le mando tratamiento y gracias a Dios se recupero bastante.",
            date: "Hace 2 semanas"
          },
          {
            name: "Michael Rodríguez",
            review: "Mi experiencia con el doctor y mi recuperación fueron excelentes, ¡gracias Doctor!",
            date: "Hace 1 mes"
          },
          {
            name: "Jennifer Martínez",
            review: "Recomendado, a mi papá lo ayudó mucho el tratamiendo del doctor resetó.",
            date: "Hace 3 semanas"
          },
        ].map((review, index) => (
          <div
            key={index}
            className="w-[400px] h-[220px] flex-shrink-0 bg-white rounded-lg shadow-md p-6 snap-start flex flex-col" /* Rectangular */
          >
            {/* Encabezado sin avatar */}
            <div className="mb-4">
              <h4 className="font-medium text-lg">{review.name}</h4>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-500 ml-2">{review.date}</span>
              </div>
            </div>
            
            {/* Icono de comillas */}
            <div className="mb-2 text-primary/20">
              <QuoteIcon className="h-6 w-6" />
            </div>
            
            {/* Texto del comentario */}
            <p className="text-gray-600 flex-grow line-clamp-4"> {/* Altura flexible */}
              {review.review}
            </p>
          </div>
        ))}
      </div>

      {/* Botón derecho */}
      <button
        onClick={() => scroll('right')}
        aria-label="Desplazar reseñas a la derecha"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
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
          className="h-5 w-5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>

    {/* Indicadores de posición */}
    <div className="flex justify-center gap-2 mt-6">
      {[1, 2, 3].map((_, i) => (
        <button
          key={i}
          onClick={() => {
            if (carouselRef.current) {
              carouselRef.current.scrollTo({
                left: carouselRef.current.clientWidth * i,
                behavior: 'smooth'
              });
            }
          }}
          className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-all"
          aria-label={`Ir a la reseña ${i + 1}`}
        />
      ))}
    </div>
  </div>
</section>



        {/* Google Review Banner */}
        <section className="py-16 bg-primary text-primary-foreground rounded-xl">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left m-3">
                <h2 className="text-2xl font-bold">¿Le gustan sus resultados?</h2>
                <p>Comparte tu experiencia y ayuda a otros a encontrar su camino hacia la confianza.</p>
              </div>
              <Link href="https://www.google.com.mx/maps/place/Dr.+Luis+Miguel+T%C3%A9llez+Bern%C3%A9s,+Otorrinolaring%C3%B3logo/@19.0456848,-98.2076301,17z/data=!4m8!3m7!1s0x85cfc15cd288fe93:0xdf6ba3461ab74629!8m2!3d19.0456848!4d-98.2050552!9m1!1b1!16s%2Fg%2F11h4cm77yd?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D" target="_blank">
              <Button variant="secondary" className="m-3">
              Deja tu opinión en Google
              </Button></Link>
            </div>
          </div>
        </section>
<div>
  <Carousel/>
</div>
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-base text-primary">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Programe su consulta</h2>
                <p className="text-muted-foreground">
                Dé el primer paso hacia su nuevo yo. Póngase en contacto con nosotros para programar una consulta con el Dr. Téllez.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-muted-foreground">
                      Av 5 Pte 715, Centro, 72000
                        <br />
                        Heroica Puebla de Zaragoza, Pue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-muted-foreground"> <a href="tel:2222576989">2222576989 (Citas Hospital UPAEP)</a></p>
                      <p className="text-muted-foreground"> <a href="tel:2223643125">2223643125 (Urgencias)  </a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">ltellez_bernes@hotmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Luis"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Apellido
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Peréz"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecciona</option>
                      <option value="lipoescultura">Lipoescultura 360</option>
                      <option value="busto">Aumento de Busto</option>
                      <option value="rinoplastia">Rinoplastia</option>
                      <option value="manga">Manga Gastrica</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mensaje"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
    </>
  )
}

