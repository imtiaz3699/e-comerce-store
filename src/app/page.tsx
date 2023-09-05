
import Image from 'next/image'
import HeroSection from './Components/HeroSection/HeroSection'
import FlashSale from './Components/FlashSale/FlashSale'
import Categories from './Components/Category/Category'
import BestSellingProducts from './Components/BestSellingProducts/BestSellingProducts'
import Products from './Components/Product/Product'
import { NewArrival } from './Components/NewArrival/NewArival'
import WhyChooseUse from './Components/WhyChooseUs/WhyChooseUs'

export default function Home() {
  return (
    <div className='bg-white px-[135px]'>
      <HeroSection/>
      <FlashSale/>
      <Categories/>
      <BestSellingProducts/>
      <Products/>
      <BestSellingProducts/>
      <NewArrival/>
      {/* <WhyChooseUse/> */}
    </div>
  )
}
