import React from 'react';
import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  value = '',
  type = 'text',
  placeholder = '',
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        className={'text-input'}
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange && onChange(e);
        }}
      />
    </div>
  );
};

export default Input;
