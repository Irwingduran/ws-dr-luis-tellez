"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ChevronRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SocialMediaButtons from "@/components/social-media-buttons"
import React, { useRef } from 'react';
import Footer from "@/components/footer"


export default function Home() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Función para mover el carrusel hacia la izquierda
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320, // Ajusta este valor según el ancho de las tarjetas
        behavior: "smooth",
      });
    }
  };

  // Función para mover el carrusel hacia la derecha
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320, // Ajusta este valor según el ancho de las tarjetas
        behavior: "smooth",
      });
    }
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
              src="/"
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
          <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta"><Button className="hidden md:inline-flex">Agendar Cita</Button></Link>
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
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden">
                <Image src="/profile.jpg" alt="Dr" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
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
  <div className="flex-1 rounded-xl overflow-hidden shadow-lg py-6" style={{ maxHeight: '100vh', maxWidth: '400px' }}>
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
    <Link href="https://wa.me/5212223643125?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
      <Button className="bg-primary text-white hover:bg-primary/90">
        Agendar una cita
      </Button>
    </Link>
    </div>
  </div>
</div>
  
        {/* Services Section */}
<section id="services" className="py-16 ">
  <div className="container">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Mis Servicios</div>
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
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Mi ubicación</div>
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

        {/* Reviews Section */}
        <section id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
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

        <div className="relative">
          {/* Botón de flecha izquierda */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full shadow-md z-10"
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
              className="h-6 w-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Contenedor del carrusel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto py-4 scroll-smooth scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory", // Asegura que las tarjetas se alineen correctamente
            }}
          >
            {/* Tarjeta de reseña */}
            {[
              {
                name: "Sarah Pérez",
                review:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi nisi dicta deserunt nihil voluptate rerum accusamus quae quaerat ad recusandae laudantium nesciunt nam temporibus, fuga ipsum exercitationem iure dignissimos!",
              },
              {
                name: "Michael Rodríguez",
                review:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sapiente magni repellat. Labore magnam minima adipisci hic fugit saepe nemo pariatur. Harum velit cum numquam dolorum maxime culpa voluptate cumque?",
              },
              {
                name: "Jennifer Martínez",
                review:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus nobis, hic cumque repellat obcaecati delectus, asperiores cum tempora optio sit error eligendi eaque non ipsa odit quisquam molestias natus!",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="w-fit p-6 flex-shrink-0 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
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
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="yellow"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
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
                    className="h-8 w-8 text-primary/20"
                  >
                    <path d="M12 17c1.66 0 3-1.34 3-3V7h-6v3c0 1.66 1.34 3 3 3z" />
                    <path d="M12 7V5c0-1.66-1.34-3-3-3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V11c0-1.66-1.34-3-3-3z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Botón de flecha derecha */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full shadow-md z-10"
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
              className="h-6 w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
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
              <Button variant="secondary" className="m-3">
              Deja tu opinión en Google
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contacto</div>
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

