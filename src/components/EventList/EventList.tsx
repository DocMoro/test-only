import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './EventList.scss';
import { FC, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const EventList: FC = memo(() => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
});

export default EventList;
