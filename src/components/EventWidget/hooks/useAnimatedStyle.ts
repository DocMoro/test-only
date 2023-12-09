import gsap from 'gsap';

import { useEffect } from 'react';

import { data } from '../../../shared/constants/api';

export default function useAnimatedStyle(
  max: number,
  count: number,
  id: number,
  boxRef: React.RefObject<HTMLDivElement>
) {
  const eventList = data[count - 1].eventList;
  const startDate = eventList[0].date;
  const endDate = eventList[eventList.length - 1].date;

  const deg = (360 / max) * (max - +id + 1);

  useEffect(() => {
    gsap.context(() => {
      gsap.to('.board__date_color_blue', {
        innerText: startDate,
        snap: {
          innerText: 1,
        },
      });
      gsap.fromTo('.board__btn-name_not-active', { opacity: 0 }, { opacity: 1 });
      gsap.timeline().to('.board__date_color_pink', {
        innerText: endDate,
        snap: {
          innerText: 1,
        },
      });
    }, boxRef);
  }, [startDate, endDate, boxRef]);

  return () => {
    gsap.context(() => {
      gsap.to('.board__circle', { rotation: deg });
      gsap.to('.board__circle__element', { rotation: -deg });
    }, boxRef);
  };
}
