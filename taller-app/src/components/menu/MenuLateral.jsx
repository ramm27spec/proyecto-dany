import * as Icons from "lucide-react"
import { Link } from "react-router-dom"

export function MenuLateral() {

  const menuItems = [
    { name: "Inicio", path: "/", icon: Icons.Home },
    { name: "Servicios", path: "/servicios", icon: Icons.Wrench },
    { name: "Garantía", path: "/garantia", icon: Icons.ShieldCheck },
    { name: "Opiniones", path: "/opiniones", icon: Icons.MessageSquare },
    { name: "Acerca", path: "/acerca", icon: Icons.Info }
  ]

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">

      <h2 className="text-2xl font-bold mb-6">
        Taller Italika
      </h2>

      {menuItems.map((item) => {
        const Icon = item.icon

        return (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
          >
            <Icon size={20} />
            <span>{item.name}</span>
          </Link>
        )
      })}

    </div>
  )
}