import ProjectsClientPage from '@/components/ProjectsClientPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | MEIDAR ARCHITECTS',
  description: 'Explore our portfolio of luxury residential projects across Israel.',
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
