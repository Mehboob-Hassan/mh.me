import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";


function HomePage() {
    return (
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-end justify-center px-6 pt-16 lg:pt-0 lg:px-24 bg-white">
            {/* Left Side - Text + Social Icons */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Intro Text */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-gray-900">
                    Hey, I'm <span className="text-primary">Mehboob Hassan</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                    A passionate Web Engineer crafting lightning-fast, pixel-perfect websites and web apps that make a difference.
                </p>

                {/* Call to Action Button */}
                <a href="/contact-us">
                    <button className="btn-primary">
                        Lets Connect
                    </button>
                </a>

                {/* Social Icons */}
                <div className="flex gap-5 mt-10 text-gray-600">
                    <a href="https://github.com/Mehboob-Hassan" target="_blank" className="hover:text-primary transition">
                        <i className="fab fa-github fa-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/mehboob-hassan-01806a263/" target="_blank" className="hover:text-primary transition">
                        <i className="fab fa-linkedin fa-lg" />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="hover:text-primary transition">
                        <i className="fab fa-instagram fa-lg" />
                    </a>
                    <a href="https://mehboobhassan.dev" target="_blank" className="hover:text-primary transition">
                        <i className="fas fa-globe fa-lg" />
                    </a>
                </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center mb-16 lg:mb-0">
                <div className="relative w-full max-w-md p-6 bg-gradient-to-tr from-blue-50 to-purple-100 rounded-2xl shadow-xl">
                    <img
                        src="/assets/developer.svg"
                        alt="Developer Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomePage