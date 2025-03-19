export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">404 - Página no encontrada</h1>
        <p className="text-gray-600 mt-4">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Volver al inicio
        </a>
      </div>
    );
  }