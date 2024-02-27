import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 15px;
  right: 16px;
  cursor: pointer;
`;

const CloseIconButton = styled(IoMdClose)`
  fill: #121417;
  width: 24px;
`;

export { CloseButton, CloseIconButton };
