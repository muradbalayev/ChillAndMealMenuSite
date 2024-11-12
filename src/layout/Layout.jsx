import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/user/Navbar'
import MobileNavbar from '@/components/user/MobileNavbar'
import Footer from '@/components/user/Footer';

const Layout = () => {
    const location = useLocation();

    return (
        <div className='max-w-[1920px] mx-auto'>
            <div className='md:block hidden'>
            {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/menu' || location.pathname === '/chefs' || location.pathname === '/contact') && <Navbar />}
            </div>
            <div className='md:hidden block'>
                {location.pathname === '/' && <MobileNavbar />}
            </div>
            <Outlet />
            <div className=''>
            {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/menu' || location.pathname === '/chefs' || location.pathname === '/contact') && <Footer />}
        </div>
        </div>
    )
}

export default Layout
