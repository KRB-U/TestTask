import styled from 'styled-components';

export const SearchBtnStld = styled.button`
  width: 136px;
  height: 48px;

  border-radius: 15px;
  border: 0;

  background-color: #3470ff;
  color: rgba(255, 255, 255, 1);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-style: normal;
  text-align: center;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
`;
