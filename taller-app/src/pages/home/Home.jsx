import taller from "../../assets/imagenes/taller.jpeg"
import tallerr from "../../assets/imagenes/tallerr.jpeg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export function Home() {

  // Carrusel
  const imagenes = [taller, tallerr]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div>

      {/*IMAGEN ) */}
      <div className="relative h-[650px]">

        <img
          src={taller}
          alt="Taller"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Texto */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 text-white max-w-3xl animacion">

          <h1 className="text-5xl font-bold mb-4">
            Bienvenido a Italika
          </h1>

          <p className="text-lg mb-4">
            En nuestro taller contamos con atención de calidad, servicio profesional
            y todo lo necesario para tu motocicleta.
          </p>

          <p className="text-sm text-gray-200 mb-6">
            📍 Calle Venustiano Carranza #417, Col. El Carmen,
            Balancán, Tabasco
          </p>

          <div className="flex gap-4">
            <Link
              to="/servicios"
              className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500"
            >
              🛠️ Servicios
            </Link>

            <Link
              to="/opiniones"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
            >
              💬 Opiniones
            </Link>
          </div>

        </div>
      </div>

      {/* BIENVENIDA */}
      <div className="max-w-5xl mx-auto py-14 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6 text-black">
          Bienvenido
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Aquí podrás encontrar información sobre nuestros servicios, garantía,
          productos y más sobre nuestro taller.
        </p>

      </div>

      {/*  OPCIONES */}
      <div className="max-w-6xl mx-auto py-10 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">🛠️ Servicios</h3>
            <p className="text-gray-600 mb-3">
              Mantenimiento y reparación de motocicletas.
            </p>
            <Link to="/servicios" className="text-blue-700 font-semibold">
              Ver más →
            </Link>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">🛡️ Garantía</h3>
            <p className="text-gray-600 mb-3">
              Trabajos con respaldo y confianza.
            </p>
            <Link to="/garantia" className="text-blue-700 font-semibold">
              Ver más →
            </Link>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">💬 Opiniones</h3>
            <p className="text-gray-600 mb-3">
              Comparte tu experiencia con nosotros.
            </p>
            <Link to="/opiniones" className="text-blue-700 font-semibold">
              Ver más →
            </Link>
          </div>

        </div>

      </div>

      {/*  CARRUSEL */}
      <div className="bg-gray-100 py-12">

        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestro taller
        </h2>

        <div className="flex justify-center">
          <img
            src={imagenes[index]}
            className="w-[600px] h-[350px] object-cover rounded-lg shadow-lg transition duration-500"
          />
        </div>

      </div>

      {/*  PRODUCTOS */}
      <div className="bg-blue-900 text-white py-14 text-center">

      </div>

      {/*  WHATSAPP */}
      <a
  href="https://wa.me/529341832142?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
  target="_blank"
  className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 whatsapp-float whatsapp-bounce"
>
  <MessageCircle size={28} color="white" />
</a>
    </div>
  )
}