import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const WayToCome: FC<Props> = ({ title, description }) => {
  return (
    <div className="px-5 py-2 font-thin">
      <p className="text-lg text-[#d69191]">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WayToCome;
