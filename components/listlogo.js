"use client"
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Props item logo ini merupakan function KOMPONEN props untuk dijadikan component Internal Biasakan membuat function component dengan Huruf Besar
function ItemLogo(props) {
    return (
        // <div className="flex w-[16%] justify-center" >{props.LogoName}</div>
        <div>
            <Image src={props.image} width={props.width} height={props.height} alt=""></Image>
        </div>
    )
}
// Props item logo ini merupakan function props untuk dijadikan component Internal Biasakan membuat function component dengan Huruf Besar

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};

export default function Listlogo() {
    return (
        <div className='mt-10 w-full min-h-[60px] bg-yellowtheme py-8'>
            <div className='container justify-between items-center gap-4'>
                {/* Pemanggilan function props menjadi component */}
                {/* <ItemLogo LogoName="logo1"></ItemLogo>
                <ItemLogo LogoName="logo2"></ItemLogo>
                <ItemLogo LogoName="logo3"></ItemLogo>
                <ItemLogo LogoName="logo4"></ItemLogo>
                <ItemLogo LogoName="logo5"></ItemLogo>
                <ItemLogo LogoName="logo6"></ItemLogo> */}
                {/* Pemanggilan function props menjadi component */}
                {/* <ItemLogo image="/logo/logo-1.png" width={119} height={71}></ItemLogo>
                <ItemLogo image="/logo/logo-2.png" width={119} height={71}></ItemLogo>
                <ItemLogo image="/logo/logo-3.png" width={119} height={71}></ItemLogo>
                <ItemLogo image="/logo/logo-4.png" width={119} height={71}></ItemLogo>
                <ItemLogo image="/logo/logo-5.png" width={119} height={71}></ItemLogo>
                <ItemLogo image="/logo/logo-6.png" width={119} height={71}></ItemLogo> */}
                <Slider {...settings}>
                    <ItemLogo image="/logo/logo-2.png" width={119} height={71}></ItemLogo>
                    <ItemLogo image="/logo/logo-3.png" width={119} height={71}></ItemLogo>
                    <ItemLogo image="/logo/logo-4.png" width={119} height={71}></ItemLogo>
                    <ItemLogo image="/logo/logo-5.png" width={119} height={71}></ItemLogo>
                    <ItemLogo image="/logo/logo-6.png" width={119} height={71}></ItemLogo>
                </Slider>
            </div>
        </div>
    )
}
