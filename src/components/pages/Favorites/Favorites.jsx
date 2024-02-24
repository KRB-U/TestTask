import CarCard from 'components/CarCard/CarCard';
import { ButtonLoadMore } from 'components/buttons/LoadMore/LoadMore';
import { selectFavorite } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector(selectFavorite);

  return (
    <div>
      {favorites.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      {favorites.length >= 12 && <ButtonLoadMore />}
    </div>
  );
}

export default Favorites;
