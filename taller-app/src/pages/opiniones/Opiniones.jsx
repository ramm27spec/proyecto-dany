import { useState } from "react";

export function Opiniones() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  const enviarOpinion = async () => {
    if (!nombre || !mensaje || estrellas === 0) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("https://proyecto-dany-lovat.vercel.app/api/opiniones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, mensaje, estrellas })
      });

      const data = await res.json();
      
      if (res.ok) {
        alert(data.mensaje || "¡Opinión guardada con éxito!");
        setNombre("");
        setMensaje("");
        setEstrellas(0);
      } else {
        alert("Error del servidor: " + (data.error || "No se pudo guardar"));
      }
    } catch (error) {
      console.error("Error al conectar:", error);
      alert("Error al enviar: Verifica tu conexión a internet");
    }
  };

  return (
    // CAMBIO AQUÍ: w-full y p-4 aseguran que se ajuste al ancho del celular
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4 overflow-x-hidden">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-blue-900">
          ⭐ Califica nuestro servicio
        </h2>

        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <textarea
          placeholder="Escribe tu opinión..."
          className="w-full mb-3 p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <div className="flex justify-center mb-4 text-3xl cursor-pointer">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => setEstrellas(num)}
              className={`transition-colors ${num <= estrellas ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>

        <button
          onClick={enviarOpinion}
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-transform active:scale-95"
        >
          Enviar opinión
        </button>
      </div>
    </div>
  );
}