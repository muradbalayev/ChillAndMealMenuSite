
import { ArrowLeft, Clock, Flame, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Link, useParams } from "react-router-dom"

const foodItems = [
    {
        id: 1,
        name: "Dəniz məhsulları salatı",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        duration: "8-10 Dəq",
        rating: 4.5,
        price: 12.0,
        category: "salads",
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
        category: "salads",
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
        category: "kababs",
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
        category: "kababs",
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
        category: "breakfast",
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
        category: "breakfast",
        description: "Səhər yeməyi üçün qaymaq, təzə çörək və ya şirniyyatlarla",
        calories: 150,
        ingredients: ["🍶", "🍞"],
    },
    {
        id: 7,
        name: "Pizza Margherita",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01",
        duration: "30 dəq",
        rating: 4.7,
        price: 15.0,
        category: "fastfood",
        description: "Sadə marqarita pizza, təzə mozzarella pendiri, pomidor sousu və reyhan ilə",
        calories: 350,
        ingredients: ["🍅", "🧀", "🌿", "🍞"],
    },
    {
        id: 8,
        name: "Pepperoni Pizza",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01",
        duration: "30 dəq",
        rating: 4.6,
        price: 18.0,
        category: "fastfood",
        description: "Təzə mozzarella pendiri, pizza sousu və ədviyyatlı pepperoni dilimləri ilə pizza",
        calories: 400,
        ingredients: ["🍅", "🧀", "🌶️", "🍞", "🥓"],
    },
    {
        id: 9,
        name: "Qarabağ Plovu",
        image: "https://greedy-panda.com/wp-content/uploads/2023/09/Ubbek-Plov-1600x1067.jpg.webp",
        duration: "40 dəq",
        rating: 4.9,
        price: 20.0,
        category: "plov",
        description: "Ənənəvi Qarabağ plovu, quru meyvələr və ədviyyatlar ilə zənginləşdirilmiş düyü yeməyi",
        calories: 500,
        ingredients: ["🍚", "🍇", "🍖", "🌿"],
    },
    {
        id: 10,
        name: "Toyuq Plovu",
        image: "https://greedy-panda.com/wp-content/uploads/2023/09/Ubbek-Plov-1600x1067.jpg.webp",
        duration: "35 dəq",
        rating: 4.8,
        price: 15.0,
        category: "plov",
        description: "Toyuq ilə plov, tərəvəzlər və ədviyyatlar ilə zənginləşdirilmiş",
        calories: 450,
        ingredients: ["🍚", "🍗", "🧅", "🌶️", "🌿"],
    },
    {
        id: 11,
        name: "Döner",
        image: "https://imageproxy.wolt.com/venue/612362d89a4171001403701c/05114526-04d2-11ec-b591-0a738749434e_toyuq_doner_coreyde.jpg",
        duration: "10 dəq",
        rating: 4.3,
        price: 5.5,
        category: "fastfood",
        description: "Toyuq döner, ləzzətli souslarla, təzə çörək və ya lavaşda təqdim olunur",
        calories: 300,
        ingredients: ["🍗", "🍞", "🌿", "🥒", "🍅"],
    },
    {
        id: 12,
        name: "Burger",
        image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
        duration: "15 dəq",
        rating: 4.4,
        price: 8.0,
        category: "fastfood",
        description: "Ənənəvi burger, təzə tərəvəzlər, ət və sousla",
        calories: 500,
        ingredients: ["🍔", "🍅", "🥬", "🧀", "🥒"],
    },
    {
        id: 13,
        name: "Şorbə",
        image: "https://cdn.pixabay.com/photo/2015/09/02/12/45/soup-918422_1280.jpg",
        duration: "20 dəq",
        rating: 4.5,
        price: 6.0,
        category: "soups",
        description: "Təzə tərəvəzlərlə hazırlanmış dadlı və doyurucu şorba",
        calories: 150,
        ingredients: ["🍅", "🥬", "🌶️", "🧅"],
    },
    {
        id: 14,
        name: "Lentil Soup",
        image: "https://cdn.pixabay.com/photo/2017/07/07/09/34/lentil-soup-2481188_1280.jpg",
        duration: "25 dəq",
        rating: 4.6,
        price: 7.0,
        category: "soups",
        description: "Qırmızı merciməklə hazırlanmış, təbii ədviyyatlar ilə zənginləşdirilmiş şorba",
        calories: 200,
        ingredients: ["🥄", "🌿", "🌶️", "🍋"],
    },
];

export default function FoodPage() {
    const { id } = useParams()

    const foodItem = foodItems.find((item) => item.id === Number(id))
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
        )
    }



    return (
        <div className="flex flex-col h-screen md:hidden">
            <nav className="flex justify-between items-center px-4 my-6 text-black dark:text-white">
                <Link to="/">
                    <ArrowLeft className="h-6 w-6" />
                </Link>

            </nav>

            <main className="overflow-y-auto ">
                <div className="relative w-full h-96">
                    <img
                        src={foodItem.image}
                        alt={foodItem.name}

                        className=" object-cover w-full h-full"
                    />
                </div>

                <div className="p-4 space-y-4">

                    <p className="dark:text-gray-100 text-black text-lg">
                        {foodItem.description}
                    </p>

                    <div className="flex justify-between dark:text-gray-100 text-black">
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
                        <h2 className="font-semibold mb-2 dark:text-gray-100 text-black">Ingredientlər</h2>
                        <div className="flex space-x-4 ">
                            {foodItem.ingredients.map((ingredient, index) => (
                                <Card key={index} className="w-12 h-12 flex items-center  justify-center">
                                    <CardContent className="p-0 text-2xl">{ingredient}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-4 border-t flex justify-between items-center ">
                <div className="flex items-center gap-3">
                    <p className="text-xl dark:text-gray-100 text-gray-600">Qiymət:</p>
                    <p className="text-xl font-bold dark:text-gray-100 text-black">₼{foodItem.price.toFixed(2)}</p>
                </div>

            </footer>
        </div>
    )
}