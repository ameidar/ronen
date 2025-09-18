import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"

export default function FeaturedProjects() {
  // Select the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <div className="relative aspect-[3/2] mb-4 overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-light mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

