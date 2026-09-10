import Link from "next/link"
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from "@/components";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" }
]



export const Navbar = () => {


  return (
    <div>
      <nav className="flex bg-blue-800/30 p-2 m-2 rounded">
        <Link href={"/"} className="flex items-center">
          <HomeIcon className="mr-2" />
          <span>Home</span>
        </Link>

        {/* Esto es para que tome todo el espacio en en medio */}
        <div className="flex flex-1"></div>

        {
          navItems.map(navItem => (
            // Podemos utilizar navItem dado a que sabemos que contiene todo lo que necesitamos para cumplir con los valores de "ActiveLink"
            <ActiveLink key={navItem.path} {...navItem} />
          ))
        }

      </nav>
    </div>
  )
}