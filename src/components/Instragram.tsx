import React from 'react'
import card1 from "../../public/card1.jpeg"
import card2 from "../../public/card2.jpeg"
import card3 from "../../public/card3.jpeg"
import card4 from "../../public/card4.jpeg"
import card5 from "../../public/card5.jpeg"
import card6 from "../../public/card6.jpeg"
import InstagramImg from './InstagramImg'

export const Instragram = () => {
    return (
        <div className='max-w-[1200px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'>Follow me  on Instagram</p>
            <p className='pb-4'>@mr._bhanu_03</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                <InstagramImg socialImg={card1} />
                <InstagramImg socialImg={card2} />
                <InstagramImg socialImg={card3} />
                <InstagramImg socialImg={card4} />
                <InstagramImg socialImg={card5} />
                <InstagramImg socialImg={card6} />
            </div>
        </div>
    )
}
