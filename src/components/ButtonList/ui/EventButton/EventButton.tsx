import { FC, memo } from 'react';

import ButtonTemplate from '../../../../shared/ui/ButtonTemplate/ButtonTemplate';

interface PropsEventButton {
  id: string;
}

const EventButton: FC<PropsEventButton> = memo(({ id }) => {
  return (
    <ButtonTemplate type="text" cbClick={() => {}} className="button-list__btn">
      {id}
    </ButtonTemplate>
  );
});

export default EventButton;
