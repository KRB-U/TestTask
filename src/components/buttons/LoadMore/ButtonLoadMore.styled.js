import styled from 'styled-components';

const BtnLoadMore = styled.button`
  border-radius: 10px;
  background-color: transparent;

  padding: 16px;

  text-align: center;
  color: #3470ff;
  border: 0;
  text-decoration: none;

  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  text-decoration: none;

  &:hover {
    color: #0b44cd;
    transition: color 250ms linear, scale 250ms linear;
  }
`;

export { BtnLoadMore };
