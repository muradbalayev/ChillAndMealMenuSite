
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const chefs = [
  {
    name: "John Doe",
    role: "Head Chef",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg",
    bio: "With over 15 years of experience, John brings a wealth of culinary knowledge to our kitchen.",
    specialties: ["French Cuisine", "Molecular Gastronomy"]
  },
  {
    name: "Jane Smith",
    role: "Pastry Chef",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg",
    bio: "Jane's passion for desserts has led to the creation of our most iconic sweet treats.",
    specialties: ["Artisan Breads", "Gourmet Desserts"]
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg",
    bio: "Mike's innovative approach to traditional dishes adds a unique flair to our menu.",
    specialties: ["Fusion Cuisine", "Farm-to-Table"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const ChefsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Meet Our Culinary Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 group rounded-lg overflow-hidden shadow-lg"
            >
              <motion.img
                src={chef.image}
                alt={chef.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                // whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{chef.name}</h2>
                <p className="text-amber-400 mb-4">{chef.role}</p>
                <p className="text-gray-400 mb-4">{chef.bio}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Specialties:</h3>
                  <ul className="list-disc list-inside text-gray-400">
                    {chef.specialties.map((specialty, idx) => (
                      <li key={idx}>{specialty}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <Facebook />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <Instagram />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <Twitter />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ChefsPage