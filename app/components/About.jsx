import React from 'react';
import Image from "next/image";
import '../globals.css';


function About() {
    return (
        <section id="about-us" className="pb-12 lg:pb-0 min-h-screen flex justify-center items-start mt-[20vh] px-4">
            <div className="w-full flex flex-col lg:flex-row lg:gap-8 lg:h-auto">

                <div className="w-full lg:w-1/2 flex justify-start items-center lg:h-full h-[80%]">
                    <div className="relative flex items-center  flex-col w-full h-[70%]">
                        {/* Image container that limits positioning */}
                        <div className="relative w-[80vw] lg:w-[40vw] h-[30vh] lg:h-[60vh] rounded-lg ">
                            {/* Base image */}
                            <img
                                className="w-[80%] lg:w-full h-[80%] lg:h-full object-cover rounded-lg"
                                src="/assets/coding.jpeg"
                                alt=""
                            />

                            {/* Overlay image */}
                            <div className="about-us-image2 absolute bottom-0 right-0 w-[40vw] lg:w-[20vw] h-[20vh] lg:h-[50vh]">
                                <img
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                    src="/assets/devloper.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 h-full flex justify-start items-center">
                    <div className="w-[100%] h-full flex lg:justify-start justify-center items-center">
                        <div className="w-[90%] h-[70%] flex flex-col text-center lg:text-left lg:items-start gap-6 lg:gap-10 lg:ml-2 mt-12 lg:mt-10 ">

                            {/* Heading */}

                            <div className="lg:w-[90%] w-full">
                                <h3>
                                    Crafting Code with Passion While Navigating the World of Innovation.
                                </h3>
                            </div>

                            {/* Paragraphs Section */}
                            <div className="flex flex-col sm:flex-row w-full sm:items-start justify-center sm:gap-12 gap-10">

                                {/* Left Column */}
                                <div className="flex flex-col gap-4 text-justify sm:w-full">
                                    <p>
                                        As a developer, I believe code is more than just logic — it's a form of expression. My journey began with curiosity and evolved into a deep passion for building beautiful, functional, and meaningful digital experiences.
                                    </p>
                                    <p>
                                        With expertise in both design-driven frontend development and robust backend logic, I create full-stack applications that look as good as they perform.
                                    </p>
                                </div>

                                {/* Right Column
                                <div className="flex flex-col gap-4 text-justify sm:w-1/2">
                                    <p>
                                        Tech evolves fast — and so do I. I stay updated with the latest frameworks, best practices, and tools to continuously improve my skills.
                                    </p>
                                    <p>
                                        I am always open to exciting collaborations, freelance opportunities, or just a good old tech chat. Let's connect and make your ideas come alive.
                                    </p>
                                </div> */}
                            </div>

                            <a href="/contact-me">
                                <button className="btn-primary w-fit mx-auto lg:mx-0">
                                    Contact Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}

export default About