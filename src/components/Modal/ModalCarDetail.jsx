import { ClsBtn } from 'components/buttons/ClsBtn/ClsBtn';
import { RentalCar } from 'components/buttons/RentalCar/RentalCar';
import Modal from 'react-modal';
import {
  ModalCarItemDescr,
  ModalCarItemTitle,
  ModalCarListDescr,
  ModalCarListTitle,
  ModalCarListValue,
  ModalCardDescription,
  ModalImg,
  ModalRentCondItem,
  ModalRentCondList,
  ModelCardAccessories,
} from './ModalCarDetail.styled';

Modal.setAppElement('#root');

Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    maxWidth: '541px',
    padding: '40px',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  },
};

function ModalCarDetail({ car, isOpen, closeModal }) {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const rentalConditions = car.rentalConditions.split('\n');

  const minAge = rentalConditions[0].split(':');

  const otherConditions = rentalConditions.slice(1);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={car.make}
      ariaHideApp={false}
    >
      <div>
        <ClsBtn onClick={closeModal} />
        <ModalImg
          src={car.img || car.photoLink}
          alt={car.make}
          style={{ position: 'relative' }}
        />

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

        <ModalCardDescription>{car.description}</ModalCardDescription>

        <ModelCardAccessories>
          Accessories and functionalities:
        </ModelCardAccessories>

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
            {minAge[0]}: <ModalCarListValue>{minAge[1]}</ModalCarListValue>
          </ModalRentCondList>
          {otherConditions.map((credential, idx) => {
            return (
              <ModalRentCondList key={idx}>{credential}</ModalRentCondList>
            );
          })}
          <ModalRentCondList>
            Mileage: <ModalCarListValue>{car.mileage}</ModalCarListValue>
          </ModalRentCondList>
          <ModalRentCondList>
            Price: <ModalCarListValue>{car.rentalPrice}$</ModalCarListValue>
          </ModalRentCondList>
        </ModalRentCondItem>

        <RentalCar data={'tel:+380730000000'} />
      </div>
    </Modal>
  );
}

export default ModalCarDetail;
