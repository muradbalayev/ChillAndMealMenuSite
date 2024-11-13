import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("fastfood")

    const menuItems = [
        {
            id: 1,
            name: "Dəniz məhsulları salatı",
            image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
            duration: "20min",
            rating: 4.5,
            price: 5.0,
            category: "salads",
        },
        {
            id: 2,
            name: "Avokado salatı",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/07/avocado-salad.jpg",
            duration: "20min",
            rating: 4.5,
            price: 12.0,
            category: "salads",
        },
        {
            id: 3,
            name: "Toyuq kababı",
            image: "https://folt.az/wp-content/uploads/2023/07/Toyuq_Tepsi_Kabab_1662723369.jpg",
            duration: "20min",
            rating: 4.5,
            price: 12.0,
            category: "kababs",
        },
        {
            id: 4,
            name: "Ət kababı",
            image: "https://publika.az/storage/2017/07/03/kabab1.jpg",
            duration: "20min",
            rating: 4.5,
            price: 12.0,
            category: "kababs",
        },
        {
            id: 5,
            name: "Yumurta Pomidor",
            image: "https://mado.az/uploads/product/59/pomidor-yumurta_1577030806.jpg",
            duration: "10min",
            rating: 4.2,
            price: 8.0,
            category: "breakfast",
        },
        {
            id: 6,
            name: "Qaymaq",
            image: "https://mado.az/uploads/product/73/qaymaq_1577029284.jpg",
            duration: "5min",
            rating: 4.5,
            price: 3.0,
            category: "breakfast",
        },
        {
            id: 7,
            name: "Pizza Margherita",
            image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01",
            duration: "30min",
            rating: 4.7,
            price: 15.0,
            category: "fastfood",
        },
        {
            id: 8,
            name: "Pepperoni Pizza",
            image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01    ",
            duration: "30min",
            rating: 4.6,
            price: 18.0,
            category: "fastfood",
        },
        {
            id: 9,
            name: "Qarabağ Plovu",
            image: "https://greedy-panda.com/wp-content/uploads/2023/09/Ubbek-Plov-1600x1067.jpg.webp",
            duration: "40min",
            rating: 4.9,
            price: 20.0,
            category: "plov",
        },
        {
            id: 10,
            name: "Toyuq Plovu",
            image: "https://greedy-panda.com/wp-content/uploads/2023/09/Ubbek-Plov-1600x1067.jpg.webp",
            duration: "35min",
            rating: 4.8,
            price: 15.0,
            category: "plov",
        },
        {
            id: 11,
            name: "Döner",
            image: "https://imageproxy.wolt.com/venue/612362d89a4171001403701c/05114526-04d2-11ec-b591-0a738749434e_toyuq_doner_coreyde.jpg",
            duration: "10min",
            rating: 4.3,
            price: 5.5,
            category: "fastfood",
        },
        {
            id: 12,
            name: "Burger",
            image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
            duration: "15min",
            rating: 4.4,
            price: 8.0,
            category: "fastfood",
        },
        {
            id: 13,
            name: "Şorbə",
            image: "https://cdn.pixabay.com/photo/2015/09/02/12/45/soup-918422_1280.jpg",
            duration: "20min",
            rating: 4.5,
            price: 6.0,
            category: "soups",
        },
        {
            id: 14,
            name: "Lentil Soup",
            image: "https://cdn.pixabay.com/photo/2017/07/07/09/34/lentil-soup-2481188_1280.jpg",
            duration: "25min",
            rating: 4.6,
            price: 7.0,
            category: "soups",
        },
    ];

    const categories = [
        { value: "fastfood", label: "Fast Food" },
        { value: "salads", label: "Salatlar" },
        { value: "kababs", label: "Kabablar" },
        { value: "breakfast", label: "Səhər yeməyi" },
        { value: "plov", label: "Plov" }
    ];



    return (
        <motion.div className="h-full px-4 py-6 dark:bg-black dark:text-gray-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.h1
                className="text-3xl font-normal dark:text-gray-100 text-black"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Get Your <span className="font-black dark:text-gray-100 text-black">Best</span>
                <br />
                <span className="font-black dark:text-gray-100 text-black">Food</span> Around You
            </motion.h1>

            <div className="relative mt-6 flex items-center">
                <Search className="absolute left-3 h-4 w-4 dark:text-gray-400 text-gray-700" />
                <Input
                    className="pl-9 pr-12 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100"
                    placeholder="Search your favourite food"
                    type="search"
                />
                <Button size="icon" variant="ghost" className="absolute right-1 h-8 w-8">
                    <SlidersHorizontal className="h-4 w-4 dark:text-gray-400 text-gray-700" />
                    <span className="sr-only">Filter</span>
                </Button>
            </div>

            <div className="mt-6 flex flex-col items-center w-full">
                <div className="mt-6 flex flex-wrap gap-2 justify-center w-full">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setActiveCategory(category.value)}
                            className={`rounded-md px-5 py-2 text-base font-medium ${activeCategory === category.value ? "bg-black dark:bg-white dark:text-black text-white" : "bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-100"}`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 w-full ">
                    {menuItems.filter((item) => item.category === activeCategory).map((item) => (
                        <Link to={`/menu/${item.id}`} key={item.id} className="group">
                            <motion.div className="h-full" key={item.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                                <Card className="overflow-hidden dark:bg-gray-800 h-full">
                                    <CardHeader className="p-0">
                                        <div className="relative aspect-square">
                                            <img alt={item.name} className="object-cover w-full h-full" src={item.image} />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-3">
                                        <h3 className="text-lg font-semibold dark:text-gray-100 text-black">{item.name}</h3>
                                        <p className="text-sm dark:text-gray-400 text-gray-500">{item.duration} - ${item.price.toFixed(2)}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}