import { useState } from 'react'
import { motion } from "framer-motion"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

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
    <div className="min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-amber-400 mb-4 tracking-widest">GET IN TOUCH</motion.p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <motion.div variants={itemVariants} className="h-px w-12 bg-amber-400" />
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-serif"
            >
              Contact Us
            </motion.h1>
            <motion.div variants={itemVariants} className="h-px w-12 bg-amber-400" />
          </div>
          <motion.p variants={itemVariants} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question about our menu, want to make a reservation, or just want to say hello, we&apos;re here for you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-serif text-amber-400 mb-8">Contact Information</motion.h2>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <p>123 Gourmet Street, Foodie City, FC 12345</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <p>info@exquisiterestaurant.com</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-2xl font-serif text-amber-400 mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Thursday: 5:00 PM - 10:00 PM</li>
                <li>Friday - Saturday: 5:00 PM - 11:00 PM</li>
                <li>Sunday: 4:00 PM - 9:00 PM</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-serif text-amber-400 mb-8">Send Us a Message</motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white"
                  rows={6}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-amber-400 text-black hover:bg-amber-500"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
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