import { FC, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import EventCard from '../EventCard/EventCard';

import { data } from '../../shared/constants/api';

// Необходимо передать id в key при подключении api!!!
const EventList: FC = memo(() => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
    >
      {data[0].eventList.map((data, index) => (
        <SwiperSlide>
          <EventCard card={data} index={index} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default EventList;
