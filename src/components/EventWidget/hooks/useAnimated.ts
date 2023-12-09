import { useEffect } from 'react';
import gsap from 'gsap';

import { data } from '../../../shared/constants/api';

export default function useAnimated(count: number, boxRef: any) {
  const eventList = data[count - 1].eventList;
  const startDate = eventList[0].date;
  const endDate = eventList[eventList.length - 1].date;

  useEffect(() => {
    gsap.context(() => {
      gsap.to('.board__btn-name_not-active', { opacity: 0 });
      gsap
        .timeline()
        .to('.board__date_color_blue', {
          innerText: startDate,
          snap: {
            innerText: 1,
          },
        })
        .fromTo('.swiper-wrapper', { opacity: 0, y: 25 }, { opacity: 1, y: 0 })
        .fromTo(
          '.board__subtitle',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=.5'
        );
      gsap
        .timeline()
        .to('.board__date_color_pink', {
          innerText: endDate,
          snap: {
            innerText: 1,
          },
        })
        .to('.board__btn-name_is-active', { opacity: 1 });
    }, boxRef);
  }, [startDate, endDate, boxRef]);
}
