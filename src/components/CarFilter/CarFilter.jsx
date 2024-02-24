import { Formik, Form, Field } from 'formik';
import filterBrandsOptions from '../../assets/makes.json';
import filterPricesOptions from '../../assets/price.json';

function CarFilter({ handleFilter }) {
  return (
    <Formik
      initialValues={{
        make: '',
        price: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={values => {
        handleFilter(values);
      }}
    >
      <Form>
        <label htmlFor="make">Car brand</label>
        <Field as="select" name="make" id="make" placeholder="Enter the text">
          <option value="">All</option>
          {filterBrandsOptions.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Field>

        <label htmlFor="price">Price/ 1 hour</label>
        <Field as="select" name="price" id="price" placeholder="To $">
          <option value="">All</option>
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
    </Formik>
  );
}

export { CarFilter };
