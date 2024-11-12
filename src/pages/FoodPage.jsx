
import { ArrowLeft, Clock, Flame, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Link, useParams } from "react-router-dom"

const menuItems = [
    {
        id: 1,
        name: "Dəniz məhsulları salatı",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        duration: "8-10 Dəq",
        rating: 4.5,
        price: 12.0,
        category: "salatlar",
        description: "Təzə dəniz məhsulları salatı, kahı qarışığı, çerri pomidorlar, göyərti və zeytun yağı-limon sousu ilə",
        calories: 100,
        ingredients: ["🍤", "🍅", "🫒", "🥑", "🥬"],
    },
    {
        id: 2,
        name: "Avokado salatı",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/07/avocado-salad.jpg",
        duration: "5-8 Dəq",
        rating: 4.8,
        price: 10.0,
        category: "salatlar",
        description: "Təzə yaşıl yarpaqlar, çerri pomidorlar və limon vinaigrette ilə kremli avokado salatı",
        calories: 120,
        ingredients: ["🥑", "🍅", "🥬", "🫒", "🍋"],
    },
    {
        id: 3,
        name: "Toyuq kababı",
        image: "https://folt.az/wp-content/uploads/2023/07/Toyuq_Tepsi_Kabab_1662723369.jpg",
        duration: "15-20 Dəq",
        rating: 4.6,
        price: 15.0,
        category: "kabablar",
        description: "Ədviyyatlarla marinad edilmiş şirəli toyuq kababı, qızardılmış tərəvəzlərlə təqdim olunur",
        calories: 250,
        ingredients: ["🍗", "🧄", "🌶️", "🫑", "🌿"],
    },
    {
        id: 4,
        name: "Ət kababı",
        image: "https://publika.az/storage/2017/07/03/kabab1.jpg",
        duration: "20-25 Dəq",
        rating: 4.7,
        price: 18.0,
        category: "kabablar",
        description: "Yaxşı ədviyyatlarla hazırlanan ləzzətli qoyun əti kababı, mükəmməl qızardılmış",
        calories: 300,
        ingredients: ["🥩", "🧅", "🌶️", "🫑", "🌿"],
    },
    {
        id: 5,
        name: "Yumurta Pomidor",
        image: "https://mado.az/uploads/product/59/pomidor-yumurta_1577030806.jpg",
        duration: "5-7 Dəq",
        rating: 4.2,
        price: 6.0,
        category: "səhər yeməyi",
        description: "Ənənəvi Azərbaycan pomidor-yumurta qarışığı, ədviyyatlar ilə",
        calories: 200,
        ingredients: ["🥚", "🍅", "🧄", "🌶️", "🌿"],
    },
    {
        id: 6,
        name: "Qaymaq",
        image: "https://mado.az/uploads/product/73/qaymaq_1577029284.jpg",
        duration: "2-3 Dəq",
        rating: 4.3,
        price: 8.0,
        category: "səhər yeməyi",
        description: "Səhər yeməyi üçün mükəmməl, hamar və zəngin teksturaya malik təzə qaymaq",
        calories: 150,
        ingredients: ["🥛", "🌿", "🍞"],
    },
];


export default function FoodPage() {
    const { id } = useParams()

    const foodItem = menuItems.find((item) => item.id === Number(id))
    console.log(foodItem.image)

    if (!foodItem) {
        return (
            <>
            <nav className="flex justify-between items-center px-4 pt-8">
            <Link to="/">
                <button >
                    <ArrowLeft className="h-6 w-6" />
                </button>
            </Link>
          
        </nav>
        <div className="p-4">Food item not found</div>
        </>
    )}



    return (
        <div className="flex flex-col h-screen md:hidden">
            <nav className="flex justify-between items-center px-4 my-6">
                <Link to="/">          
                        <ArrowLeft className="h-6 w-6" />
                </Link>
         
            </nav>

            <main className="overflow-y-auto ">
                <div className="relative w-full h-64">
                    <img
                        src={foodItem.image}
                        alt={foodItem.name}

                        className="rounded-3xl object-cover w-full h-full"
                    />
                </div>

                <div className="p-4 space-y-4">

                    <p className="text-gray-600">
                        {foodItem.description}
                    </p>

                    <div className="flex justify-between">
                        <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="font-semibold">{foodItem.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Flame className="h-5 w-5 text-orange-500" />
                            <span>{foodItem.calories} kcal</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <span>{foodItem.duration}</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-2">Ingredientlər</h2>
                        <div className="flex space-x-4">
                            {foodItem.ingredients.map((ingredient, index) => (
                                <Card key={index} className="w-12 h-12 flex items-center justify-center">
                                    <CardContent className="p-0 text-2xl">{ingredient}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-4 border-t flex justify-between items-center bg-white">
                <div className="flex items-center gap-3">
                    <p className="text-xl text-gray-600">Qiymət:</p>
                    <p className="text-xl font-bold">₼{foodItem.price.toFixed(2)}</p>
                </div>
              
            </footer>
        </div>
    )
}