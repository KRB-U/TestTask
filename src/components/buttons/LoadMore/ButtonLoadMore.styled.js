import styled from 'styled-components';

const BtnLoadMore = styled.button`
  /* padding: 4px 8px; */
  border-radius: 5px;
  background-color: #555555;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;

  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  max-width: 180px;
  height: 35px;

  &:hover {
    background-color: rgb(51, 102, 153);
  }
`;

export { BtnLoadMore };
