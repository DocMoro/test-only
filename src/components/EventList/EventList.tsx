import { FC, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import EventCard from '../EventCard/EventCard';

import { data } from '../../shared/constants/api';

interface PropsEventList {
  current: number;
}

// Необходимо передать id в key при подключении api!!!
const EventList: FC<PropsEventList> = memo(({ current }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
    >
      {data[current - 1].eventList.map((data, index) => (
        <SwiperSlide>
          <EventCard card={data} index={index} key={data.date} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default EventList;
