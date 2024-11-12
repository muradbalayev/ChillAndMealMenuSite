import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="dark:bg-black dark:text-white text-black py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="gap-4 flex flex-col md:items-start items-center animate-fade-in">
          <h3 className="text-2xl font-serif dark:text-gray-100 text-black">Chill And Meal</h3>
          <p className="dark:text-gray-400 text-gray-700">
            Ən yaxşı inqrediyentlərlə hazırladığımız diqqətlə bişirilmiş yeməklərimizin dadını çıxarın.
          </p>
          <div className="flex space-x-4">
            <Button size="icon"  className="rounded-full">
              <Facebook className="h-4 w-4 " />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button size="icon" className="rounded-full">
              <Instagram className="h-4 w-4 " />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button size="icon"  className="rounded-full">
              <Twitter className="h-4 w-4 " />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-200">
          <h4 className="text-xl font-medium dark:text-gray-100 text-black">Bizimlə Əlaqə</h4>
          <p className="dark:text-gray-400 text-gray-700">123 Gourmet Küçəsi</p>
          <p className="dark:text-gray-400 text-gray-700">Foodie Şəhəri, FC 12345</p>
          <p className="dark:text-gray-400 text-gray-700">Telefon: (123) 456-7890</p>
          <p className="dark:text-gray-400 text-gray-700">E-poçt: info@chillandmeal.com</p>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-400">
          <h4 className="text-xl font-medium dark:text-gray-100 text-black">İş Saatları</h4>
          <p className="dark:text-gray-400 text-gray-700">Bazar ertəsi - Cümə: 11:00 - 22:00</p>
          <p className="dark:text-gray-400 text-gray-700">Şənbə - Bazar: 10:00 - 23:00</p>
          <p className="dark:text-amber-400 text-amber-500">Happy Hour: Hər gün 16:00 - 18:00</p>
        </div>

        <div className="space-y-4 animate-fade-in animation-delay-600">
          <h4 className="text-xl font-medium dark:text-gray-100 text-black">Bülleten</h4>
          <p className="dark:text-gray-400 text-gray-700">Xüsusi təkliflər və yeniliklər üçün bülletenimizə abunə olun.</p>
          <form className="space-y-2">
            <Input type="email" placeholder="Sizin e-poçt ünvanınız" className="dark:bg-gray-800 border-gray-700" />
            <Button className="w-full dark:bg-amber-400 bg-amber-500 text-black hover:bg-amber-500">Abunə Olun</Button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center dark:text-gray-400 text-gray-700 animate-fade-in animation-delay-800">
        <p>&copy; 2024 Ləzzətli Menyu. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  )
}
