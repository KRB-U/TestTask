import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SearchBtn } from 'components/buttons/Serach/Search';

import filterBrandsOptions from '../../assets/makes.json';
import filterPricesOptions from '../../assets/price.json';

import { updateFilter } from 'components/redux/CarsSlice';

import { useDispatch } from 'react-redux';
import { ContainerFilter } from './CarFilter.styled';

import * as Yup from 'yup';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  maxMileage: Yup.number()
    .min(0, 'Max mileage cannot be negative')
    .nullable()
    .typeError('Max mileage must be a number'),
  minMileage: Yup.number()
    .min(0, 'Min mileage cannot be negative')
    .nullable()
    .typeError('Min mileage must be a number'),
});

function CarFilter() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        make: '',
        pricePerHour: '',
        minMileage: '',
        maxMileage: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(updateFilter(values));
      }}
    >
      <ContainerFilter>
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
          <label htmlFor="Mileage"></label>
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
          <ErrorMessage name="minMileage" render={msg => toast.error(msg)} />
          <ErrorMessage name="maxMileage" render={msg => toast.error(msg)} />
          <SearchBtn />
        </Form>
      </ContainerFilter>
    </Formik>
  );
}

export { CarFilter };
