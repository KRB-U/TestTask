import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <div style={{ width: '1184px', margin: '0 auto', marginTop: '20px' }}>
      <Header />
      <Suspense fallback={<div>wait...</div>}>
        <Outlet />
        <ToastContainer autoClose={2000} closeOnClick />
      </Suspense>
    </div>
  );
};
