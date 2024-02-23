import { BtnLearMore } from './LearnMore.styled';

function LearnMore({ onClick }) {
  return (
    <BtnLearMore onClick={onClick} type="button">
      Learn more
    </BtnLearMore>
  );
}

export { LearnMore };
