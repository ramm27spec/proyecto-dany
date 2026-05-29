/*import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">

      {}
      <div className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="logo"
          className="w-10 h-10"
        />
        <h1 className="font-bold text-xl">
          Taller Italika
        </h1>
      </div>

      {}
      <div className="flex gap-6">

        <Link to="/" className="hover:text-yellow-400">
          Inicio
        </Link>

        <Link to="/servicios" className="hover:text-yellow-400">
          Servicios
        </Link>

        <Link to="/garantia" className="hover:text-yellow-400">
          Garantía
        </Link>

        <Link to="/opiniones" className="hover:text-yellow-400">
          Opiniones
        </Link>

        <Link to="/acerca" className="hover:text-yellow-400">
          Acerca
        </Link>

        <Link to="/cliente" className="hover:text-yellow-400">
          Clientes
        </Link>

      </div>

    </div>
  )
}

/*export function Navbar() {
  return (
    <div style={{ background: "blue", color: "white" }}>
      MENU
    </div>
  )
}*/

/*import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <div style={{ background: "#1e3a8a", color: "white", padding: "15px" }}>
      
      <span style={{ fontWeight: "bold", marginRight: "20px" }}>
        Taller Italika
      </span>

      <Link to="/" style={{ color: "white", marginRight: "10px" }}>
        Inicio
      </Link>

      <Link to="/servicios" style={{ color: "white", marginRight: "10px" }}>
        Servicios
      </Link>

      <Link to="/garantia" style={{ color: "white", marginRight: "10px" }}>
        Garantía
      </Link>

      <Link to="/opiniones" style={{ color: "white", marginRight: "10px" }}>
        Opiniones
      </Link>

      <Link to="/acerca" style={{ color: "white", marginRight: "10px" }}>
        Acerca
      </Link>

    </div>
  )
}
*/


import { Link } from "react-router-dom"
import { Home, Wrench, ShieldCheck, MessageSquare, Info } from "lucide-react"

export function Navbar() {
  return (
    <div className="bg-blue-950 text-white shadow-md">

      {/* Parte superior */}
      <div className="px-6 py-4 border-b border-blue-800 md:px-10">
        <h1 className="text-2xl font-bold md:text-3xl">
          Italika 
        </h1>
      </div>

      {/* Menú: Agregamos flex-wrap para que se acomode en celular */}
      <div className="flex flex-wrap gap-4 px-4 py-3 text-sm items-center justify-center md:gap-10 md:px-10 md:text-lg md:justify-start">

        <Link to="/" className="flex items-center gap-2 hover:text-yellow-400">
          <Home size={18} />
          Inicio
        </Link>

        <Link to="/servicios" className="flex items-center gap-2 hover:text-yellow-400">
          <Wrench size={18} />
          Servicios
        </Link>

        <Link to="/garantia" className="flex items-center gap-2 hover:text-yellow-400">
          <ShieldCheck size={18} />
          Garantía
        </Link>

        <Link to="/opiniones" className="flex items-center gap-2 hover:text-yellow-400">
          <MessageSquare size={18} />
          Opiniones
        </Link>

        <Link to="/acerca" className="flex items-center gap-2 hover:text-yellow-400">
          <Info size={18} />
          Acerca
        </Link>

      </div>
    </div>
  )
}