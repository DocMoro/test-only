import { FC, memo } from "react";

import { IEventCard } from "../../shared/constants/type";

interface PropsEventCard {
  card: IEventCard,
  index: number
}

const EventCard: FC<PropsEventCard> = memo(({card, index}) => {
  return (
    <div className={`event-card ${index % 2 ? 'event-card_width_two' : 'event-card_width_one'}`}>
      <h3 className="event-card__title">{card.date}</h3>
      <p className="event-card__text">{card.text}</p>
    </div>
  );
});

export default EventCard;