import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <>
      {/* Top contact bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(888) 929-0045</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@armautoparts.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Welcome to Arm Auto Parts</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/arm-logo.png" alt="Arm Auto Parts" width={120} height={40} className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/headlights" className="text-foreground hover:text-primary transition-colors">
                Used Headlights
              </Link>
              <Link href="/transmission" className="text-foreground hover:text-primary transition-colors">
                Used Transmission
              </Link>
              <Link href="/truck-parts" className="text-foreground hover:text-primary transition-colors">
                Truck Parts
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
