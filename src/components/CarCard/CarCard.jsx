import { LearnMore } from 'components/buttons/LearnMore/LearnMore';
import ModalCarDetail from 'components/Modal/ModalCarDetail';
import { useState } from 'react';
import { FavHeart } from './CarCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, delFavorite } from 'components/redux/CarsSlice';
import { selectFavorite } from 'components/redux/selectors';

function CarCard({ car }) {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const [showModal, setShowModal] = useState(false);

  const [isFavorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorite);

  const checkFavorite = () => {
    if (favorite.some(item => item.id === car.id)) {
      dispatch(delFavorite(car.id));
      setFavorite(false);
    } else {
      dispatch(addFavorite(car));
      setFavorite(true);
    }
  };

  return (
    <div>
      <a onClick={checkFavorite}>
        <FavHeart $isFavorite={isFavorite} />
      </a>
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
