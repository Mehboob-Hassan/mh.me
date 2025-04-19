import React from 'react';
import Image from "next/image";
import '../globals.css';


function About() {
    return (
        <section id="about-us" className="min-h-screen flex justify-center items-center mt-[20vh] px-4">
            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 lg:h-[90vh] items-center">

                {/* Text Content */}
                <div className="w-full lg:w-[70%] h-full flex justify-center items-center">
                    <div className="w-[90%] h-full flex justify-around items-center">
                        <div className="w-full h-full flex flex-col justify-between text-center lg:text-left lg:items-start gap-6 lg:gap-0 lg:ml-16">

                            {/* Heading */}
                            <div className="lg:w-1/2 w-full">
                                <h3>
                                    Crafting Code with Passion While Navigating the World of Innovation.
                                </h3>
                            </div>

                            {/* Paragraphs Section */}
                            <div className="flex flex-col sm:flex-row w-full sm:items-start justify-between gap-6 sm:gap-12">

                                {/* Left Column */}
                                <div className="flex flex-col gap-4 text-justify sm:w-1/2">
                                    <p>
                                        As a developer, I believe code is more than just logic — it's a form of expression. My journey began with curiosity and evolved into a deep passion for building beautiful, functional, and meaningful digital experiences.
                                    </p>
                                    <p>
                                        With expertise in both design-driven frontend development and robust backend logic, I create full-stack applications that look as good as they perform.
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-4 text-justify sm:w-1/2">
                                    <p>
                                        Tech evolves fast — and so do I. I stay updated with the latest frameworks, best practices, and tools to continuously improve my skills.
                                    </p>
                                    <p>
                                        I am always open to exciting collaborations, freelance opportunities, or just a good old tech chat. Let's connect and make your ideas come alive.
                                    </p>
                                </div>
                            </div>

                            <button className="btn-primary w-fit mx-auto lg:mx-0">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/3 flex justify-center items-center h-full">
                    <div className="relative h-[90%] w-[23vw] bg-primary flex justify-center items-center rounded-lg overflow-visible">
                        <Image
                            src="/assets/laptop.jpg"
                            alt="About Image"
                            width={500}
                            height={700}
                            className="w-[30vw] h-[35vw] rounded-lg -ml-[2vw] object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>

    )
}

export default About