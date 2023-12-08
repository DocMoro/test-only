import { FC, memo, useCallback } from 'react';

interface PropsButtonTemplate {
  cbClick: () => void;
  disabled?: boolean;
  className?: string;
  type: 'next' | 'prev';
}

const ButtonTemplate: FC<PropsButtonTemplate> = memo(
  ({ cbClick, disabled, className, type }) => {
    const handleClick = useCallback(() => {
      cbClick();
    }, [cbClick]);

    return (
      <button
        className={`button-template ${
          disabled ? 'button-template_disabled' : ''
        } ${
          type === 'next'
            ? 'button-template_icon_next'
            : 'button-template_icon_prev'
        } ${className}`}
        onClick={handleClick}
        disabled={disabled}
      ></button>
    );
  }
);

ButtonTemplate.defaultProps = {
  disabled: false,
  className: '',
};

export default ButtonTemplate;
