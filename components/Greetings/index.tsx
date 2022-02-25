import React, { FC } from 'react';

interface Props {
  data: string;
  className?: string;
}

const Greetings: FC<Props> = ({
  data,
  className = 'font-myeongjo text-sm',
}) => {
  const result = data.split('\n');

  return (
    <div className="my-5 py-6">
      {result?.map((value, i) => {
        return (
          <div key={i} className={'text-center'}>
            <span key={i} className={className}>
              {value}
            </span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Greetings;
