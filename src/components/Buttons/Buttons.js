import { Btn, WrapperBtn } from './Buttons.styled';

export const Buttons = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <>
      <WrapperBtn>
        <Btn onClick={() => onLeaveFeedback(good)}>Good</Btn>
        <Btn onClick={() => onLeaveFeedback(neutral)}>Neutral</Btn>
        <Btn onClick={() => onLeaveFeedback(bad)}>Bad</Btn>
      </WrapperBtn>
    </>
  );
};
