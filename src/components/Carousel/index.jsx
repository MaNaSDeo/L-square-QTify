import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Card from '../Card'
import './Carousel.css'

function index({playListData, navId}) {
  // console.log(playListData)
  // console.log(`Songs name - ${playListData[1].songs.length}`)
  playListData.map(element => {
    if(element.songs){console.log(element.songs.length)}
  })

  return (
    <div className='carousel-container'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        navigation={{ nextEl: `.arrow-left-${navId}`, prevEl: `.arrow-right-${navId}` }}
      >
        {playListData.map(element => {
          return(
            <SwiperSlide key={element.id} >
              <Card 
                imgSrc={element.image} 
                followers={element.follows? element.follows : element.likes} 
                title={element.title} 
                songsCount={element.songs ? element.songs.length : undefined}
                // if(element.songs)
                // songsCount={'52'}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
        <div className={`arrow-left-${navId} arrow-left arrow`}>
          <img src="left-arrow.png" alt="Prev Icon" />
        </div>
        <div className={`arrow-right-${navId} arrow-right arrow`}>
          <img src="right-arrow.png" alt="Next Icon" />
        </div>
    </div>
  )
}

export default index
