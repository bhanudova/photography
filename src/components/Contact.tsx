export default function Contact() {
    return (<>
        <div id="contact" className="bg-white border">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
                        <div className="flex justify-center">
                            <div className="text-center md:text-center lg:text-start">
                                <div className="mt-16">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Our Location</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">
                                        Avanigadda Mandal<br />
                                        Krishna District<br />
                                        Andhra Pradesh-521121.
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Phone</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">+91 6302715653</p>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Email</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">bhanudova03@gmail.com</p>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">bhanudova6@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="border w-[360px] md:w-[680px] lg:w-[400px]  relative me-0 md:me-0 lg:me-[-210px] bg-white shadow-2xl rounded-md mt-11">
                                <div className="p-7">
                                    <div>
                                        <form>
                                            <h2 className="font-bold text-xl md:text-2xl lg:text-xl mb-0">Leave a message</h2>
                                            <div className="mt-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2">
                                                <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Name" />
                                                <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Email*" />
                                            </div>
                                            <div className="mt-5">
                                                <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Phone" />
                                            </div>
                                            <div className="mt-5">
                                                <textarea className="border outline-none rounded-md bg-[#F7F7F7] p-3 w-full h-[130px] font-medium" placeholder="Please Described what you need" />
                                            </div>
                                            <div className="mt-3 pb-0 text-gray-700">
                                                <button className="bg-[#F1CF69] rounded-full font-bold text-xs md:text-sm lg:text-sm w-full p-3">
                                                    Send Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 md:mt-10 lg:mt-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.7392640937182!2d80.91458017335886!3d16.027082884646333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f396e2f501c5%3A0xcddc620aacba278d!2sGandhi%20Kshetram!5e0!3m2!1sen!2sin!4v1699452992923!5m2!1sen!2sin" className="w-full h-[300px] md:h-[700px] lg:h-[500px]" ></iframe>
                </div>
            </div>
        </div>
    </>)
}