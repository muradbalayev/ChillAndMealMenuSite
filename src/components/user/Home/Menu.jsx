import { Search, SlidersHorizontal  } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("salads")

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
            duration: "20min",
            rating: 4.5,
            price: 12.0,
            category: "breakfast",
        },
        {
            id: 6,
            name: "Qaymaq",
            image: "https://mado.az/uploads/product/73/qaymaq_1577029284.jpg",
            duration: "20min",
            rating: 4.5,
            price: 12.0,
            category: "breakfast",
        },

    ]

    return (
        <motion.div
            className="px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                className="text-3xl font-normal"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Get Your <span className="font-black">Best</span>
                <br />
                <span className="font-black">Food</span> Around You
            </motion.h1>

            <div className="relative mt-6 flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input
                    className="pl-9 pr-12"
                    placeholder="Search your favourite food"
                    type="search"
                />
                <Button
          size="icon"
          variant="ghost"
          className="absolute right-1  h-8 w-8"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
            </div>

            <div className="mt-6 flex flex-col items-center w-full">

                <Tabs
                    defaultValue="salads"
                    className="mt-4"
                    onValueChange={setActiveCategory}
                >
                    <TabsList>
                        <TabsTrigger value="salads" className="rounded-md">
                            Salatlar
                        </TabsTrigger>
                        <TabsTrigger value="kababs" className="rounded-md">
                            Kabablar
                        </TabsTrigger>
                        <TabsTrigger value="breakfast" className="rounded-md">
                            Səhər yeməyi
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                    {menuItems
                        .filter((item) => item.category === activeCategory)
                        .map((item) => (
                            <Link to={`/menu/${item.id}`} key={item.id} className="group" >
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    // transition={{ type: "spring", stiffness: 300 }}
                                >

                                    <Card className="overflow-hidden">
                                        <CardHeader className="p-0">
                                            <div className="relative aspect-square">
                                                <img
                                                    alt={item.name}
                                                    className="object-cover w-full h-full"
                                                    src={item.image}
                                                />
                                                {/* <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/50 backdrop-blur-sm"
                      >
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to favorites</span>
                      </Button> */}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-3">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                                {/* <span>{item.duration}</span> */}
                                                {/* <span className="flex items-center gap-1">
                                                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                                                    {item.rating}
                                                </span> */}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-3 pt-0">
                                            <div className="flex w-full items-center justify-between">
                                                <span className="font-semibold">₼{item.price.toFixed(2)}</span>
                                                {/* <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                      </Button> */}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>

                            </Link>
                        ))}
                </div>
            </div>
        </motion.div>
    )
}