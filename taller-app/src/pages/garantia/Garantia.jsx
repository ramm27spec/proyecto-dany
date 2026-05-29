/*export function Garantia() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h2 className="text-3xl font-bold text-red-600 mb-6">
        Garantía Italika
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">

        <h3 className="font-bold text-lg mb-2">
          ¿Qué cubre la garantía?
        </h3>
        <p className="mb-4">
          La garantía cubre defectos de fábrica en el motor y en las
          piezas principales de la motocicleta.
        </p>

        <h3 className="font-bold text-lg mb-2">
          ¿Qué no cubre?
        </h3>
        <p className="mb-4">
          No cubre daños por accidentes, modificaciones a la moto o
          desgaste normal por uso.
        </p>

        <h3 className="font-bold text-lg mb-2">
          Duración de la garantía
        </h3>
        <p>
          La garantía tiene una duración de 12 meses o 12,000 km,
          lo que ocurra primero.
        </p>

      </div>

    </div>
  )
}*/

export function Garantia() {
  return (
    // Cambiamos max-w-7xl por w-full y agregamos p-4 para que no toque los bordes en cel
    <div className="w-full mx-auto px-4 py-8"> 

      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        Garantías
      </h1>

      {/* Cambiamos a grid-cols-1 para cel y md:grid-cols-2 para compu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">30 Días</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Sistema refrigerante (radiador)</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">6 Meses o 6000 KM</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Chicotes, Sistema eléctrico, Parachoques y parrillas</li>
            <li>Asiento por desprendimiento, Tijera, Araña velocímetro</li> 
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">12 Meses o 9000 KM</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Sistema de frenos, Rin y maza, Porta sprocket</li>
            <li>Diferencial, Flecha</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">2 y 4 Años de Garantía</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Transmisión, Cilindro, Pistón y anillos</li>
            <li>Cigüeñal, Bomba de aceite, Carter izquierdo y derecho</li>
          </ul>
        </div>

      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl mt-8">
        <p className="text-sm md:text-base text-gray-700 font-medium">
          ⚠️ Todas las garantías aplican únicamente realizando los servicios preventivos en tiempo y forma.
        </p>
      </div>

    </div>
  )
}