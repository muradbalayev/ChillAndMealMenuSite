import { Menu, Search } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex w-full h-14 items-center justify-between px-5 pt-5">
          <button>
            <Menu  size={25}/>
            <span className="sr-only">Toggle menu</span>
          </button>
            {/* <form className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search your favourit food" className="pl-8" />
              </div>
            </form> */}
              <Search size={25} />
              <span className="sr-only">Search</span>
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
                <h2 className="text-2xl font-bold">Menu</h2>
                <nav className="flex flex-col gap-4">
                  <a href="#" className="text-lg font-medium hover:text-primary">
                    Home
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-primary">
                    Categories
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-primary">
                    Orders
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-primary">
                    Profile
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}