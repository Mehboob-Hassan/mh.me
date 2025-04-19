import { ArrowOutward } from '@mui/icons-material';
import React from 'react'

function MyWork() {
    const projects = [
        {
            title: "Retro Camera.",
            category: "Website",
            image: "/assets/laptop.jpg",
            link: "#"
        },
        {
            title: "The White Lamp.",
            category: "Product Design",
            image: "/assets/laptop.jpg",
            link: "#"
        },
        {
            title: "Rucksack.",
            category: "Branding",
            image: "/assets/laptop.jpg",
            link: "#"
        },
        {
            title: "Since Day One.",
            category: "Website",
            image: "/assets/laptop.jpg",
            link: "#"
        },
        {
            title: "Sand Dunes.",
            category: "Illustration",
            image: "/assets/laptop.jpg",
            link: "#"
        },
        {
            title: "Minimalismo.",
            category: "Branding",
            image: "/assets/laptop.jpg",
            link: "#"
        }
    ];

    return (
        <section id='my-work' className=' lg:min-h-screen flex-center flex-col '>
            <div className='lg:min-h-[10vw] w-[100%] flex justify-center'>
                <div className='flex justify-around items-center flex-col w-[90%] lg:w-1/3 min-h-[10vw] text-center'>
                    <h3>What I’ve Built So Far</h3>
                    <p>A showcase of selected projects that reflect my skills in frontend, backend, and performance optimization.</p>
                    <div className='bg-primary h-[3px] w-1/3 round-lg mt-4'></div>
                </div>
            </div>
            <div className='py-16 px-6 lg:w-3/4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group"
                            key={idx}
                            aria-label={`Visit project: ${project.title}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-28 h-28 object-cover rounded-md shadow-lg"
                                loading="lazy"
                            />
                            <div className="flex flex-col flex-1">
                                <span className="text-sm uppercase text-gray-400 tracking-wide">{project.category}</span>
                                <h3 className="text-xl font-medium group-hover:text-[#ec5c54] transition">{project.title}</h3>
                            </div>
                            <ArrowOutward className="text-gray-500 group-hover:text-[#ec5c54] transition" />
                        </a>
                    ))}
                </div>

            </div>
        </section>



    )
}

export default MyWork;