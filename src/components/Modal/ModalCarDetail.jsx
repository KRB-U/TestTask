import { ClsBtn } from 'components/buttons/ClsBtn/ClsBtn';
import { RentalCar } from 'components/buttons/RentalCar/RentalCar';
import Modal from 'react-modal';
import {
  ModalCarItemDescr,
  ModalCarItemTitle,
  ModalCarListDescr,
  ModalCarListTitle,
  ModalContainerWrapper,
  ModalImg,
  ModalRentCondItem,
  ModalRentCondList,
} from './ModalCarDetail.styled';

Modal.setAppElement('#root');

function ModalCarDetail({ car, isOpen, closeModal }) {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const rentalConditions = car.rentalConditions.split('\n');

  const minAge = rentalConditions[0].split(':');

  const otherConditions = rentalConditions.slice(1);

  const customStyles = {
    content: {
      width: '541px',
      height: '752px',
      margin: 'auto',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={car.make}
      ariaHideApp={false}
      style={customStyles}
    >
      <ModalContainerWrapper>
        <ClsBtn onClick={closeModal} />
        <ModalImg src={car.img || car.photoLink} alt={car.make} />

        <h2>
          <ModalCarItemTitle>
            <ModalCarListTitle>{car.make}</ModalCarListTitle>
            <ModalCarListTitle>{car.model},</ModalCarListTitle>
            <ModalCarListTitle>{car.year}</ModalCarListTitle>
          </ModalCarItemTitle>
        </h2>

        <ModalCarItemDescr>
          <ModalCarListDescr>{city}</ModalCarListDescr>
          <ModalCarListDescr>{country}</ModalCarListDescr>
          <ModalCarListDescr>id: {car.id}</ModalCarListDescr>
          <ModalCarListDescr>Year: {car.year}</ModalCarListDescr>
          <ModalCarListDescr>Type: {car.type}</ModalCarListDescr>
          <ModalCarListDescr>
            Fuel Consumption: {car.fuelConsumption}
          </ModalCarListDescr>
          <ModalCarListDescr>Engine Size: {car.engineSize}</ModalCarListDescr>
        </ModalCarItemDescr>

        <h4>{car.description}</h4>
        <h4>Accessories and functionalities:</h4>
        <ModalCarItemDescr>
          {car.accessories.map((accessory, index) => (
            <ModalCarListDescr key={index}>{accessory}</ModalCarListDescr>
          ))}
          {car.functionalities.map((functionality, index) => (
            <ModalCarListDescr key={index}>{functionality}</ModalCarListDescr>
          ))}
        </ModalCarItemDescr>

        <h4>Rental Conditions:</h4>
        <ModalRentCondItem>
          <ModalRentCondList>
            {minAge[0]}:
            <span style={{ color: '#3470FF', fontWeight: 'bold' }}>
              {minAge[1]}
            </span>
          </ModalRentCondList>
          {otherConditions.map((credential, idx) => {
            return (
              <ModalRentCondList key={idx}>{credential}</ModalRentCondList>
            );
          })}
          <ModalRentCondList>
            Mileage:
            <span style={{ color: '#3470FF', fontWeight: 'bold' }}>
              {car.mileage}
            </span>
          </ModalRentCondList>
          <ModalRentCondList>
            Price:
            <span style={{ color: '#3470FF', fontWeight: 'bold' }}>
              {car.rentalPrice}$
            </span>
          </ModalRentCondList>
        </ModalRentCondItem>

        <RentalCar data={'tel:+380730000000'} />
      </ModalContainerWrapper>
    </Modal>
  );
}

export default ModalCarDetail;
