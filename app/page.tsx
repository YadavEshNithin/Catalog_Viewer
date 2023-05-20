import { Inter } from 'next/font/google'
import CatalogViewer from '@/components/CatalogViewer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <CatalogViewer/>
    </main>
  )
}
