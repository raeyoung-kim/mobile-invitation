import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  fontFamily?: string;
}

const WayToCome: FC<Props> = ({
  title,
  description,
  fontFamily = 'font-thin',
}) => {
  return (
    <div
      className={classNames('px-5 py-2', {
        'font-myeongjo': fontFamily === 'font-myeongjo',
        'font-thin': fontFamily === 'font-thin',
        'font-stylish': fontFamily === 'font-stylish',
      })}
    >
      <p className="text-lg font-semibold text-[#d69191]">{title}</p>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default WayToCome;
