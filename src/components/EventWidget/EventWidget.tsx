import { FC, memo, useState, useCallback } from 'react';
import gsap from 'gsap';

import EventList from '../EventList/EventList';
import Counter from '../Counter/Counter';
import EventBoard from '../EventBoard/EventBoard';

import { data } from '../../shared/constants/api';

const EventWidget: FC = memo(() => {
  const [count, setCount] = useState(1);
  const max = data.length;

  const handleChangeEvent = useCallback(
    (id: number) => {
      const deg = (360 / max) * (max - +id + 1);
      gsap.to('.board__circle', { rotation: deg });
      gsap.to('.board__circle__element', { rotation: -deg });
      setCount(id);
    },
    [max]
  );

  return (
    <section className="event-widget">
      <EventBoard
        current={count}
        eventLines={data}
        cbCount={handleChangeEvent}
      />
      <Counter current={count} max={max} cbCount={handleChangeEvent} />
      <EventList />
    </section>
  );
});

export default EventWidget;
