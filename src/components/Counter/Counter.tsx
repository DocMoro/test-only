import { FC, memo, useCallback } from 'react';

import ButtonTemplate from '../../shared/ui/ButtonTemplate/ButtonTemplate';

interface PropsCounter {
  current: number;
  max: number;
  cbCount: (current: number) => void;
}

const Counter: FC<PropsCounter> = memo(({ current, max, cbCount }) => {
  const checkNextBtn = current === max;
  const checkPrevBtn = current === 1;

  const handleClickNextBtn = useCallback(() => {
    cbCount(current + 1);
  }, [cbCount, current]);

  const handleClickPrevBtn = useCallback(() => {
    cbCount(current - 1);
  }, [cbCount, current]);

  return (
    <article className="counter event-widget__counter">
      <p className="counter__text">{`0${current}/0${max}`}</p>
      <div className="counter__container">
        <ButtonTemplate
          type="prev"
          cbClick={handleClickPrevBtn}
          disabled={checkPrevBtn}
          className={`counter__button ${
            checkPrevBtn
              ? 'counter__button_state_not-active'
              : 'counter__button_state_active'
          }`}
        />
        <ButtonTemplate
          type="next"
          cbClick={handleClickNextBtn}
          disabled={checkNextBtn}
          className={`counter__button ${
            checkNextBtn
              ? 'counter__button_state_not-active'
              : 'counter__button_state_active'
          }`}
        />
      </div>
    </article>
  );
});

export default Counter;
