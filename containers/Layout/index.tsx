import { Header, Footer } from 'components';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  const get = (children: JSX.Element) => {
    switch (pathname) {
      case '/sample/[id]':
        return null;
      case '/history/[id]':
        return null;
      default:
        return children;
    }
  };

  return (
    <>
      {get(<Header />)}
      {children}
      {get(<Footer />)}
    </>
  );
};

export default Layout;
