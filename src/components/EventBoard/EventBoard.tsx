import { FC, memo } from 'react';

import { IEventLine } from '../../shared/constants/type';

import EventButton from './ui/EventButton/EventButton';

interface PropsEventBoard {
  eventLines: IEventLine[];
  cbCount: (current: number) => void;
  current: number;
}

const EventBoard: FC<PropsEventBoard> = memo(
  ({ eventLines, cbCount, current }) => {
    return (
      <div className="board">
        <div className="board__container">
          <div className="board__gradient"></div>
          <h2 className="board__title">Исторические даты</h2>
        </div>
        <p className="board__date">
          <span className="board__date_color_blue"></span>
          &nbsp;&nbsp;
          <span className="board__date_color_pink"></span>
        </p>
        <div className="board__wrapper">
          <ul
            className={`board__circle board__circle_amount_${eventLines.length}`}
          >
            {eventLines.map((line) => (
              <li className="board__circle__element">
                <EventButton
                  current={current}
                  id={line.id}
                  key={line.id}
                  cbCount={cbCount}
                  name={line.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <h3 className="board__subtitle">{eventLines[current - 1].name}</h3>
      </div>
    );
  }
);

export default EventBoard;
