import { FC, memo, useState, useCallback } from 'react';
import gsap from 'gsap';

import EventList from '../EventList/EventList';
import Counter from '../Counter/Counter';
import ButtonList from '../ButtonList/ButtonList';

import { data } from '../../shared/constants/api';

const EventWidget: FC = memo(() => {
  const [count, setCount] = useState(1);
  const max = data.length;

  const handleChangeEvent = useCallback((id: number) => {
    const deg = (360 / max) * (max - +id + 1);
    gsap.to('.advantages-circle', { rotation: deg });
    gsap.to('.advantages-circle__element', { rotation: - deg });
    setCount(id);
  }, [max]);

  return (
    <section className="event-widget">
      <ButtonList current={count} eventLines={data} cbCount={handleChangeEvent} />
      <Counter current={count} max={max} cbCount={handleChangeEvent} />
      <EventList />
    </section>
  );
});

export default EventWidget;
