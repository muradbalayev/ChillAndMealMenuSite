import { ThemeContext } from "@/context/ThemeContext"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";

// import logo from '../../assets/logoRestaurant.svg'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav>
            {/* Top Bar */}
            <div className="hidden w-full dark:bg-black/95 px-4 py-2 dark:text-white/90 md:block">
                <div className="mx-auto flex items-center justify-between text-sm">
                    <div className="flex items-center gap-8">
                        <div className="flex text-black dark:text-gray-100 items-center gap-2">
                            <MapPin className="text-black dark:text-gray-100" size={16} />
                            <span>Restaurant St, Baku, Azerbaijan</span>
                        </div>
                        <div className="flex items-center gap-2 text-black dark:text-gray-100">
                            <Clock className="text-black dark:text-gray-100" size={16} />
                            <span>Daily : 8:00 am to 10:00 pm</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 ">
                        <div className="flex items-center gap-2 text-black dark:text-gray-100">
                            <Phone className="text-black dark:text-gray-100" size={16} />
                            <span>+994 123 456 7890</span>
                        </div>
                        <div className="flex items-center gap-2 text-black dark:text-gray-100">
                            <Mail className="text-black dark:text-gray-100" size={16} />
                            <span>booking@restaurant.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="sticky top-0 z-50 w-full dark:bg-black/95 dark:text-white px-4">
                <div className="mx-auto flex  items-center justify-between py-4">
                    {/* Logo */}
                    <Link to="/" className="overflow-hidden dark:text-white text-black font-bold text-xl">
                        {/* <img src={logo} alt="logo" className="w-full h-full object-cover" /> */}
                        <p> Chill and Meal</p>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden dark:text-white text-black items-center gap-8 md:flex">
                        <Link to="/" className="nav-link font-medium hover:text-gold">HOME</Link>
                        <Link to="/menu" className="nav-link font-medium hover:text-gold">MENUS</Link>
                        <Link to="/about" className="nav-link font-medium hover:text-gold">ABOUT US</Link>
                        <Link to="/chefs" className="nav-link font-medium hover:text-gold">OUR CHEFS</Link>
                        <Link to="/contact" className="nav-link font-medium hover:text-gold">CONTACT</Link>
                    </div>

                    {/* Find a Table Button */}
                    <div className="flex items-center gap-2">

                        <button
                            onClick={toggleTheme}
                            className='rounded-full transition-all hover:scale-110'
                            aria-label="Toggle dark mode"
                        >
                            {isDarkTheme ? <BiSun className="text-gray-900 dark:text-white" size={30} /> : <FaMoon className="text-gray-900 dark:text-white" size={27} />}
                        </button>
                        <button className="hidden bg-amber-400 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 md:block">
                            FIND A TABLE
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link href="/" className="block px-3 py-2 text-white">HOME</Link>
                            <Link href="/menus" className="block px-3 py-2 text-white">MENUS</Link>
                            <Link href="/about" className="block px-3 py-2 text-white">ABOUT US</Link>
                            <Link href="/chefs" className="block px-3 py-2 text-white">OUR CHEFS</Link>
                            <Link href="/contact" className="block px-3 py-2 text-white">CONTACT</Link>
                        </div>
                    </div>
                )}
            </nav>
        </nav>
    )
}
export default Navbar