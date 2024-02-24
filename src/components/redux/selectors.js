export const selectCars = state => state.cars.cars;
export const selectFilters = state => state.cars.filters;

export const selectFavorite = state => state.cars.favorite;

export const selectPagination = state => state.cars.pagination;
export const selectorLoading = state => state.cars.isLoading;
export const selectorError = state => state.cars.error;

export const selectVisibleCars = state => {
  const cars = selectCars(state);
  const filters = selectFilters(state);

  if (Object.values(filters).every(value => value === '' || value === 0)) {
    return cars;
  }

  const filteredCars = cars.filter(car => {
    const { make, rentalPrice, mileage } = car;
    const { make: makeFilter, pricePerHour, minMileage, maxMileage } = filters;

    return (
      (!makeFilter || make === makeFilter) &&
      (!pricePerHour || rentalPrice <= pricePerHour) &&
      (!minMileage || mileage >= minMileage) &&
      (!maxMileage || mileage <= maxMileage)
    );
  });

  //   state.cars = filteredCars;

  return filteredCars;
};

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
