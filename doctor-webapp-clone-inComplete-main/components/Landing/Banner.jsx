import React from 'react'
import SwiperCore, { Navigation, Pagination , Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.css';
import Search from '../Search';


SwiperCore.use([Navigation, Pagination,Autoplay]);

function Banner() {
  return (
    <React.Fragment>
    <Search />
    <div>
      <div className="img-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={ {delay:5500, disableOnInteraction:false}}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src="/images/swipper-image/4805.jpg" alt="img"/></SwiperSlide>
          <SwiperSlide><img src="../images/swipper-image/19901.jpg" alt="img"/></SwiperSlide>
          <SwiperSlide><img src="../images/swipper-image/4948688.jpg" alt="img"/></SwiperSlide>
          
        </Swiper>
      </div>

      <div className="slider-text">

        <article>
          <div className="banner-text-1">
              <h1>
                Join India's Leading Online Fitness & Nutrition Community​
              </h1>
              <p> Sign-up & meet your Fitness partner. It's free and protected by an NDA</p>
          </div>

          <div className="banner-text-2">             
            <div className="p-1"><Link href="/" ><a>Register As Trainer</a></Link></div>
            <div className="p-2"><Link href="/"><a>Register As a Client</a></Link></div>
          </div>
        </article>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Banner
