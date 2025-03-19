import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Phone, Mail, Clock, ChevronRight, ChevronLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SocialMediaButtons from "@/components/social-media-buttons"

export default function Home() {
  return (
    <>
    <SocialMediaButtons/>
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
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
          <Link href="#"><Button className="hidden md:inline-flex">Agendar Cita</Button></Link>
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
              src="/placeholder.svg?height=800&width=1920"
              alt="Hero Background"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Luis Miguel Téllez Bernés
              </h1>
              <p className="text-lg md:text-xl">
              Otorrinolaringología y Cirugía de Cabeza y Cuello, Rinología & Cirugía Estética Facial
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link href=""><Button size="lg" className="font-medium"> 
                  Agendar Cita
                </Button>
                </Link>
                <Link href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20"
                >
                  Conóceme
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Dr. Smith" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Sobre el Dr. Téllez
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  A Trajectory of Excellence in Plastic Surgery
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

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Mis Servicios</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Procedimientos Estéticos</h2>
              <p className="text-muted-foreground">
              Ofrecemos una gama de procedimientos adaptados a sus necesidades y objetivos únicos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Service 1 */}
            <Card className="overflow-hidden"> <Link href="/service1"> 
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
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
                  <Link href="#" className="text-primary inline-flex items-center">
                    Ver más <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
                </Link> </Card>

              {/* Service 2 */}
            
           <Card className="overflow-hidden"><Link href="/service2">  
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
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
                  <Link href="#" className="text-primary inline-flex items-center">
                    Ver más <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
                </Link></Card>
            
           
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
                      <p className="text-muted-foreground"> <a href="tel:2223643125">2223643125 (Urgencias)                      </a></p>
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

              <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                {/* Google Maps iframe would go here in production */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Mi ubicación en Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Reseñas
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros pacientes</h2>
              <p className="text-muted-foreground">
              Lea los testimonios de pacientes que han transformado sus vidas con nuestros procedimientos.
              </p>
            </div>

            <div className="relative">
              <div className="flex overflow-hidden gap-6 py-4">
                {/* Review 1 */}
                <Card className="min-w-[300px] md:min-w-[400px] p-6 flex-shrink-0">
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
                      <h4 className="font-medium">Sarah Peréz</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi nisi dicta deserunt nihil voluptate rerum accusamus quae quaerat ad recusandae laudantium nesciunt nam temporibus, fuga ipsum exercitationem iure dignissimos!
                  </p>
                </Card>

                {/* Review 2 */}
                <Card className="min-w-[300px] md:min-w-[400px] p-6 flex-shrink-0">
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
                      <h4 className="font-medium">Michael Rodriguez</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sapiente magni repellat. Labore magnam minima adipisci hic fugit saepe nemo pariatur. Harum velit cum numquam dolorum maxime culpa voluptate cumque?        
                  </p>
                </Card>

                {/* Review 3 */}
                <Card className="min-w-[300px] md:min-w-[400px] p-6 flex-shrink-0">
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
                      <h4 className="font-medium">Jennifer Martínez</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  <p className="text-muted-foreground">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus nobis, hic cumque repellat obcaecati delectus, asperiores cum tempora optio sit error eligendi eaque non ipsa odit quisquam molestias natus!
                  </p>
                </Card>
              </div>

              <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full shadow-md">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full shadow-md">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Google Review Banner */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-bold">¿Le gustan sus resultados?</h2>
                <p>Comparte tu experiencia y ayuda a otros a encontrar su camino hacia la confianza.</p>
              </div>
              <Button variant="secondary" size="lg">
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
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Dr. Luis M. Téllez Bernés</span>
              </Link>
              <p className="text-muted-foreground text-sm">
              Transformando vidas a través de la cirugía plástica experta y la atención compasiva.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#home" className="text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                    Conóceme
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="text-muted-foreground hover:text-foreground">
                    Reseñas
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Lipoescultura 360
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Aumento de Busto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Rinoplastia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Manga Gastrica
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                  Av 5 Pte 715, Centro, 72000
                    <br />
                    Heroica Puebla de Zaragoza, Pue.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">2222576989 (Citas Hospital UPAEP)</span>
                  <span className="text-muted-foreground">2223643125 (Urgencias)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">ltellez_bernes@hotmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Delta by Imagen Médica. Todos los derechos reservados.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

