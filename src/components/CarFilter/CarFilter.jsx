import { Formik, Form, Field } from 'formik';
import filterBrandsOptions from '../../assets/makes.json';
import filterPricesOptions from '../../assets/price.json';
import { updateFilter } from 'components/redux/CarsSlice';
import { useDispatch } from 'react-redux';

function CarFilter() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        make: '',
        pricePerHour: '',
        minMileage: 0,
        maxMileage: 0,
      }}
      onSubmit={values => {
        dispatch(updateFilter(values));
      }}
    >
      <div>
        <Form>
          <label htmlFor="make">Car brand</label>
          <Field as="select" name="make" id="make">
            <option value="">Enter the text</option>
            {filterBrandsOptions.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </Field>

          <label htmlFor="pricePerHour">Price/ 1 hour</label>
          <Field as="select" name="pricePerHour" id="pricePerHour">
            <option value="">To $</option>
            {filterPricesOptions.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </Field>

          <label htmlFor="Mileage">
            Сar mileage / km
            <Field
              type="number"
              name="minMileage"
              id="minMileage"
              placeholder="From"
            />
            <Field
              type="number"
              name="maxMileage"
              id="maxMileage"
              placeholder="To"
            />
          </label>
          <button type="submit">Search</button>
        </Form>
      </div>
    </Formik>
  );
}

export { CarFilter };
