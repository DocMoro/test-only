import { FC, memo, useState, useCallback, useRef } from 'react';
import gsap from 'gsap';

import EventList from '../EventList/EventList';
import Counter from '../Counter/Counter';
import EventBoard from '../EventBoard/EventBoard';

import { data, max } from '../../shared/constants/api';

import useAnimated from './hooks/useAnimated';

const EventWidget: FC = memo(() => {
  const [count, setCount] = useState<number>(1);
  const boxRef = useRef<HTMLDivElement>(null);

  useAnimated(count, boxRef);

  const handleChangeEvent = useCallback((id: number) => {
    const deg = (360 / max) * (max - id + 1);
    gsap.to('.board__circle', { rotation: deg });
    gsap.to('.board__circle-element', { rotation: -deg });
    setCount(id);
  }, []);

  return (
    <section className="event-widget" ref={boxRef}>
      <div className="event-widget__line1"></div>
      <div className="event-widget__line2"></div>
      <EventBoard
        current={count}
        eventLines={data}
        cbCount={handleChangeEvent}
      />
      <Counter current={count} cbCount={handleChangeEvent} />
      <EventList current={count} />
    </section>
  );
});

export default EventWidget;
