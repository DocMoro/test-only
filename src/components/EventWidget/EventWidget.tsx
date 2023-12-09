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
    gsap.to('.advantages-circle', { rotation: (360 / max) * (max - +id) });
    gsap.to('.advantages-circle__element', { rotation: - (360 / max) * (max - +id) });
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
