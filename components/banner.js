import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Banner() {
    return (
        <div className="container">
            <div className="bg-graycustom rounded-xl flex items-center justify-between gap-7 pt-9 px-12">
                <div className="w-[40%]">
                    <h1 className="max-w-[300px] font-black text-[64px] leading-[78px]">
                        <div className="relative before:content[''] before:z-1 before:absolute before:min-w-full before:h-full before:bg-white before:-rotate-2 before:ml-[-15px]">
                            <span className='block relative z-3'>LET’S</span>
                        </div>
                        EXPLORE
                        <div className="relative before:content[''] before:z-1 before:absolute before:min-w-full before:h-full before:bg-yellowtheme before:-rotate-2 before:ml-[-15px]">
                            <span className="block relative z-3">UNIQUE</span>
                        </div>
                        CLOTHES.
                    </h1>
                    <p>Live for Influential and Innovative fashion!</p>
                    <div className="flex gap-7 py-10">
                        <div>
                            <Image src="/elipses.svg" width="180" height="28" alt="elipses"></Image>
                        </div>
                        <div>
                            <Link href="#" className="bg-black text-white py-2 px-4 rounded-md">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] px-4 flex justify-end">
                    <Image src="/hero-image.png" width="564" height="371" alt=""></Image>
                </div>
            </div>
        </div >
    )
}

export default Banner
