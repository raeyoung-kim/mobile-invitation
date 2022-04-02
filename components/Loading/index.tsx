import React, { FC, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import data from './data.json';

const Loading: FC = () => {
  const container = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    container.current &&
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data,
      });
  }, []);

  return <div className="h-52 w-52" ref={container}></div>;
};

export default Loading;
