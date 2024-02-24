import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCars,
  selectFilters,
  selectPagination,
  selectVisibleCars,
} from 'components/redux/selectors';
import { getAllCars } from 'components/redux/operations';

import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { CarFilter } from 'components/CarFilter/CarFilter';
import { nextPage } from 'components/redux/CarsSlice';

function Catalog() {
  const cars = useSelector(selectCars);
  const { page } = useSelector(selectPagination);

  const visibleCars = useSelector(selectVisibleCars);
  // console.log(visibleCars);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(getAllCars(page + 1));
    dispatch(nextPage(1));
  };

  useEffect(() => {
    dispatch(getAllCars(page));
  }, []);

  return (
    <div>
      {/* <CarFilter handleFilter={handleFilter} /> */}
      <CarFilter />
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      {cars.length <= 32 && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
}

export default Catalog;
