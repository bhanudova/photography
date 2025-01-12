import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="bg-[#454545] flex justify-center md:justify-between">
        <div className="p-4">
          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="flex justify-center items-center">
              <ul className="list-none flex gap-6 p-4">
                <li className="p-2 rounded-full bg-white">
                  <BsFacebook size={30} className="text-[#1877F2]" />
                </li>
                <li className="p-2 rounded-full bg-white">
                  <BsInstagram size={30} className="text-[#E4405F]" />
                </li>
                <li className="p-2 rounded-full bg-white">
                  <BsWhatsapp size={30} className="text-[#25D366]" />
                </li>
                <li className="p-2 rounded-full bg-white">
                  <BsTelegram size={30} className="text-[#0088CC]" />
                </li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold text-xl mt-3 text-white">
            Copyright © 2023 - All rights reserved
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <ul className="list-none flex gap-6 p-4">
            <li className="p-2 rounded-full bg-white">
              <BsFacebook size={30} className="text-[#1877F2]" />
            </li>
            <li className="p-2 rounded-full bg-white">
              <BsInstagram size={30} className="text-[#E4405F]" />
            </li>
            <li className="p-2 rounded-full bg-white">
              <BsWhatsapp size={30} className="text-[#25D366]" />
            </li>
            <li className="p-2 rounded-full bg-white">
              <BsTelegram size={30} className="text-[#0088CC]" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
