import React from 'react';

interface Props {
  inputValue: string;
  inputPlaceholder?: string;
  textareaValue: string;
  textareaPlaceholder?: string;
}

const InputTextarea: React.FC<Props> = ({
  inputPlaceholder,
  textareaPlaceholder,
}) => {
  return (
    <div>
      <div className="mt-4">
        <input
          className="w-full border rounded py-2 px-3"
          type={'text'}
          placeholder={inputPlaceholder}
        />
      </div>
      <div className="mt-4">
        <textarea
          className="w-full min-h-[200px] max-h-[200px] border rounded py-2 px-3"
          placeholder={textareaPlaceholder}
        />
      </div>
    </div>
  );
};

export default InputTextarea;
