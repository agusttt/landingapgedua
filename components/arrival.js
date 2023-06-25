import React from 'react'
import Image from 'next/image'

const ArrivalCard = (props) => {
    return (
        <div className='wrparrival'>
            <div className='thumbnailimage'>
                <Image src={props.image} width={props.width} height={props.height} alt=""></Image>
            </div>
            <div className='captionarrival'>
                <h2 className='bg-red-400 text-[32px]'>{props.title}</h2>
                <p>{props.more}</p>
            </div>
        </div>
    )
}

export default function Arrival() {
    return (
        <div className='container py-8'>
            <div className='w-100 pb-8'>
                <h4 className='font-black text-[32px]'>NEW ARRIVALS</h4>
            </div>
            <div className='w-100 flex justify-between gap-8'>
                <ArrivalCard image="/product-arrival-1.jpg" width={484} height={704} title="Hoodies & Sweetshirt" more="Explore Now!"></ArrivalCard>
                <ArrivalCard image="/product-arrival-2.jpg" width={484} height={704} title="Coats & Parkas" more="Explore Now!"></ArrivalCard>
                <ArrivalCard image="/product-arrival-3.jpg" width={484} height={704} title="Tees & T-Shirt" more="Explore Now!"></ArrivalCard>
            </div>
        </div>
    )
}
