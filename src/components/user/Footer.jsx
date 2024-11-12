import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-2xl font-serif">Delicious Menu</h3>
          <p className="text-gray-400">
            Savor the flavors of our carefully crafted dishes, made with the finest ingredients.
          </p>
          <div className="flex space-x-4">
            <Button size="icon" variant="outline" className="rounded-full">
              <Facebook className="h-4 w-4 text-black" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Instagram className="h-4 w-4 text-black" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Twitter className="h-4 w-4 text-black" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-200">
          <h4 className="text-xl font-medium">Contact Us</h4>
          <p className="text-gray-400">123 Gourmet Street</p>
          <p className="text-gray-400">Foodie City, FC 12345</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@deliciousmenu.com</p>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-400">
          <h4 className="text-xl font-medium">Opening Hours</h4>
          <p className="text-gray-400">Monday - Friday: 11am - 10pm</p>
          <p className="text-gray-400">Saturday - Sunday: 10am - 11pm</p>
          <p className="text-amber-400">Happy Hour: 4pm - 6pm daily</p>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-600">
          <h4 className="text-xl font-medium">Newsletter</h4>
          <p className="text-gray-400">Subscribe to our newsletter for special offers and updates.</p>
          <form className="space-y-2">
            <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
            <Button className="w-full bg-amber-400 text-black hover:bg-amber-500">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 animate-fade-in animation-delay-800">
        <p>&copy; 2024 Delicious Menu. All rights reserved.</p>
      </div>
    </footer>
  )
}