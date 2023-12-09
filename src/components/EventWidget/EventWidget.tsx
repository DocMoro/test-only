import { FC, memo, useState, useCallback, useRef, useEffect } from 'react';
import gsap from 'gsap';

import EventList from '../EventList/EventList';
import Counter from '../Counter/Counter';
import EventBoard from '../EventBoard/EventBoard';

import { data } from '../../shared/constants/api';

const EventWidget: FC = memo(() => {
  const [count, setCount] = useState(1);
  const boxRef = useRef(null);

  const max = data.length;
  const eventList = data[count - 1].eventList;
  const startDate = eventList[0].date;
  const endDate = eventList[eventList.length - 1].date;

  const handleChangeEvent = useCallback(
    (id: number) => {
      const deg = (360 / max) * (max - +id + 1);
      gsap.context(() => {
        gsap.to('.board__circle', { rotation: deg });
        gsap.to('.board__circle__element', { rotation: -deg });
        gsap.to('.swiper-wrapper', { opacity: 0 });
      }, boxRef);
      setCount(id);
    },
    [max]
  );

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

  return (
    <section className="event-widget" ref={boxRef}>
      <EventBoard
        current={count}
        eventLines={data}
        cbCount={handleChangeEvent}
      />
      <Counter current={count} max={max} cbCount={handleChangeEvent} />
      <EventList current={count} />
    </section>
  );
});

export default EventWidget;
