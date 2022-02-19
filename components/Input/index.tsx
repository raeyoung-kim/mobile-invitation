import classnames from 'classnames';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

const Input: React.FC<Props> = ({
  value = '',
  type = 'text',
  placeholder = '',
  onChange,
  onFocus,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="relative">
      <div className="absolute">
        {isFocus && (
          <label
            className={classnames(
              'relative bg-white -top-3 text-xs font-sanspro',
              {
                'text-gray-500': value && isFocus,
              }
            )}
          >
            {placeholder}
          </label>
        )}
      </div>
      <div className="focus-within:border-2 focus-within:rounded focus-within:border-black ">
        <input
          type={type}
          className={
            'text-input focus:outline-none focus:border-none focus:placeholder-white'
          }
          value={value}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e);
          }}
          onFocus={() => {
            onFocus && onFocus();
            setIsFocus(!isFocus);
          }}
          onBlur={() => {
            !value && setIsFocus(!isFocus);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
