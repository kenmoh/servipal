'use client'
import React, { useEffect, useState } from 'react'
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { Button } from './ui/button'

const navItems = [
    { href: "#services", label: "Services" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
]




const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        document.documentElement.style.scrollBehavior = 'smooth';

        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash && target.origin + target.pathname === window.location.href) {
                e.preventDefault();
                const targetElement = document.querySelector(target.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('click', handleLinkClick);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);
    return (
        <header className={`flex justify-between items-center mb-12 fixed py-5 px-10 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/70 backdrop-blur-md shadow-md' : ''}`}>
            <div className="text-orange-400 text-2xl md:text-4xl font-bold">ServiPal</div>
            <nav className='hidden md:block'>
                <ul className="flex space-x-6">
                    <Link href={'/about'} className='text-gray-300 hover:text-orange-400 transition-colors'>About</Link>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}
                                className="text-gray-300 hover:text-orange-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6 text-gray-300" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900">
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            <Link href={'/about'} className='text-gray-300 hover:text-orange-400 transition-colors'>About</Link>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-gray-300 hover:text-orange-400 transition-colors text-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Navbar