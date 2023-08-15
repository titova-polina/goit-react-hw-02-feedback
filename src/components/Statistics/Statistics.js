import { WrapperStat, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <WrapperStat>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total: {totalFeedback}</Text>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </WrapperStat>
    </>
  );
};
