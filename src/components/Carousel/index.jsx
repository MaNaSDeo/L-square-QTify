import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Card from '../Card'
import './Carousel.css'

function index({playListData}) {
  return (
    <div className='carousel-container'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        // spaceBetween={'auto'}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      >
        {playListData.map(element => {
          return(
            <SwiperSlide key={element.id} >
              <Card 
                imgSrc={element.image} 
                followers={element.follows? element.follows : element.likes} 
                title={element.title} 
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
        <div className="arrow-left arrow">
          <img src="left-arrow.png" alt="Prev Icon" />
        </div>
        <div className="arrow-right arrow">
          <img src="right-arrow.png" alt="Next Icon" />
        </div>
    </div>
  )
}

export default index
