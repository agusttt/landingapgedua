"use client"
import React from "react";
import { useState } from "react";
export default function BelajarState() {
    const [cart, setCart] = useState(0);
    // const minCart = () => setCart(cart - 1);
    // const minCart = () => {
    //     setCart(cart - 1)
    // }
    const minCart = () => {
        cart > 0 ? setCart(cart - 1) : setCart(0);
    }

    const addCart = () => {
        cart <= 9 ? setCart(cart + 1) : setCart(10);
    }

    return (

        <div className='container bg-gray-50 w-[120px] mt-2 mb-2 px-2 py-2 border-[1px] rounded-[6]'>
            <div className='flex items-center justify-between'>
                <span className="text-center border-[1px] border-[#dedede] rounded-[3.5px]" onClick={minCart}>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                <label>{cart}</label>
                <span className="text-center border-[1px] border-[#dedede] rounded-[3.5px]" onClick={addCart}>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
            </div>
        </div>
    )
}
