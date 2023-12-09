import { FC, memo, useEffect } from 'react';
import gsap from 'gsap';

import { IEventLine } from '../../shared/constants/type';
import { data } from '../../shared/constants/api';

import EventButton from './ui/EventButton/EventButton';

interface PropsEventBoard {
  eventLines: IEventLine[];
  cbCount: (current: number) => void;
  current: number;
}

const EventBoard: FC<PropsEventBoard> = memo(
  ({ eventLines, cbCount, current }) => {
    const eventList = data[current - 1].eventList;
    const startDate = eventList[0].date;
    const endDate = eventList[eventList.length - 1].date;

    useEffect(() => {
      gsap.to('.board__date_color_blue', {
        innerText: startDate,
        duration: 1,
        snap: {
          innerText: 1,
        },
      });
      gsap.to('.board__date_color_pink', {
        innerText: endDate,
        duration: 1,
        snap: {
          innerText: 1,
        },
      });
    }, [startDate, endDate]);

    return (
      <div className="board">
        <p className="board__date">
          <span className="board__date_color_blue"></span>
          &nbsp;&nbsp;
          <span className="board__date_color_pink"></span>
        </p>
        <ul
          className={`board__circle board__circle_amount_${eventLines.length} event-widget__btns`}
        >
          {eventLines.map((line) => (
            <li className="board__circle__element">
              <EventButton
                current={current}
                id={line.id}
                key={line.id}
                cbCount={cbCount}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default EventBoard;
