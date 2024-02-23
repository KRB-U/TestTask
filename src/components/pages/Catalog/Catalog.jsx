import { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { fetchCars } from 'components/helpers/API';
import { CarFilter } from 'components/CarFilter/CarFilter';

function Catalog() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    try {
      const response = await fetchCars(page + 1, 12);
      setCars(prevCars => [...prevCars, ...response.data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCars(page, 12);
        setCars(response.data);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchData();
  }, [page]);

  const handleFilter = values => {
    let filteredCars = [...cars];

    if (values.make !== '') {
      filteredCars = filteredCars.filter(car => car.make === values.make);
    }

    if (values.price !== '') {
      filteredCars = filteredCars.filter(
        car => parseInt(car.rentalPrice) <= parseInt(values.price)
      );
    }

    if (values.minMileage !== '') {
      filteredCars = filteredCars.filter(
        car => car.mileage >= parseInt(values.minMileage)
      );
    }

    if (values.maxMileage !== '') {
      filteredCars = filteredCars.filter(
        car => car.mileage <= parseInt(values.maxMileage)
      );
    }

    setCars(filteredCars);
  };

  return (
    <div>
      <CarFilter handleFilter={handleFilter} />
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      {cars.length >= 12 && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
}

export default Catalog;
