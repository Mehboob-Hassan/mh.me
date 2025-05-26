import React from 'react'

function Testimonals() {
    const testimonials = [
        {
            name: "Sohail Shafique",
            quote: "Working with Mr. Mehboob was a great experience. He is highly professional, and consistently delivers quality work on time. I’d definitely recommend him for any web development project.",
            image: "/assets/testimonials/Sohail-Shafique.jpg"
        },
        {
            name: "Sarah Khan",
            quote: "Super professional and always delivered on time. Highly recommend for any development project!",
            image: "/assets/guy-hawkins.png"
        },
        {
            name: "James Walker",
            quote: "Excellent communication and technical skills. You brought our vision to life effortlessly.",
            image: "/assets/guy-hawkins.png"
        },
    ];

    return (
        <section id="testimonials" className="pt-16 pb-10 lg:pb-0 min-h-screen flex flex-col items-center justify-start lg:pt-[8vh] px-4 bg-white">
            {/* Heading */}
            <div className="w-full flex justify-center mb-12">
                <div className="text-center w-full sm:w-[90%] lg:w-1/2">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                        What People Say About Me
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Genuine feedback from clients and collaborators I've worked with.
                    </p>
                    <div className="bg-primary h-[3px] w-1/3 mx-auto rounded-lg" />
                </div>
            </div>

            {/* Testimonials */}
            <div className="w-full max-w-[1200px] px-2 lg:px-8 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                        >
                            <div className="text-primary text-4xl mb-2">❝</div>
                            <img
                                src={t.image}
                                alt={`Photo of ${t.name}`}
                                className="w-[80px] h-[80px] rounded-full border-2 border-primary mb-4 "
                                loading="lazy"
                            />
                            <p className="text-gray-700 text-sm mb-6">
                                {t.quote}
                            </p>
                            <div className="h-1 w-10 bg-primary mb-3 rounded-full" />
                            <p className="font-semibold text-gray-900">{t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Testimonals