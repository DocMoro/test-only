import { FC, memo, useState } from 'react';

import EventList from '../EventList/EventList';
import Counter from '../Counter/Counter';
import ButtonList from '../ButtonList/ButtonList';

import { data } from '../../shared/constants/api';

const EventWidget: FC = memo(() => {
  const [count, setCount] = useState(2);

  return (
    <section className="event-widget">
      <ButtonList eventLines={data} />
      <Counter current={count} max={6} cbCount={setCount} />
      <EventList />
    </section>
  );
});

export default EventWidget;
