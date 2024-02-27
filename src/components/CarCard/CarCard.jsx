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
  ImgWrapper,
  CarTitleWrapper,
  CarTitleDescr,
  CarTitleInfo,
  TitleWrapper,
  ListWrapper,
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
    <ListWrapper>
      <ImgWrapper>
        <ButtonFav onClick={checkFavorite}>
          <FavHeart $isFavorite={isFavorite} />
        </ButtonFav>
        <Img
          src={car.img || car.photoLink}
          alt={car.make}
          width="274px"
          height="268px"
        />
      </ImgWrapper>
      <CarTitleWrapper>
        <CarTitleInfo>{car.make}</CarTitleInfo>
        <CarTitleInfo>{car.model}</CarTitleInfo>
        <CarTitleInfo>{car.year}</CarTitleInfo>
        <CarTitleInfo>${car.rentalPrice}</CarTitleInfo>
      </CarTitleWrapper>

      <TitleWrapper>
        <CarTitleDescr>{car.type}</CarTitleDescr>
        <CarTitleDescr>{city}</CarTitleDescr>
        <CarTitleDescr>{country}</CarTitleDescr>
        <CarTitleDescr>{car.rentalCompany}</CarTitleDescr>
        <CarTitleDescr>{car.model}</CarTitleDescr>
        <CarTitleDescr>{car.id}</CarTitleDescr>
        <CarTitleDescr>{car.functionalities[0]}</CarTitleDescr>
      </TitleWrapper>

      <LearnMore onClick={() => setShowModal(true)} />
      {showModal && (
        <ModalCarDetail
          car={car}
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </ListWrapper>
  );
}

export default CarCard;
