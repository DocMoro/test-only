import { FC, memo, useCallback } from 'react';

const classType = {
  next: 'button-template_type_next',
  prev: 'button-template_type_prev',
  text: 'button-template_type_text',
};

interface PropsButtonTemplate {
  cbClick: () => void;
  disabled?: boolean;
  className?: string;
  type: 'next' | 'prev' | 'text';
  children?: string | JSX.Element;
}

const ButtonTemplate: FC<PropsButtonTemplate> = memo(
  ({ cbClick, disabled, className, type, children }) => {
    const handleClick = useCallback(() => {
      cbClick();
    }, [cbClick]);

    return (
      <button
        className={`button-template ${classType[type]} ${className}`}
        onClick={handleClick}
        disabled={disabled}
        type="button"
      >
        {children}
      </button>
    );
  }
);

ButtonTemplate.defaultProps = {
  disabled: false,
  className: '',
  children: '',
};

export default ButtonTemplate;
