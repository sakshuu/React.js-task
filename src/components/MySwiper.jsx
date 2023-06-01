import React, { useEffect } from 'react'
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "swiper/css";
import "./../assets/css/details.css";
import { useDispatch, useSelector } from 'react-redux';
import { movieListShow } from '../redux/action/movieAction';

const MySwiper = () => {


  const actionDispatch = useDispatch()
  const {movieList} = useSelector(state => state.allMovie)

  useEffect(() => {
    actionDispatch(movieListShow())
  }, [])

  return <>
  <div className="container footer-section">

  <div >

  <h2>You might also like</h2>
      <Swiper
   spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 700,
         disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
       }}
       navigation={true}
       modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
       
       effect={"coverflow"}
       grabCursor={true}
       slidesPerView={"auto"}
       coverflowEffect={{
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
    }}
   className="mySwiper "
 >
  {
    movieList.map(item =>  <>
   <SwiperSlide> 
       <div class="card">
       <img src={item.show.image?.original} />
       <div class="card-footers ">
      <small class="text-muted"><i class="bi b-colour bi-star-fill"></i> {item.show.rating.average}</small>
    </div>
       </div>
   </SwiperSlide>  
    </>
      )
  }
 </Swiper>
     </div>
    </div>
  </>
}

export default MySwiper