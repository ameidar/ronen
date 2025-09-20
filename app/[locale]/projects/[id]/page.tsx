import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProject } from '@/lib/projects'
import ProjectPageClient from '@/components/project-page-client'

type Props = {
  params: { locale: 'en' | 'he'; id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.id)
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} | MEIDAR ARCHITECTS`,
    description: project.description,
    openGraph: { images: [{ url: project.images[0] }] },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.id)
  if (!project) {
    notFound()
  }
  return <ProjectPageClient project={project} />
}


