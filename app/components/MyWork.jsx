import { ArrowOutward } from '@mui/icons-material';
import React from 'react'

function MyWork() {
    const projects = [
        {
            title: "FurEver – Responsive Landing Page",
            category: "Frontend - React JS",
            image: "/assets/project/furever.png",
            link: "#"
        },
        {
            title: "Scalable Ecommerce Backend",
            category: "Backend - Node JS",
            image: "/assets/project/ecom.png",
            link: "#"
        },
        {
            title: "Student-run Blog Platform",
            category: "Frontend - Next JS",
            image: "/assets/project/blog.png",
            link: "#"
        },
        {
            title: "Food Ordering Platform",
            category: "Frontend - Next JS",
            image: "/assets/project/tclb.png",
            link: "#"
        }
    ];

    return (
        <section id='my-work' className='pt-16 lg:pt-0 lg:min-h-screen flex-center flex-col '>
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

            <div className='my-10'>
                <a href='https://github.com/Mehboob-Hassan?tab=repositories' target='_blank' rel='noopener noreferrer'>
                    <button className='btn-transparent'>See More Projects</button>
                </a>
            </div>
        </section>



    )
}

export default MyWork;