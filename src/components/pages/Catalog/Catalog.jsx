import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectPagination,
  selectVisibleCars,
} from 'components/redux/selectors';
import { getAllCars } from 'components/redux/operations';

import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { CarFilter } from 'components/CarFilter/CarFilter';
import { nextPage } from 'components/redux/CarsSlice';
import { ContainerCatalog } from './Catalog.styled';

function Catalog() {
  const { page } = useSelector(selectPagination);

  const visibleCars = useSelector(selectVisibleCars);

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
      <ContainerCatalog>
        {visibleCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
        {page !== 3 && <ButtonLoadMore onClick={handleLoadMore} />}
      </ContainerCatalog>
    </div>
  );
}

export default Catalog;
