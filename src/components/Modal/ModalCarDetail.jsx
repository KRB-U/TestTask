import { ClsBtn } from 'components/buttons/ClsBtn/ClsBtn';
import { RentalCar } from 'components/buttons/RentalCar/RentalCar';
import Modal from 'react-modal';

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
      width: '600px',
      height: '400px',
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
      <ClsBtn onClick={closeModal} />
      <img src={car.img || car.photoLink} alt={car.make} />

      <h2>
        {car.make} {car.model}, {car.year}
      </h2>

      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>id: {car.id}</li>
        <li>Year: {car.year}</li>
        <li>Type: {car.type}</li>
        <li>Fuel Consumption: {car.fuelConsumption}</li>
        <li>Engine Size: {car.engineSize}</li>
      </ul>
      <h4>{car.description}</h4>
      <h4>Accessories and functionalities:</h4>
      <ul>
        {car.accessories.map((accessory, index) => (
          <li key={index}>{accessory}</li>
        ))}
        {car.functionalities.map((functionality, index) => (
          <li key={index}>{functionality}</li>
        ))}
      </ul>

      <h4>Rental Conditions:</h4>
      <ul>
        <li>
          {minAge[0]}:{minAge[1]}
        </li>
        {otherConditions.map((credential, idx) => {
          return <li key={idx}>{credential}</li>;
        })}
      </ul>
      <p>Mileage: {car.mileage}</p>
      <p>Price: {car.rentalPrice}$</p>

      <RentalCar data={'tel:+380730000000'} />
    </Modal>
  );
}

export default ModalCarDetail;
