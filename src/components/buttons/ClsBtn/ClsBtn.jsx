import { CloseButton } from './ClsBtn.styled';

function ClsBtn({ onClick }) {
  return (
    <CloseButton onClick={onClick} type="button">
      X
    </CloseButton>
  );
}

export { ClsBtn };
