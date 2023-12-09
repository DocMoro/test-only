import { FC, memo, useCallback, useEffect } from 'react';
import gsap from 'gsap';

import ButtonTemplate from '../../../../shared/ui/ButtonTemplate/ButtonTemplate';

interface PropsEventButton {
  id: string;
  cbCount: (current: number) => void;
  current: number;
  name: string;
}

const EventButton: FC<PropsEventButton> = memo(({ id, cbCount, current, name }) => {
  const isActive = current === +id;

  const handleClick = useCallback(() => {
    cbCount(+id);
  }, [cbCount, id]);

  useEffect(() => {
    gsap.to('board__btn-name_is-active', { opacity: 0 });
  }, [isActive]);

  return (
    <div className="board__btn-container">
      <ButtonTemplate
        type="text"
        cbClick={handleClick}
        className={`board__btn ${isActive ? 'board__btn_is-active' : ''}`}
        disabled={isActive}
      >
        {id}
      </ButtonTemplate>
      <p
        className={`board__btn-name ${
          isActive ? 'board__btn-name_is-active' : 'board__btn-name_not-active'
        }`}
      >{name}</p>
    </div>
  );
});

export default EventButton;
