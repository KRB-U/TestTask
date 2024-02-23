import { LearnMore } from 'components/buttons/LearnMore/LearnMore';
// import placeholderImage from '../../assets/car-placeholder.png';
import ModalCarDetail from 'components/Modal/ModalCarDetail';
import { useState } from 'react';
import { FavHeart } from './CarCard.styled';

function CarCard({ car }) {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = () => {
    if (favorites.includes(car)) {
      setFavorites(favorites.filter(favorite => favorite !== car));
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter(favorite => favorite !== car))
      );
    } else {
      setFavorites([...favorites, car]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, car]));
    }
  };

  return (
    <div>
      {<FavHeart onClick={toggleFavorite} />}
      <img src={car.img || car.photoLink} alt={car.make} />
      <h3>
        {car.make} {car.model}, {car.year}
      </h3>
      <p>${car.rentalPrice}</p>
      <ul>
        <li>{car.type}</li>
        <li>{city}</li>
        <li>{country}</li>
        <li>{car.rentalCompany}</li>
        <li>{car.model}</li>
        <li>{car.id}</li>
        <li>{car.functionalities[0]}</li>
      </ul>

      <LearnMore onClick={() => setShowModal(true)} />
      {showModal && (
        <ModalCarDetail
          car={car}
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default CarCard;
