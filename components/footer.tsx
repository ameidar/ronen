import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import ContactFormFooter from './ContactFormFooter'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <Image src="/logo-black.png" alt="MEIDAR ARCHITECTS Logo" width={150} height={75} className="mb-6 invert" />
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+972524093549" className="hover:underline">
                    052-409-3549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:ronen.meidar@gmail.com" className="hover:underline">
                    ronen.meidar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Office Locations</p>
                  <div>
                    <p>South branch: Jabutinski 10, Gedera</p>
                    <p>North branch: Kibuts Ginosar</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.instagram.com/ronen_meidar_architecture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/ronen.meidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-8">Send us a Message</h2>
            <ContactFormFooter />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm">
          <p>© {new Date().getFullYear()} MEIDAR ARCHITECTS. All rights reserved.</p>
        </div>
        <div dir="ltr" className="flex justify-center mt-12">
          <a
            className="group/button relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium overflow-hidden transition-all duration-300 bg-[#454641]/20 hover:bg-[#454641]/40 rounded-2xl border border-[#ACAEB1]/10"
            href="https://idanshlomo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10 flex items-center">
              <span className="text-xs font-medium text-[#ACAEB1] mr-2">Made by</span>
              <Image
                className="mr-2 group-hover/button:rotate-12 transition-transform duration-300"
                src="/is-logo.svg"
                alt="Idan Shlomo Logo"
                width={25}
                height={25}
              />
              <span className="font-medium text-sm bg-gradient-to-r from-[#DCDDE1] via-[#DCDDE1]/90 to-[#DCDDE1]/80 bg-clip-text text-transparent">
                Idan Shlomo
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
