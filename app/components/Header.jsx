"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // reset just in case
        };
    }, [menuOpen]);


    useEffect(() => {
        let touchStartX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            if (deltaX > 70) {
                // User swiped right
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('touchstart', handleTouchStart);
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [menuOpen]);


    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/assets/mh-logo-02.png"
                        alt="MH Logo"
                        width={100}
                        height={100}
                        className="w-[52px] h-auto rounded-lg"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-10 items-center font-medium">
                    <a href="/" className="hover:text-primary transition">Home</a>
                    <a href="/#about-us" className="hover:text-primary transition">About</a>
                    <a href="/#my-work" className="hover:text-primary transition">Work</a>
                    <a href="/#testimonials" className="hover:text-primary transition">Testimonials</a>
                    <a href="/contact-us">
                        <button className="btn-primary px-4 py-2">Hire Me</button>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden z-50" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <ul className="space-y-8 text-lg font-medium">
                        <li><a href="/" onClick={toggleMenu} className="block hover:text-primary">Home</a></li>
                        <li><a href="/#about-us" onClick={toggleMenu} className="block hover:text-primary">About</a></li>
                        <li><a href="/#my-work" onClick={toggleMenu} className="block hover:text-primary">Work</a></li>
                        <li><a href="/#testimonials" onClick={toggleMenu} className="block hover:text-primary">Testimonials</a></li>
                        <li>
                            <a href="/contact-us" onClick={toggleMenu}>
                                <button className="btn-primary w-full py-2">Hire Me</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header