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
          <label htmlFor="make" style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                bottom: '38px',
                left: '0',
              }}
            >
              Car brand
            </span>
            <Field
              as="select"
              name="make"
              id="make"
              style={{
                width: '170px',
                height: '48px',
                border: 'none',
                padding: '10px',

                borderRadius: '7px',
                backgroundColor: '#f7f7fb',

                fontSize: '14px',
                lineHeight: '20px',
                fontStyle: 'normal',
              }}
            >
              <option value="">Enter the text</option>
              {filterBrandsOptions.map(make => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="pricePerHour" style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                bottom: '38px',
                left: '0',
              }}
            >
              Price/ 1 hour
            </span>
            <Field
              as="select"
              name="pricePerHour"
              id="pricePerHour"
              style={{
                width: '100px',
                height: '48px',
                border: 'none',
                padding: '10px',

                borderRadius: '7px',
                backgroundColor: '#f7f7fb',

                fontSize: '14px',
                lineHeight: '20px',
                fontStyle: 'normal',
              }}
            >
              <option value="">To $</option>
              {filterPricesOptions.map(price => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="Mileage"></label>
          Сar mileage / km
          <Field
            type="number"
            name="minMileage"
            id="minMileage"
            placeholder="From"
            style={{
              width: '100px',
              height: '28px',
              border: 'none',
              padding: '10px',

              borderRadius: '7px',
              backgroundColor: '#f7f7fb',

              fontSize: '14px',
              lineHeight: '20px',
              fontStyle: 'normal',
            }}
          />
          <Field
            type="number"
            name="maxMileage"
            id="maxMileage"
            placeholder="To"
            style={{
              width: '100px',
              height: '28px',
              border: 'none',
              padding: '10px',

              borderRadius: '7px',
              backgroundColor: '#f7f7fb',

              fontSize: '14px',
              lineHeight: '20px',
              fontStyle: 'normal',
            }}
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
