import { FC, memo, useCallback } from 'react';

import ButtonTemplate from '../../../../shared/ui/ButtonTemplate/ButtonTemplate';

interface PropsEventButton {
  id: string;
  cbCount: (current: number) => void;
  current: number;
}

const EventButton: FC<PropsEventButton> = memo(({ id, cbCount, current }) => {
  const isActive = current === +id;

  const handleClick = useCallback(() => {
    cbCount(+id);
  }, [cbCount, id]);

  return (
    <ButtonTemplate
      type="text"
      cbClick={handleClick}
      className={`button-list__btn ${
        isActive ? 'button-list__btn_is-active' : ''
      }`}
      disabled={isActive}
    >
      {id}
    </ButtonTemplate>
  );
});

export default EventButton;
