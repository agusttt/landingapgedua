import React from 'react'
import Image from 'next/image'
function ItemProducts(props) {
    return (
        <div className='w-3/12'>
            <div className='thumbproduct w-100'>
                <Image src="/product-arrival-1.jpg" width={333} height={123} alt=""></Image>
            </div>
            <div className='captionproduct'>
                <h2 className='text-[24px] text-black'>{props.title}</h2>
                <p className='text-gray-400 text-[14px]'>{props.desc}</p>
            </div>
            <div className='cta flex items-center justify-between'>
                <span>Rp.{props.price}</span>
                <span className='w-[126px] text-center px-2 py-3 bg-yellowtheme text-black rounded-[20px] text-[12px]'>Add to cart</span>
            </div>
        </div>
    )
}

export default ItemProducts
