import React, { FC } from 'react';
import { Map } from 'components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import classNames from 'classnames';

interface Props {
  addressName: string;
  address: string;
  detailAddress: string;
  contact: string;
  fontFamily?: string;
}

const AddressLocation: FC<Props> = ({
  addressName,
  address,
  detailAddress,
  contact,
  fontFamily,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <FaMapMarkerAlt className="text-3xl" />
      </div>
      <p
        className={classNames('py-5 text-center text-lg', {
          'font-myeongjo': fontFamily === 'font-myeongjo',
          'font-thin': fontFamily === 'font-thin',
          'font-stylish': fontFamily === 'font-stylish',
        })}
      >
        {addressName}
      </p>
      <p
        className={classNames('text-center text-xs', {
          'font-myeongjo': fontFamily === 'font-myeongjo',
          'font-thin': fontFamily === 'font-thin',
          'font-stylish': fontFamily === 'font-stylish',
        })}
      >
        {address} {detailAddress}
      </p>
      <a
        href={`tel:${contact}`}
        className="flex items-center justify-center text-xs mt-2"
      >
        <IoMdCall />
        <p
          className={classNames('text-xs', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          {contact}
        </p>
      </a>
      <div className="pt-9">
        <Map address={address} />
      </div>
    </div>
  );
};

export default AddressLocation;
