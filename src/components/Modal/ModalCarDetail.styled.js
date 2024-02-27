import styled from 'styled-components';

export const ModalImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 1px;
  background-image: linear-gradient(
    to bottom,
    rgba(18, 20, 23, 0.5),
    rgba(18, 20, 23, 0)
  );
  margin-bottom: 14px;
`;

export const ModalCarItemTitle = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

export const ModalCarListTitle = styled.li`
  padding-right: 10px;

  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;

  &:nth-child(2) {
    color: #3470ff;
  }
`;

export const ModalCarItemDescr = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 25px;
`;

export const ModalCarListDescr = styled.li`
  position: relative;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);

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

export const ModalCardDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  margin-bottom: 24px;
`;

export const ModelCardAccessories = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  margin-bottom: 8px;
`;

export const ModalRentCondTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  margin-bottom: 8px;
`;

export const ModalRentCondItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  margin-bottom: 24px;
`;

export const ModalRentCondList = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #363535;

  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 8px;
`;

export const ModalCarListValue = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #3470ff;
`;
