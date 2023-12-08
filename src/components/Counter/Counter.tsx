import { FC, memo, useCallback } from 'react';

import ButtonTemplate from '../../shared/ui/ButtonTemplate/ButtonTemplate';

interface PropsCounter {
  current: number;
  max: number;
  cbCount: (current: number) => void;
}

const Counter: FC<PropsCounter> = memo(({ current, max, cbCount }) => {
  const handleClickNextBtn = useCallback(() => {
    cbCount(current + 1);
  }, [cbCount, current]);

  const handleClickPrevBtn = useCallback(() => {
    cbCount(current - 1);
  }, [cbCount, current]);

  return (
    <article className="counter">
      <p className="counter__text">{`0${current}/0${max}`}</p>
      <div className="counter__container">
        <ButtonTemplate
          type="prev"
          cbClick={handleClickPrevBtn}
          disabled={current === 1}
          className="counter__button"
        />
        <ButtonTemplate
          type="next"
          cbClick={handleClickNextBtn}
          disabled={current === max}
          className="counter__button"
        />
      </div>
    </article>
  );
});

export default Counter;
