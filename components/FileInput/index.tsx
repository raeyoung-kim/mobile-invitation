import React, { useRef } from 'react';

const FileInput: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const filelist = e.target.files;
    const formData = new FormData();

    filelist && formData.append('file', filelist?.[0]);

    console.log(formData);
  };

  return (
    <div>
      <input
        accept="*"
        ref={fileRef}
        onChange={onFileChange}
        type="file"
        className="hidden"
      />
      <div
        onClick={() => {
          fileRef && fileRef.current?.click();
        }}
        className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300"
      >
        +
      </div>
    </div>
  );
};

export default FileInput;
