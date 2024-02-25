import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCars,
  selectPagination,
  selectVisibleCars,
  selectorLoading,
} from 'components/redux/selectors';
import { getAllCars } from 'components/redux/operations';

import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { CarFilter } from 'components/CarFilter/CarFilter';
import { nextPage } from 'components/redux/CarsSlice';

function Catalog() {
  const cars = useSelector(selectCars);
  const { page } = useSelector(selectPagination);
  const isLoading = useSelector(selectorLoading);

  const visibleCars = useSelector(selectVisibleCars);
  console.log(visibleCars);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(nextPage(1));
    dispatch(getAllCars());
  };

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <CarFilter />
      {visibleCars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      {visibleCars.length <= 32 && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
}

export default Catalog;
