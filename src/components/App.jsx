import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from './redux/operations';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars(1), []);
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
