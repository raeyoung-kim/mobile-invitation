import { Input, Textarea } from 'components';
import React from 'react';

interface Props {
  inputValue?: string;
  inputPlaceholder?: string;
  textareaValue?: string;
  textareaPlaceholder?: string;
  onChageInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextarea: React.FC<Props> = ({
  inputValue,
  inputPlaceholder,
  textareaPlaceholder,
  textareaValue,
  onChageInput,
  onChangeTextarea,
}) => {
  return (
    <div>
      <div className="mt-4">
        <Input
          type={'text'}
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={onChageInput}
        />
      </div>
      <div className="mt-4">
        <Textarea
          value={textareaValue}
          placeholder={textareaPlaceholder}
          onChange={onChangeTextarea}
        />
      </div>
    </div>
  );
};

export default InputTextarea;
