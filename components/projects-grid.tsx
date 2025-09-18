'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`/projects/${project.id}`}
            className="relative aspect-square group overflow-hidden block"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              initial={false}
              animate={{
                scale: hoveredId === project.id ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image src={project.images[0] || '/placeholder.svg'} alt={project.title} fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                opacity: hoveredId === project.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-playfair mb-2">{project.title}</h3>
                <p className="text-sm font-inter opacity-80">{project.location}</p>
                <p className="text-sm font-inter opacity-80">{project.year}</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
