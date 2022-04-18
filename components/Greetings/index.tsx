import React, { FC } from 'react';

interface Props {
  data: string;
  className?: string;
  male: {
    fatheName: string;
    isFather: boolean;
    motherName: string;
    isMother: boolean;
    rank: string;
    name: string;
  };
  female: {
    fatheName: string;
    isFather: boolean;
    motherName: string;
    isMother: boolean;
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
  console.log(male, female);

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
        {(male.fatheName || male.motherName) && male.rank ? (
          <div className="text-center flex justify-center items-center text-base mt-16">
            <p>{`${!male.isFather ? '(故)' : ''}${male.fatheName} · ${
              !male.isMother ? '(故)' : ''
            }${male.motherName}`}</p>
            <p className="text-xs mx-1">{` ${male.rank} `}</p>
            <p>{male.name}</p>
          </div>
        ) : null}
        {(female.fatheName || female.motherName) && female.rank ? (
          <div className="text-center flex justify-center items-center text-base mt-2">
            <p>{`${!female.isFather ? '(故)' : ''}${female.fatheName} · ${
              !female.isMother ? '(故)' : ''
            }${female.motherName}`}</p>
            <p className="text-xs mx-1">{` ${female.rank} `}</p>
            <p>{female.name}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Greetings;
