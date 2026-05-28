/*export function Servicios() {
  const servicios = [
    { km: "500 km", detalle: "Cambio de aceite y revisión general", precio: "$450" },
    { km: "1000 km", detalle: "Ajuste de frenos y cadena", precio: "$350" },
    { km: "4000 km", detalle: "Servicio completo preventivo", precio: "$900" } 
  ]

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">
        Servicios por Kilometraje
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-800">{servicio.km}</h3>
            <p className="mt-2">{servicio.detalle}</p>
            <p className="mt-4 font-semibold text-yellow-600">
              {servicio.precio}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}*/

export function Servicios() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Servicios Preventivos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Servicio 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 1
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Cambio de aceite</li>
            <li>Ajuste de frenos</li>
            <li>Lubricación de chicotes</li>
            <li>Ajuste de cadena</li>
            <li>Calibración de llantas</li>
          </ul>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 2
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Cambio de aceite</li>
            <li>Limpieza de filtro de aire</li>
            <li>Ajuste de frenos</li>
            <li>Apriete de tornillería</li>
            <li>Lavado de motocicleta</li>
          </ul>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 3
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Cambio de bujía</li>
            <li>Limpieza de carburador</li>
            <li>Ajuste de cadena</li>
            <li>Calibración de punterías</li>
            <li>Engrasado delantero</li>
          </ul>
        </div>

        {/* Servicio 4 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 4
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Cambio de aceite</li>
            <li>Revisión general</li>
            <li>Ajuste de frenos</li>
            <li>Lubricación de cadena</li>
            <li>Lavado completo</li>
          </ul>
        </div>

        {/* Servicio 5 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 5
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Cambio de aceite</li>
            <li>Cambio de bujía</li>
            <li>Ajuste completo</li>
            <li>Limpieza de carburador</li>
            <li>Calibración de llantas</li>
          </ul>
        </div>

        {/* Servicio 6 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
            Servicio 6
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Servicio preventivo completo</li>
            <li>Limpieza general</li>
            <li>Ajuste total</li>
            <li>Revisión de seguridad</li>
            <li>Lavado profesional</li>
          </ul>
        </div>

      </div>

    </div>
  )
}