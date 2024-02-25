import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center */
  /* align-items: center; */
  /* position: relative; */
  width: 274px;
`;

export const ButtonFav = styled.button`
  /* position: absolute; */
  border: none;
  background-color: transparent;
  top: 15px;
  right: 16px;
`;

export const FavHeart = styled(FaHeart)`
  fill: ${({ $isFavorite }) =>
    $isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'};
  stroke: ${({ $isFavorite }) =>
    $isFavorite ? 'rgba(52, 112, 255, 1)' : 'grey'};
  stroke-width: ${({ $isFavorite }) => ($isFavorite ? '0px' : '20px')};
  cursor: pointer;
`;

export const Img = styled.img`
  display: inline-block;
  width: 270px;
  border-radius: 15px;
  background-image: linear-gradient(
    to bottom,
    rgba(18, 20, 23, 0.5),
    rgba(18, 20, 23, 0)
  );
`;

export const CarItem = styled.ul`
  display: flex;
`;

export const CarList = styled.li`
  padding-right: 10px;

  &:nth-child(2) {
    color: rgba(52, 112, 255, 1);
  }

  &:last-child {
    padding-right: 0;
    margin-left: auto;
  }
`;

export const Description = styled.ul`
  /* display: flex; */
`;

export const Delimiter = styled.div`
  border: 1px;
  color: rgba(18, 20, 23, 0.1);
`;
