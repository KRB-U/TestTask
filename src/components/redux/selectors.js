import { createSelector } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

export const selectCars = state => state.cars.cars;
export const selectFilters = state => state.cars.filters;

export const selectFavorite = state => state.cars.favorite;

export const selectPagination = state => state.cars.pagination;
export const selectorLoading = state => state.cars.isLoading;
export const selectorError = state => state.cars.error;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilters],
  (cars, { make: makeFilter, pricePerHour, minMileage, maxMileage }) => {
    const filteredCars = cars.filter(car => {
      const { make, rentalPrice, mileage } = car;

      return (
        (makeFilter === '' || make === makeFilter) &&
        (pricePerHour === '' || rentalPrice <= pricePerHour) &&
        (minMileage === '' || mileage >= parseInt(minMileage)) &&
        (maxMileage === '' || mileage <= parseInt(maxMileage))
      );
    });

    // if (filteredCars.length === 0) {
    //   toast.info('Nothing found !', {
    //     position: 'top-center',
    //   });
    // }

    return filteredCars;
  }
);
