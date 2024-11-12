import { motion } from "framer-motion"
import { ArrowUp, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      {
        name: "Greek Salad",
        price: 25.50,
        description: "Fresh tomatoes, crisp cucumber, sliced red onion, Kalamata olives, and crumbled feta cheese. Dressed with extra virgin olive oil and oregano.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        tag: "SEASONAL",
        dietaryInfo: ["Vegetarian", "Gluten-Free"]
      },
      {
        name: "Butternut Pumpkin Soup",
        price: 10.00,
        description: "Creamy soup made with roasted butternut squash, onions, and a blend of aromatic spices. Served with a dollop of crème fraîche and toasted pumpkin seeds.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        dietaryInfo: ["Vegetarian"]
      },
      {
        name: "Olivas Rellenas",
        price: 25.00,
        description: "Large green olives stuffed with almond-garlic paste, lightly breaded and fried. Served with a side of zesty tomato sauce.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        dietaryInfo: ["Vegetarian"]
      },
    ]
  },
  {
    name: "Main Courses",
    items: [
      {
        name: "Lasagne alla Bolognese",
        price: 40.00,
        description: "Layers of fresh pasta sheets, rich Bolognese sauce, béchamel, and a blend of Parmigiano-Reggiano and mozzarella cheeses. Baked to golden perfection.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
      },
      {
        name: "Tokusen Wagyu Steak",
        price: 89.00,
        description: "Premium A5 grade Japanese Wagyu beef, grilled to your preference. Served with truffle mashed potatoes and seasonal vegetables.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        tag: "CHEF'S SPECIAL",
        dietaryInfo: ["Gluten-Free"]
      },
      {
        name: "Grilled Mediterranean Sea Bass",
        price: 49.00,
        description: "Fresh sea bass fillet, grilled with lemon and herbs. Accompanied by sautéed spinach and roasted cherry tomatoes.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        dietaryInfo: ["Gluten-Free"]
      },
    ]
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Tiramisu",
        price: 15.00,
        description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream. Dusted with cocoa powder.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        tag: "POPULAR"
      },
      {
        name: "Crème Brûlée",
        price: 12.00,
        description: "Silky vanilla custard topped with a layer of caramelized sugar. Served with fresh berries.",
        image: "https://cicili.tv/wp-content/uploads/2024/02/Seafood-Salad-Small-2.jpg",
        dietaryInfo: ["Gluten-Free"]
      },
    ]
  }
]

export default function MenuPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="dark:text-white text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="dark:text-amber-400 text-black mb-4 tracking-widest">CULINARY EXCELLENCE</motion.p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <motion.div variants={itemVariants} className="h-px w-12 dark:bg-amber-400 bg-black" />
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-serif dark:text-white text-black"
            >
              Our Exquisite Menu
            </motion.h1>
            <motion.div variants={itemVariants} className="h-px w-12 dark:bg-amber-400 bg-black" />
          </div>
          <motion.p variants={itemVariants} className="dark:text-gray-400 text-gray-500 mt-4 max-w-2xl mx-auto">
            Indulge in a symphony of flavors crafted with the finest ingredients and culinary expertise.
            Our menu celebrates both tradition and innovation, offering a memorable dining experience.
          </motion.p>
        </motion.div>

        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-serif dark:text-amber-400 text-black mb-8 text-center"
            >
              {category.name}
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={itemVariants}
                  className="flex gap-6 group"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-medium dark:text-white text-black group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <Badge variant="outline" className="dark:bg-amber-400/10 bg-gray-100 dark:text-amber-400 border-amber-400/20">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-px w-12 dark:bg-amber-400/30 bg-black" />
                        <span className="text-2xl font-medium dark:text-amber-400 text-black">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                    {item.dietaryInfo && (
                      <div className="flex gap-2">
                        {item.dietaryInfo.map((info, infoIndex) => (
                          <Badge key={infoIndex} variant="secondary" className="bg-gray-800 text-gray-200">
                            {info}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="text-center space-y-8 dark:bg-gray-900 bg-gray-100 p-8 rounded-lg"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-serif dark:text-amber-400 text-gray-900">Restaurant Information</motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500">
              <Clock className="w-5 h-5 dark:text-amber-400 text-gray-500" />
              <p>Open daily: 5:00 PM - 11:00 PM</p>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500">
              <MapPin className="w-5 h-5 dark:text-amber-400 text-gray-500" />
              <p>123 Gourmet Street, Foodie City</p>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500">
              <Phone className="w-5 h-5 dark:text-amber-400 text-gray-500" />
              <p>Reservations: (555) 123-4567</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              className=" text-black dark:text-amber-400 hover:bg-amber-400 dark:hover:text-black"
            >
              MAKE A RESERVATION
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -5 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-amber-400 text-black"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}