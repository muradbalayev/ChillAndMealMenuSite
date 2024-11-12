import Menu from "@/components/user/Home/Menu"
import Hero from "../components/user/Home/Hero"
import DesktopMenu from "@/components/user/Home/MenuDesktop"

function HomePage() {
    return (
        <>
            <div className="wrapper w-full flex flex-col">
                <div className="md:block hidden">
                    <Hero />
                    <DesktopMenu/>
                </div>
                <div className="md:hidden block">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default HomePage