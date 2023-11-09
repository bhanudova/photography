import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs"
export default function Footer() {
    return (<>
        <div className="bg-[#454545] flex justify-center md:justify-between">
            <div className="p-4">
                <div className="block md:hidden">
                    <div className="flex justify-center items-center">
                        <ul className="list-none flex gap-6 p-4">
                            <li className="p-2 rounded-full bg-white"><BsFacebook size={30} className="text-blue-600" /></li>
                            <li className="p-2 rounded-full bg-white"><BsInstagram size={30} className="text-[#FD0ADE]" /></li>
                            <li className="p-2 rounded-full bg-white"><BsWhatsapp size={30} className="text-[#51CE5F]" /></li>
                            <li className="p-2 rounded-full bg-white"><BsTelegram size={30} className="text-[#31A8E0]" /></li>
                        </ul>
                    </div>
                </div>
                <h2 className="font-bold text-xl mt-3 text-white ">Copyright © 2023 - All right reserved</h2>
            </div>
            <div className="hidden md:block">
                <ul className="list-none flex gap-6 p-4">
                    <li className="p-2 rounded-full bg-white"><BsFacebook size={30} className="text-blue-600" /></li>
                    <li className="p-2 rounded-full bg-white"><BsInstagram size={30} className="text-[#FD0ADE]" /></li>
                    <li className="p-2 rounded-full bg-white"><BsWhatsapp size={30} className="text-[#51CE5F]" /></li>
                    <li className="p-2 rounded-full bg-white"><BsTelegram size={30} className="text-[#4768ff]" /></li>
                </ul>
            </div>

        </div>
    </>)
}