import classNames from 'classnames';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  type?: string;
  height?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<Props> = ({
  value = '',
  placeholder = '',
  onChange,
  height,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="relative">
      <div className="absolute">
        {isFocus || value ? (
          <label className="relative bg-white -top-3 text-xs font-sanspro">
            {placeholder}
          </label>
        ) : null}
      </div>
      <div className="focus-within:border-2 focus-within:rounded focus-within:border-black ">
        <textarea
          className={classNames(
            'w-full max-h-[200px] border rounded py-2 px-3 focus:outline-none focus:border-none focus:placeholder-white'
          )}
          style={{ height }}
          value={value}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(e);
          }}
          onFocus={() => setIsFocus(!isFocus)}
          onBlur={() => setIsFocus(!isFocus)}
        />
      </div>
    </div>
  );
};

export default Textarea;
