import { FC, memo } from "react";

import EventList from "../EventList/EventList";

const EventWidget: FC = memo(() => {
  return (
    <section className="event-widget">
      <EventList />
    </section>
  );
});

export default EventWidget;