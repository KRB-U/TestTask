import { Field } from 'formik';

import styled from 'styled-components';

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FeildBrendStd = styled(Field)`
  width: 170px;
  height: 48px;
  border: none;
  padding: 10px;

  border-radius: 7px;
  background-color: #f7f7fb;

  font-size: 14px;
  line-height: 20px;
  font-style: normal;
`;

export const FeildPriceStd = styled(Field)`
  width: 100px;
  height: 48px;
  border: none;
  padding: 10px;

  border-radius: 7px;
  background-color: #f7f7fb;

  font-size: 14px;
  line-height: 20px;
  font-style: normal;
`;

export const FeildMileageStd = styled(Field)`
  width: 100px;
  height: 28px;
  border: none;
  padding: 10px;

  border-radius: 7px;
  background-color: #f7f7fb;

  font-size: 14px;
  line-height: 20px;
  font-style: normal;
`;
