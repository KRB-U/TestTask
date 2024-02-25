import styled from 'styled-components';

const BtnLearMore = styled.button`
  padding: 12px, 99px, 12px, 99px;

  background-color: rgba(52, 112, 255, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: rgba(255, 255, 255, 1);

  border: 0;
  border-radius: 12px;

  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;

  width: 270px;
  height: 44px;

  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;

export { BtnLearMore };
