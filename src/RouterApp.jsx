import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FoodPage from "./pages/FoodPage"
import Layout from "./layout/Layout"
import ChefsPage from "./pages/ChefsPage"
import AboutUs from "./pages/AboutUsPage"
import MenuPage from "./pages/MenuPage"
import ContactPage from "./pages/ContactPage"

const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/menu" element={<MenuPage/>} />
                    <Route path="/chefs" element={<ChefsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/menu/:id" element={<FoodPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default RouterApp
