import React from 'react';

interface Props {
  inputValue: string;
  TextareaValue: string;
}

const InputTextarea: React.FC<Props> = () => {
  return (
    <div>
      <div className="mt-4">
        <input className="w-full border rounded py-2 px-3" type={'text'} />
      </div>
      <div className="mt-4">
        <textarea className="w-full min-h-[200px] max-h-[200px] border rounded py-2 px-3" />
      </div>
    </div>
  );
};

export default InputTextarea;
