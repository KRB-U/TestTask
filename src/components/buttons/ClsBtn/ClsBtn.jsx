import { CloseButton, CloseIconButton } from './ClsBtn.styled';

function ClsBtn({ onClick }) {
  return (
    <CloseButton onClick={onClick} type="button">
      <CloseIconButton />
    </CloseButton>
  );
}

export { ClsBtn };
