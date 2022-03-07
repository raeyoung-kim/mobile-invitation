import React, { FC } from 'react';

interface Props {
  data: string;
  className?: string;
  male: {
    fatheName: string;
    motherName: string;
    rank: string;
    name: string;
  };
  female: {
    fatheName: string;
    motherName: string;
    rank: string;
    name: string;
  };
}

const Greetings: FC<Props> = ({
  data,
  className = 'font-myeongjo text-sm',
  male,
  female,
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
      <div className={className}>
        <div className="text-center flex justify-center items-center text-base mt-16">
          <p>{`${male.fatheName} · ${male.motherName}`}</p>
          <p className="text-xs mx-1">{` ${male.rank} `}</p>
          <p>{male.name}</p>
        </div>
        <div className="text-center flex justify-center items-center text-base mt-2">
          <p>{`${female.fatheName} · ${female.motherName}`}</p>
          <p className="text-xs mx-1">{` ${female.rank} `}</p>
          <p>{female.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
