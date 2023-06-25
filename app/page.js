// import Header from "@/components/header";
// import Banner from "@/components/banner";
// import Image from 'next/image'
import { Header, Banner, Listlogo, Arrival } from "@/components"
export default function Home() {
  return (
    // <main className='bg-yellowtheme'>
    //   <div className="container">
    //     <h2>Hello using tailwind class</h2>
    //   </div>
    //   <div className="container">
    //     <div className="flex justify-between">
    //       <div className="left">Left</div>
    //       <div className="right">Right</div>
    //     </div>
    //   </div>
    // </main>
    <>
      <Header></Header>
      <Banner></Banner>
      <Listlogo></Listlogo>
      <Arrival></Arrival>
    </>
  )
}
