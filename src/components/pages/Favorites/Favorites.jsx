import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('favorites'));
    setFavorites(item);
  }, []);

  if (!favorites) {
    return;
  }

  return (
    <div>
      {favorites.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Favorites;
