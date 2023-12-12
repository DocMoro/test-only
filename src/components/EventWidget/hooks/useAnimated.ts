import { useEffect } from 'react';
import gsap from 'gsap';

import { data, max } from '../../../shared/constants/api';

export default function useAnimated(
  count: number,
  boxRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const eventList = data[count - 1].eventList;
    const startDate = eventList[0].date;
    const endDate = eventList[eventList.length - 1].date;
    const deg = (360 / max) * (max - count + 1);
    gsap.context(() => {
      gsap.to('.board__circle', { rotation: deg });
      gsap.to('.board__circle-element', { rotation: -deg });
      gsap.to('.swiper-wrapper', { opacity: 0 });
      gsap.to('.board__subtitle', { opacity: 0 });
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
        .fromTo('.board__btn-name_is-active', { opacity: 0 }, { opacity: 1 });
    }, boxRef);
  }, [count, boxRef]);
}
