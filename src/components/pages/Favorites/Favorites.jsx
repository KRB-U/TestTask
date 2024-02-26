import { createSelector } from '@reduxjs/toolkit';
import CarCard from 'components/CarCard/CarCard';
import { CarFilter } from 'components/CarFilter/CarFilter';
import { selectFavorite, selectFilters } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { ContainerFavorite } from './Favorites.styled';

function Favorites() {
  const favorites = useSelector(selectFavorite);

  const {
    make: makeFilter,
    pricePerHour,
    minMileage,
    maxMileage,
  } = useSelector(selectFilters);

  const filteredCars = favorites.filter(car => {
    const { make, rentalPrice, mileage } = car;

    return (
      (makeFilter === '' || make === makeFilter) &&
      (pricePerHour === '' || rentalPrice <= pricePerHour) &&
      (minMileage === '' || mileage >= parseInt(minMileage)) &&
      (maxMileage === '' || mileage <= parseInt(maxMileage))
    );
  });

  return (
    <>
      <CarFilter />
      <ContainerFavorite>
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </ContainerFavorite>
    </>
  );
}

export default Favorites;
