import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCars, selectPagination } from 'components/redux/selectors';
import { getAllCars } from 'components/redux/operations';

import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { CarFilter } from 'components/CarFilter/CarFilter';
import { nextPage } from 'components/redux/CarsSlice';

// const handleFilter = values => {
//   let filteredCars = [...cars];

//   if (values.make !== '') {
//     filteredCars = filteredCars.filter(car => car.make === values.make);
//   }

//   if (values.price !== '') {
//     filteredCars = filteredCars.filter(
//       car => parseInt(car.rentalPrice) <= parseInt(values.price)
//     );
//   }

//   if (values.minMileage !== '') {
//     filteredCars = filteredCars.filter(
//       car => car.mileage >= parseInt(values.minMileage)
//     );
//   }

//   if (values.maxMileage !== '') {
//     filteredCars = filteredCars.filter(
//       car => car.mileage <= parseInt(values.maxMileage)
//     );
//   }

//   // setCars(filteredCars);
// };

function Catalog() {
  const cars = useSelector(selectCars);
  const { page } = useSelector(selectPagination);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(getAllCars(page));
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
