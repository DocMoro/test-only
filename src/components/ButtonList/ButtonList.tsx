import { FC, memo } from "react";

import { IEventLine } from "../../shared/constants/type";

import EventButton from "./ui/EventButton/EventButton";

interface PropsButtonList {
  eventLines: IEventLine[];
  cbCount: (current: number) => void;
  current: number;
}

const ButtonList: FC<PropsButtonList> = memo(({ eventLines, cbCount, current }) => {
  return (
    <ul className={`advantages-circle advantages-circle_amount_${eventLines.length} event-widget__btns`}>
      {eventLines.map((line) => (
        <li className="advantages-circle__element">
          <EventButton current={current} id={line.id} key={line.id} cbCount={cbCount} />
        </li>
      ))}
    </ul>
  );
});

export default ButtonList;