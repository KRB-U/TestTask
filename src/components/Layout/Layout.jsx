import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>wait...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
