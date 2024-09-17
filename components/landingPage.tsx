'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Utensils, Truck, Shirt, Shield, Clock, HeartHandshake } from "lucide-react"


const data = [
  {
    icon: <Truck className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Swift Delivery",
    description:
      "From documents to gifts, our registered dispatch riders deliver it all with lightning speed. Your items, our priority.",
  },
  {
    icon: <Utensils className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Food on Demand",
    description:
      "Craving Jollof rice or Pizza? Your favourite restaurants are just a tap away. Bon appétit!",
  },
  {
    icon: <Shirt className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Pristine Laundry",
    description:
      "Say goodbye to laundry day stress. Our laundry services providers will keep your wardrobe fresh and fabulous.",
  },
  {
    icon: <ShoppingBag className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Secure Shopping",
    description:
      "Shop with peace of mind. Our escrow service ensures your money is safe until you're satisfied. Goodbye to !",
  },
];


const features = [
  {
    icon: <Clock className="w-8 h-8 mb-4 text-orange-400" />,
    title: "Time-Saving Convenience",
    description:
      "Reclaim your day with our all-in-one platform. More time for you, less time running errands.",
  },
  {
    icon: <Shield className="w-8 h-8 mb-4 text-orange-400" />,
    title: "Ironclad Security",
    description:
      "Shop worry-free with our escrow system. Your transactions are protected from click to delivery.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 mb-4 text-orange-400" />,
    title: "24/7 Human Support",
    description:
      "Questions? Issues? Our friendly team is always here to help, day or night.",
  },
];

export function LandingPageComponent() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email submission logic
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="text-orange-400 text-4xl font-bold">ServiPal</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Transforming Errands into Ease</h1>
              <p className="text-xl text-gray-300 mb-8">From doorstep deliveries to sparkling laundry, satisfying meals to secure shopping - we're your one-stop solution for modern living.</p>
              <Button className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-8 rounded-full transition-colors">
                Discover Ease
              </Button>
            </div>
            <div className='w-full h-full'>
              <Image src={'/online.png'} alt='ServiPal' width={3000} height={300} />
            </div>
          </section>



          <h2 className="text-4xl font-bold text-white mb-8">From Errands to Essentials: Our Services Cover It All</h2>
          <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {data.map((service, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-gray-300 border border-gray-700 transition-all hover:bg-opacity-70 hover:scale-105">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </section>

          <section id="features" className=" mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Experience the ServiPal Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-gray-700 transition-all hover:bg-opacity-50">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the waiting list</h2>
            <p className="text-gray-300 mb-6">Be the first to experience the future of service delivery. Get exclusive updates!</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-orange-500"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                Join Now
              </Button>
            </form>
          </section>
        </main>

        <footer className="mt-20 text-center text-gray-400">
          <p>&copy; 2024 ServiPal. All rights reserved. Simplifying lives, one service at a time.</p>
        </footer>
      </div>
    </div>
  )
}