import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ItemProducts from './ItemProducts'


export default function Products() {
    // Buat data Array/Object dummy sementara biasanya diawali dengan "[" urung siku dan diakhiri "]" tutup kurung siku
    const dataProducts = {
        data: [
            {
                id: 1,
                title: "Sweater Orange",
                desc: "Sweater lorem ipsum description of product sweater with color orange",
                price: 120000
            },
            {
                id: 2,
                title: "Kaos Putih Polos",
                desc: "Basic T-shirt lorem ipsum description of product T-shirt with color white solid",
                price: 120000
            },
        ]
    }
    // Buat data dummy sementara

    return (
        <>
            <div className='navbarcart w-100 bg-yellowtheme mb-3'>
                <div className='container'>
                    <div className='flex items-center py-3 justify-between'>
                        <div className='logobrand'>
                            Logo
                        </div>
                        <div className='topshopingcart'>
                            <span className='text-black'>Keranjang: 0</span>
                            <span className='px-2'>20.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='flex p-3 gap-3'>{
                    // Mapping data Array/Object dengan perintah maps ---dataProducts.data.map---
                    dataProducts.data.map((item, i) => {
                        // Mapping data Array/Object dengan perintah maps
                        return (
                            < ItemProducts
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                            />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}
