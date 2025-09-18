"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Share2, Facebook, Twitter, Linkedin, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonProps {
  url: string
  title: string
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const shareOptions = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ]

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Share project">
        <Share2 className="h-4 w-4" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-2 bg-white shadow-lg rounded-md z-10"
          >
            <Button variant="ghost" size="icon" className="absolute top-1 right-1" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
            <div className="grid grid-cols-2 gap-2 pt-6">
              {shareOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <option.icon className="h-5 w-5 mr-2" />
                  <span className="text-sm">{option.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

