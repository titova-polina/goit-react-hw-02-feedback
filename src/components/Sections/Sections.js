import { Wrapper, Title } from './Sections.styled';

export const Sections = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
