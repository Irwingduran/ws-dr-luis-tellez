import React from 'react'
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link';
import {ChevronRight} from "lucide-react"
const Services = () => {

  const OTROS_SERVICIOS = [
    {
        nombre: "Rinoseptumplastía",
        descripcion: "Estética y funcional",
        icono: "/logo.png"
    },
    {
        nombre: "Septumplastía",
        descripcion: "Corrección del tabique nasal",
        icono: "/logo.png"
    },
    {
        nombre: "Turbinoplastía",
        descripcion: "Reducción de cornetes nasales",
        icono: "/logo.png"
    },
    {
        nombre: "Cirugía endoscópica",
        descripcion: "Nariz y senos paranasales",
        icono: "/logo.png"
    },
    {
        nombre: "Adenoamigdalectomía",
        descripcion: "Extracción de amígdalas y adenoides",
        icono: "/logo.png"
    },
    {
        nombre: "Mastoidectomía",
        descripcion: "Procedimiento del hueso mastoideo",
        icono: "/logo.png"
    },
    {
        nombre: "Timpanoplastía",
        descripcion: "Reparación del tímpano",
        icono: "/logo.png"
    },
    {
        nombre: "Microlaringoscopía",
        descripcion: "Examen directo de la laringe",
        icono: "/logo.png"
    },
    {
        nombre: "Drenaje de absceso",
        descripcion: "Absceso profundo de cuello",
        icono: "/logo.png"
    },
    {
        nombre: "Plastia Traqueal",
        descripcion: "Reparación quirúrgica de la tráquea",
        icono: "/logo.png"
    },
    {
        nombre: "Traqueostomía",
        descripcion: "Creación de una apertura en la tráquea",
        icono: "/logo.png"
    },
    {
        nombre: "Manejo de tumores de oído, nariz y garganta",
        descripcion: "Diagnóstico y tratamiento de tumores en ORL",
        icono: "/logo.png"
    }
];

      
  return (
    <section id="services" className="py-16 bg-blue-50">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-base text-primary">Mis Servicios</div>
        <h2 className="text-3xl font-bold text-blue-950 tracking-tight sm:text-4xl">Procedimientos Estéticos</h2>
        <p className="text-muted-foreground">
          Ofrecemos una gama de procedimientos adaptados a sus necesidades y objetivos únicos
        </p>
      </div>
  
      {/* Cambiado a grid-cols-3 para mostrar los 3 servicios en línea */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Service 2 - Rinoplastia */}
          <Card className="overflow-hidden">
          <Link href="/service1">
            <div className="h-80 relative">
              <Image
                src="/rino.png"
                alt="Rinoplastia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-950">Rinoplastia</h3>
              <p className="text-muted-foreground mb-4">
                La rinoplastia es la cirugía que modifica la forma de la nariz
              </p>
              <Link href="/service1" className="text-primary inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </CardContent>
          </Link>
        </Card>

        {/* Service 1 - Bichectomia */}
        <Card className="overflow-hidden">
          <Link href="/service2">
            <div className="h-80 relative">
              <Image
                src="/img1.png"
                alt="Bichectomia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-950">Bichectomia</h3>
              <p className="text-muted-foreground mb-4">
                La bichectomía es un procedimiento quirúrgico de carácter estético o funcional en el que se elimina la grasa presente en las mejillas
              </p>
              <Link href="/service2" className="text-primary inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </CardContent>
          </Link>
        </Card>

        {/* Service 3 - Lipodepapada */}
        <Card className="overflow-hidden">
          <Link href="/service3">
            <div className="h-80 relative">
              <Image
                src="/Lipopapada.jpg"  /* Cambiado a imagen específica para lipodepapada */
                alt="Lipopapada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-950">Lipopapada</h3>
              <p className="text-muted-foreground mb-4">
                La lipopapada es un procedimiento estético que elimina el exceso de grasa y piel bajo el mentón
              </p>
              <Link href="/service1" className="text-primary inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </CardContent>
          </Link>
        </Card>
      </div>

      <div className='py-16'>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">Otros Servicios</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {OTROS_SERVICIOS.map((servicio) => (
            <div key={servicio.nombre} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <Image
                src={servicio.icono}
                alt={servicio.nombre}
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="font-bold">{servicio.nombre}</h3>
                <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services