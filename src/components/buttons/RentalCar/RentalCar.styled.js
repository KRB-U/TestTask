import styled from 'styled-components';

const RentalCarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 50px;

  width: 68px;
  height: 20px;

  border-radius: 24px;
  border: 0;

  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
`;

export { RentalCarLink };
