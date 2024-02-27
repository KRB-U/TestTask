import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

export const ListWrapper = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  width: 274px;
  height: 208px;
`;

export const ButtonFav = styled.button`
  display: block;
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  background-color: transparent;
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
  width: 270px;
  height: 203px;
  border-radius: 15px;
  background-image: linear-gradient(
    to bottom,
    rgba(18, 20, 23, 0.5),
    rgba(18, 20, 23, 0)
  );
`;

export const CarTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

export const CarTitleInfo = styled.p`
  margin-bottom: 8px;
  padding-right: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;

  &:nth-child(2) {
    color: rgba(52, 112, 255, 1);
  }

  &:last-child {
    margin-left: auto;
    padding-right: 0px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CarTitleDescr = styled.p`
  position: relative;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 4px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 1px;
    height: 90%;
    background-color: #d9d9d9;
    margin-left: 7px;
  }
  margin-right: 15px;
`;
