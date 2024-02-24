import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

export const FavHeart = styled(FaHeart)`
  fill: ${({ $isFavorite }) =>
    $isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'};
  stroke: ${({ $isFavorite }) =>
    $isFavorite ? 'rgba(52, 112, 255, 1)' : 'grey'};
  stroke-width: ${({ $isFavorite }) => ($isFavorite ? '0px' : '20px')};
  cursor: pointer;
`;
