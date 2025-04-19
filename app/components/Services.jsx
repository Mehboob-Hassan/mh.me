import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Services() {

    const services = [
        {
            title: 'Frontend Development',
            icon: <CodeIcon fontSize="large" style={{ color: '#ec5c54' }} />,
            description: 'Convert designs into responsive, interactive websites using React, Next.js, and Tailwind CSS.'
        },
        {
            title: 'Backend Development',
            icon: <StorageIcon fontSize="large" style={{ color: '#ec5c54' }} />,
            description: 'Build secure and scalable APIs with Node.js, Express, and databases like MongoDB & PostgreSQL.'
        },
        {
            title: 'Website Performance Optimization',
            icon: <SpeedIcon fontSize="large" style={{ color: '#ec5c54' }} />,
            description: 'Boost loading speed, SEO, and user experience through Core Web Vitals and optimization techniques.'
        }
    ];


    return (
        <section className="min-h-screen px-4 py-16">
            {/* Section Header */}
            <div className="lg:min-h-[10vw] w-[100%] flex justify-center">

                <div className="flex justify-around items-center flex-col w-[90%] lg:w-1/3 min-h-[10vw] text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                        What Services I'm Providing
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                        Turning ideas into scalable digital solutions with creative strategy.
                    </p>
                    <div className="bg-primary h-[3px] w-24 rounded-lg"></div>
                </div>

            </div>

            {/* Services Grid */}
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mt-10">
                    {services.map((service, idx) => (
                        <Card
                            key={idx}
                            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-4/5 sm:w-[280px] md:w-[300px] rounded-lg"
                        >
                            <CardContent className="flex flex-col items-center justify-between lg:gap-4 p-6 min-h-[200px] lg:min-h-[300px]">
                                {service.icon}
                                <Typography variant="h6" className="font-semibold text-center">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" className="text-center text-gray-600">
                                    {service.description}
                                </Typography>
                                <ArrowCircleDownIcon
                                    fontSize="large"
                                    className="rotate-[270deg] text-gray-400"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Services