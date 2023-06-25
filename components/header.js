"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Memanggil State react component
// Destructuring data[data, setData] data merupakan data awal atau pure data.setData merupakan var/fungsi untuk mengubah dan memanipulasi data awal.
import { useState } from 'react';
// Memanggil State react component
function Header() {
    const [data, setData] = useState(7);
    return (
        <div className="flex py-2 mb-5">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/logo-fashion.svg" width="220" height="52" alt="logo"></Image>
                    </Link>
                    {/* memanggil variabel state data awal */}
                    {data}
                    {/* memanggil variabel state data awal */}
                    <button className='bg-green-600 px-5 py-5' onClick={() => setData(0)}>Klik Ini</button>
                    <div className="flex items-center gap-7">
                        <ul className="flex items-center gap-7 uppercase">
                            <li><Link href="/">Catalog</Link></li>
                            <li><Link href="/">Arrival</Link></li>
                            <li><Link href="/">Favorite</Link></li>
                            <li><Link href="/">Download</Link></li>
                        </ul>
                        <Link href="#" className="bg-black text-white py-2 px-4 rounded-md">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
