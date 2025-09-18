'use client'

import { useState } from 'react'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/dist/photoswipe.css'
import type { Project } from '@/lib/projects'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

export default function ProjectPageClient({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<PhotoSwipe | null>(null)

  const openLightbox = (index: number) => {
    const items = project.images.map((src) => ({
      src,
      w: 1920,
      h: 1080,
    }))

    const pswp = new PhotoSwipe({
      dataSource: items,
      index,
      pswpModule: () => import('photoswipe'),
    })

    setLightbox(pswp)
    pswp.init()
  }

  const handleShare = async () => {
    const shareData = {
      title: project.title,
      url: `https://ronenmeidar.co.il/projects/${project.id}`,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(shareData.url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] lg:h-screen">
        <img
          src={project.images[0] || '/placeholder.svg'}
          alt={`${project.title} - Hero Image`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center max-w-4xl px-4">{project.title}</h1>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 text-muted-foreground">
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleShare} aria-label="Share project">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {project.description && <p className="text-lg text-muted-foreground mb-12">{project.description}</p>}

          {project.videoUrl && (
            <div className="aspect-video mb-12">
              <iframe
                src={project.videoUrl.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((image, index) => (
              <button key={image} onClick={() => openLightbox(index + 1)} className="relative aspect-[3/2] group">
                <img
                  src={image || '/placeholder.svg'}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="my-12 text-center">
        <Link href="/projects">
          <Button variant="outline">Back to All Projects</Button>
        </Link>
      </div>
    </div>
  )
}
