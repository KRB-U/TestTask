import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, delFavorite } from 'components/redux/CarsSlice';
import { selectFavorite } from 'components/redux/selectors';

import ModalCarDetail from 'components/Modal/ModalCarDetail';
import { LearnMore } from 'components/buttons/LearnMore/LearnMore';
import { FavHeart } from './CarCard.styled';

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
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
      }}
    >
      <button
        onClick={checkFavorite}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: '15px',
          right: '16px',
        }}
      >
        <FavHeart $isFavorite={isFavorite} />
      </button>
      <img src={car.img || car.photoLink} alt={car.make} />
      <h3>
        <ul>
          <li>{car.make}</li>
          <li>{car.model}</li>
          <li>{car.year}</li>
          <li>{car.rentalPrice}</li>
        </ul>
      </h3>
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
