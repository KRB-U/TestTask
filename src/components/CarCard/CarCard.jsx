import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, delFavorite } from 'components/redux/CarsSlice';
import { selectFavorite } from 'components/redux/selectors';

import ModalCarDetail from 'components/Modal/ModalCarDetail';
import { LearnMore } from 'components/buttons/LearnMore/LearnMore';
import {
  FavHeart,
  ButtonFav,
  Img,
  ContainerWrapper,
  CarItemTitle,
  CarListTitle,
  CarItemDescr,
  CarListDescr,
} from './CarCard.styled';

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
    <ContainerWrapper>
      <ButtonFav onClick={checkFavorite}>
        <FavHeart $isFavorite={isFavorite} />
      </ButtonFav>
      <Img src={car.img || car.photoLink} alt={car.make} />
      <h3>
        <CarItemTitle>
          <CarListTitle>{car.make}</CarListTitle>
          <CarListTitle>{car.model}</CarListTitle>
          <CarListTitle>{car.year}</CarListTitle>
          <CarListTitle>${car.rentalPrice}</CarListTitle>
        </CarItemTitle>
      </h3>

      <CarItemDescr>
        <CarListDescr>{car.type}</CarListDescr>

        <CarListDescr>{city}</CarListDescr>

        <CarListDescr>{country}</CarListDescr>

        <CarListDescr>{car.rentalCompany}</CarListDescr>

        <CarListDescr>{car.model}</CarListDescr>

        <CarListDescr>{car.id}</CarListDescr>

        <CarListDescr>{car.functionalities[0]}</CarListDescr>
      </CarItemDescr>

      <LearnMore onClick={() => setShowModal(true)} />
      {showModal && (
        <ModalCarDetail
          car={car}
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </ContainerWrapper>
  );
}

export default CarCard;
