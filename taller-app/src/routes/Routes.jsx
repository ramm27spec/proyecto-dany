
import { Routes, Route } from "react-router-dom"
import { Home, Servicios, Garantia, Opiniones, Acerca, Cliente } from "../pages"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/garantia" element={<Garantia />} />
      <Route path="/opiniones" element={<Opiniones />} />
      <Route path="/acerca" element={<Acerca />} />
     <Route path="/cliente" element={<Cliente />} />
    </Routes>
  )
}