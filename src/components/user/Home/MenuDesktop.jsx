import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    name: "Greek Salad",
    price: 25.50,
    description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
    tag: "SEASONAL"
  },
  {
    name: "Butternut Pumpkin",
    price: 10.00,
    description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg"
  },
  {
    name: "Olivas Rellenas",
    price: 25.00,
    description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg"
  },
  {
    name: "Lasagne",
    price: 40.00,
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg"
  },
  {
    name: "Tokusen Wagyu",
    price: 39.00,
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
    tag: "NEW"
  },
  {
    name: "Opu Fish",
    price: 49.00,
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg"
  }
]

export default function DesktopMenu() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }



  return (
    <div className="hidden md:block min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 mb-4 tracking-widest">SPECIAL SELECTION</p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-8 bg-amber-400" />
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-5xl font-serif"
            >
              Delicious Menu
            </motion.h1>
            <div className="h-px w-8 bg-amber-400" />
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-x-24 gap-y-12 mb-16"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-4 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <Badge variant="outline" className="bg-amber-400/10 text-amber-400 border-amber-400/20">
                        {item.tag}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-12 bg-amber-400/30" />
                    <span className="text-xl font-medium text-amber-400">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center space-y-8">
          <p className="text-gray-400">
            During winter daily from{" "}
            <span className="text-amber-400">7:00 pm</span> to{" "}
            <span className="text-amber-400">9:00 pm</span>
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              className=" text-amber-600 font-bold hover:bg-amber-400 hover:text-black"
            >
              VIEW ALL MENU
            </Button>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -5 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-amber-400 text-black"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}