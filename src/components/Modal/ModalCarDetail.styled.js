import styled from 'styled-components';

export const ModalContainerWrapper = styled.div`
  width: 500px;
  /* margin-right: 20px; */
`;

export const ModalImg = styled.img`
  /* display: inline-block; */
  width: 461px;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(18, 20, 23, 0.5),
    rgba(18, 20, 23, 0)
  );
`;

export const ModalCarItemTitle = styled.ul`
  display: flex;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ModalCarListTitle = styled.li`
  padding-right: 10px;

  &:nth-child(2) {
    color: rgba(52, 112, 255, 1);
  }
`;

export const ModalCarItemDescr = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-bottom: 25px;
`;

// export const Delimiter = styled.div`
//   border: 1px;
//   color: rgba(18, 20, 23, 0.1);
// `;

export const ModalCarListDescr = styled.li`
  position: relative;

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

export const ModalRentCondItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 20px;
`;

export const ModalRentCondList = styled.li`
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 8px;
`;
