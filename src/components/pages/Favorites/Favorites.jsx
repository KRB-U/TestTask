import CarCard from 'components/CarCard/CarCard';
import { selectFavorite } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector(selectFavorite);

  return (
    <div>
      {favorites.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Favorites;
