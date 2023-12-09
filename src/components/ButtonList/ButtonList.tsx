import { FC, memo } from "react";

import { IEventLine } from "../../shared/constants/type";

import EventButton from "./ui/EventButton/EventButton";

interface PropsButtonList {
  eventLines: IEventLine[];
}

const ButtonList: FC<PropsButtonList> = memo(({eventLines}) => {
  return (
    <ul className="advantages-circle advantages-circle_amount_6 event-widget__btns">
      {eventLines.map((line) => (
        <li className="advantages-circle__element">
          <EventButton id={line.id} />
        </li>
      ))}
    </ul>
  );
});

export default ButtonList;