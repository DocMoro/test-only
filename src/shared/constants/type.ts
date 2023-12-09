interface IEventCard {
  date: string;
  text: string;
}

interface IEventLine {
  id: string;
  name: string;
  eventList: IEventCard[];
}

export type { IEventCard, IEventLine };
