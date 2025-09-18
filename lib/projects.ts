export type Project = {
  id: string
  title: string
  description?: string
  images: string[]
  year: number
  location: string
  videoUrl: string
}

export const projects: Project[] = [
  {
    id: 'hr-residence',
    title: 'HR RESIDENCE',
    description: 'Luxury residential project showcasing modern architectural design.',
    images: [
      '/projects/hr-residence/image1.jpg',
      '/projects/hr-residence/image2.jpg',
      '/projects/hr-residence/image3.jpg',
      '/projects/hr-residence/image4.jpg',
      '/projects/hr-residence/image5.jpg',
      '/projects/hr-residence/image6.jpg',
      '/projects/hr-residence/image7.jpg',
    ],
    year: 2025,
    location: 'Tirat Yehuda, Israel',
    videoUrl: 'https://www.youtube.com/watch?v=0PepmapEEsg',
  },
  {
    id: 'ry-residence',
    title: 'RY RESIDENCE',
    description: 'Contemporary beachfront villa with panoramic views.',
    images: [
      '/projects/ry-residence/image1.jpg',
      '/projects/ry-residence/image2.jpg',
      '/projects/ry-residence/image3.jpg',
      '/projects/ry-residence/image4.jpg',
      '/projects/ry-residence/image5.jpg',
      '/projects/ry-residence/image6.jpg',
      '/projects/ry-residence/image7.jpg',
      '/projects/ry-residence/image8.jpg',
      '/projects/ry-residence/image9.jpg',
    ],
    year: 2024,
    location: 'Ceasarea, Israel',
    videoUrl: 'https://www.youtube.com/watch?v=BzbPaMr_blM',
  },
  {
    id: 'zw-house',
    title: 'ZW HOUSE',
    description: 'Modern family residence with innovative sustainable features.',
    images: [
      '/projects/zw-house/image1.jpeg',
      '/projects/zw-house/image2.jpg',
      '/projects/zw-house/image3.jpg',
      '/projects/zw-house/image4.jpg',
      '/projects/zw-house/image5.jpg',
      '/projects/zw-house/image6.jpg',
      '/projects/zw-house/image7.jpg',
      '/projects/zw-house/image8.jpg',
      '/projects/zw-house/image9.jpg',
      '/projects/zw-house/image10.jpg',
      '/projects/zw-house/image11.jpg',
      '/projects/zw-house/image12.jpg',
      '/projects/zw-house/image13.jpg',
      '/projects/zw-house/image14.jpg',
      '/projects/zw-house/image15.jpg',
      '/projects/zw-house/image16.jpg',
      '/projects/zw-house/image17.jpg',
      '/projects/zw-house/image18.jpg',
    ],
    year: 2024,
    location: 'Yoqneam, Israel',
    videoUrl: 'https://www.youtube.com/watch?v=yzMK3Q6McBs',
  },
]

export function getProject(id: string) {
  return projects.find((project) => project.id === id)
}
