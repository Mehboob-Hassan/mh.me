import React from 'react'

function GetInTouch() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-[5vh] lg:py-[0vh] px-4">
            {/* Heading */}
            <div className="w-full flex justify-center mb:6 lg:mb-12">
                <div className="text-center w-full sm:w-[90%] lg:w-1/3 py-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Get In Touch</h3>
                    <p className="text-gray-700 mb-4">
                        Whether you have a project in mind, a question to ask, or just want to say hello — feel free to reach out.
                    </p>
                    <div className="bg-primary h-[3px] w-1/3 mx-auto rounded-lg" />
                </div>
            </div>

            {/* Contact Info + Social + Button */}
            <div className="w-full max-w-[1000px] text-gray-600 py-12 px-4 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs tracking-widest mb-2 text-gray-500">REACH ME AT</h4>
                        <p className="mb-1">mehassan804@gmail.com</p>
                        <p>+92 345 0356304</p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-xs tracking-widest mb-2 text-gray-500">SOCIAL</h4>
                        <p className="space-x-2">
                            <span>Behance</span>
                            <span>· Dribble</span>
                            <span>· Twitter</span>
                        </p>
                        <p className="space-x-2">
                            <span>Instagram</span>
                            <span>· Github</span>
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <a href="/contact-us">
                            <button className="btn-primary">Say Hello.</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full px-4 mt-8 text-sm text-gray-500">
                <div className="w-full max-w-[80vw] h-[2px] bg-primary mx-auto mb-6" />
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    <p>© Copyright MH 2025</p>
                    <div className="w-[2px] h-[20px] bg-gray-400" />
                    <p>Developed by MH with ❤</p>
                </div>
            </div>
        </section>

    )
}

export default GetInTouch;