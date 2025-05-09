import React from "react";
import { Button } from "./ui/button";

interface ServiceSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="flex items-center justify-center bg-blue-50 py-12 px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="Service"
            className="w-full"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-950">{title}</h2>
          <p className="text-gray-700 mt-4 p-5">{description}</p>
          <a href="https://www.findoctor.com.mx/doctores/luis-miguel-tellez-bernes" target="_blank"><Button className='bg-blue-900 text-white'>
          {buttonText}
                    </Button>
                    </a>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const App = () => {
  return (
    <ServiceSection
    imageUrl="/mockup.png"
  title="Encuentra más información en mi tarjeta digital en Findoctor"
  description="Accede a mi tarjeta digital en Findoctor para encontrar fácilmente información sobre mis servicios, ubicación, horario y datos de contacto. Agenda tu cita en línea de manera rápida y segura."
  buttonText="Ir a mi tarjeta digital"
  />
  
  
  );
};

export default App;