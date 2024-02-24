export const selectCars = state => state.cars.cars;
export const selectFavorite = state => state.cars.favorite;

export const selectFilters = state => state.cars.filters;

export const selectPagination = state => state.cars.pagination;
export const selectorLoading = state => state.cars.isLoading;
export const selectorError = state => state.cars.error;
