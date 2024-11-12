import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "John Doe",
    role: "Executive Chef",
    description: "With over 20 years of culinary experience, John brings innovation and tradition to every dish.",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg"
  },
  {
    name: "Jane Smith",
    role: "Sous Chef",
    description: "Jane's passion for local ingredients shines through in her creative and delicious creations.",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Pastry Chef",
    description: "Mike's exquisite desserts are the perfect finale to any meal at our restaurant.",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg"
  },
  {
    name: "Sarah Lee",
    role: "Restaurant Manager",
    description: "Sarah ensures that every guest has an unforgettable dining experience from start to finish.",
    image: "https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg"
  }
]

export default function AboutUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 mb-4 tracking-widest">OUR STORY</p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-8 bg-amber-400" />
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-5xl font-serif"
            >
              About Us
            </motion.h1>
            <div className="h-px w-8 bg-amber-400" />
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.p variants={item} className="text-gray-400 text-lg mb-8 text-center max-w-3xl mx-auto">
            Founded in 2010, our restaurant has been serving exquisite cuisine and unforgettable dining experiences for over a decade. We pride ourselves on using only the freshest, locally-sourced ingredients to create innovative dishes that delight the senses.
          </motion.p>
          <motion.p variants={item} className="text-gray-400 text-lg mb-8 text-center max-w-3xl mx-auto">
            Our mission is to provide our guests with not just a meal, but a journey through flavors, textures, and culinary traditions from around the world, all while maintaining a commitment to sustainability and supporting our local community.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-x-24 gap-y-12 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-4 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium group-hover:text-amber-400 transition-colors">
                      {member.name}
                    </h3>
                    <Badge variant="outline" className="bg-amber-400/10 text-amber-400 border-amber-400/20">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center space-y-8">
          <p className="text-gray-400">
            Join us for an unforgettable dining experience{" "}
            <span className="text-amber-400">7 days a week</span>, from{" "}
            <span className="text-amber-400">5:00 pm</span> to{" "}
            <span className="text-amber-400">11:00 pm</span>
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              className=" text-black hover:bg-black hover:text-white"
            >
              MAKE A RESERVATION
            </Button>
          </motion.div>
        </div>

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