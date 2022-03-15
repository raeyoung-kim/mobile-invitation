import { Header, Footer } from 'components';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/sample/[id]' && <Header />}
      {children}
      {pathname !== '/sample/[id]' && <Footer />}
    </>
  );
};

export default Layout;
