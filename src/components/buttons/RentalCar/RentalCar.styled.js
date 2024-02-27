import styled from 'styled-components';

const RentalCarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  background-color: rgba(52, 112, 255, 1);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;

  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
`;

export { RentalCarLink };
