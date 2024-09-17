import { LandingPageComponent } from '@/components/landingPage'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-screen">
      <Navbar />
      <LandingPageComponent />
    </main>
  )
}
