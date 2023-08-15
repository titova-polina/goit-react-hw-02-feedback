import styled from 'styled-components';

export const WrapperBtn = styled.div`
  margin-left: 30px;
`;

export const Btn = styled.button`
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid gray;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.2);
  max-width: 150px;
  height: 50px;
  cursor: pointer;
  margin-right: 9px;
  padding: 10px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background-color: blueviolet;
  }
`;
