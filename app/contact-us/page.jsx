import Header from "../components/Header";

const Page = () => {
    return (
        <>
            <Header />

            <section className="flex justify-center mb-16">
                <div className="w-[50%]">
                    <div className="flex flex-col text-center items-center justify-center mt-[5vw]">
                        <p className="uppercase text-[1.3vw] font-bold tracking-wide">Contact Me</p>
                        <h1 className="my-6">Let's Start a Conversation</h1>
                        <p className="text-gray-500">Whether you have a project in mind, a question to ask, or just want to say hello — feel free to reach out. I'm always open to new opportunities and conversations!</p>
                    </div>
                    <div className="bg-primary w-100 h-[15vw] mt-16 flex text-white">
                        <div className="w-[50%] h-[100%] flex-center">
                            <div className="w-[80%] h-[70%]">
                                <p className="text-gray-200">Working Hours</p>
                                <div className="bg-grayAccent w[80%] h-[1px] my-4"></div>
                                <h6 className="font-bold tracking-wide">Monday To Friday</h6>
                                <h6 className="font-bold tracking-wide">9:00 AM To 8:00 AM</h6>
                                <p className="text-gray-200 my-2">My Support is available 24/7</p>
                            </div>
                        </div>
                        <div className="w-[50%] h-[100%] flex-center">
                            <div className="w-[80%] h-[70%]">
                                <p className="text-gray-200">Contact Me</p>
                                <div className="bg-grayAccent w[80%] h-[1px] my-2"></div>
                                <h5 className="font-bold tracking-wide">+92 345 0356304</h5>
                                <p className="text-gray-200 my-1">mehassan804@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[100%] mt-7 mb-16">
                        <form className="space-y-4 [w-100%]">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-[100%] border border-gray-300 p-5 placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="w-[100%] border border-gray-300 p-5 placeholder-gray-500"
                            />
                            {/* <select className="w-full p-3 border border-gray-300 p-5 px-3">
                                <option className="text-gray-500">Query Related</option>
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing</option>
                            </select> */}


                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full p-3 border border-gray-300 placeholder-gray-500"
                            ></textarea>

                            <button className="btn-primary">
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Page;