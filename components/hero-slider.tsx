'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/hero/1.jpg',
    title: 'We Design & Build your dreams',
    subtitle: 'Luxury Residential Architecture',
  },
  {
    image: '/hero/2.jpg',
    title: 'Creating Timeless Architecture',
    subtitle: 'Innovative Design Solutions',
  },
  {
    image: '/hero/3.jpg',
    title: 'Luxury Living Spaces',
    subtitle: 'Bespoke Architectural Excellence',
  },
  {
    image: '/hero/4.png',
    title: 'Creating Timeless Architecture',
    subtitle: 'Innovative Design Solutions',
  },
  {
    image: '/hero/5.jpg',
    title: 'Luxury Living Spaces',
    subtitle: 'Bespoke Architectural Excellence',
  },
]

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000} // Increased transition speed between slides
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img src={slide.image || '/placeholder.svg'} alt={slide.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 " />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                  {/* <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-4 max-w-4xl">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-light tracking-wide">{slide.subtitle}</p> */}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-white/30" />
          <span className="text-white/70 text-sm tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </div>
  )
}
