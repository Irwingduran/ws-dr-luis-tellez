import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from "lucide-react"
const Footer = () => {
  return (
          <footer className="bg-muted rounded-xl p-6 py-12 bg-white m-3">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
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
                  <p className="text-muted-foreground text-sm">
                  Transformando vidas a través de la cirugía plástica experta y la atención compasiva.
                  </p>
                  <div className="flex gap-4">
                    <Link href="https://www.facebook.com/dr.LuisMiguelTellez " className="text-muted-foreground hover:text-foreground">
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
                    <Link href="https://www.instagram.com/dr.luistellez/" className="text-muted-foreground hover:text-foreground">
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
                      <Link href="/#reviews" className="text-muted-foreground hover:text-foreground">
                        Reseñas
                      </Link>
                    </li>
                    <li>
                      <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>
    
                <div>
                  <h3 className="font-medium text-lg mb-4">Servicios</h3>
                  <ul className="space-y-2">
                   
                    <li>
                      <Link href="/service2" className="text-muted-foreground hover:text-foreground">
                      Bichectomia
                      </Link>
                    </li>
                    <li>
                      <Link href="/service1" className="text-muted-foreground hover:text-foreground">
                        Rinoplastia
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
  )
}

export default Footer