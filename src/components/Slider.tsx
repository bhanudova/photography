"use client"
import React, { useState } from "react";
import { SlideData } from "../../type/data";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
interface SliderProps {
    slides: any
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current == length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current == 0 ? length - 1 : current + 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (<>
        <div id="gallery" className="max-w-[1240px] mx-auto mt-12">
            <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
            <div className="relative flex justify-center p-4">
                {SlideData.map((slide: any, index) => {
                    return (
                        <div key={index} className={index == current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                            <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70' size={50} />
                            {index === current && (
                                <Image width={1440} height={300} objectFit="cover" src={`${slide.image}`} alt="/slide" className="w-[1400px] h-[200px] md:h-[400px]" />
                            )}
                            <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70' size={50} />
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}

export default Slider;