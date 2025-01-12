import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#333333] flex justify-center md:justify-between p-6">
      {/* Mobile View */}
      <div className="block md:hidden text-center">
        <ul className="list-none flex gap-4 justify-center items-center">
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsFacebook size={24} className="text-[#1877F2]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsInstagram size={24} className="text-[#E4405F]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsWhatsapp size={24} className="text-[#25D366]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsTelegram size={24} className="text-[#0088CC]" />
          </li>
        </ul>
        <h2 className="font-medium text-sm mt-4 text-gray-400">
          Copyright © 2023 - All rights reserved
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <ul className="list-none flex gap-4">
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsFacebook size={20} className="text-[#1877F2]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsInstagram size={20} className="text-[#E4405F]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsWhatsapp size={20} className="text-[#25D366]" />
          </li>
          <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BsTelegram size={20} className="text-[#0088CC]" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
