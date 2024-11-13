import { Menu } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom"




export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full dark:text-white text-black bg-background/95 dark:bg-black backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex w-full h-14 items-center justify-between px-5 py-5">
          <button onClick={() => setIsOpen(true)}>
            <Menu  size={28} className="dark:text-white text-black"/>
            <span className="sr-only">Toggle menu</span>
          </button>
          {/* <form className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search your favourit food" className="pl-8" />
              </div>
            </form> */}
          <div className="flex gap-2 items-center">
            <button
              onClick={toggleTheme}
              className='rounded-full transition-all hover:scale-110'
              aria-label="Toggle dark mode"
            >
              {isDarkTheme ? <BiSun className="text-gray-900 dark:text-white" size={30} /> : <FaMoon className="text-gray-900 dark:text-white" size={27} />}
            </button>
            {/* <Search size={28} className="dark:text-white text-black"/>
            <span className="sr-only">Search</span> */}
          </div>

        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm "
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-y-0 left-0 z-50 h-full w-3/4 border-r bg-background p-6 shadow-lg "
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold dark:text-white text-black">Menu</h2>
                <nav className="flex flex-col gap-4 dark:text-white text-black">
                  <Link onClick={() => setIsOpen(false)} to="/" className="text-lg font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link onClick={() => setIsOpen(false)} to="chefs" className="text-lg font-medium hover:text-primary">
                    Chefs
                  </Link>
                  <Link onClick={() => setIsOpen(false)} to="/about" className="text-lg font-medium hover:text-primary">
                    About Us
                  </Link>
                  <Link onClick={() => setIsOpen(false)} to="/contact" className="text-lg font-medium hover:text-primary">
                    Contact
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}