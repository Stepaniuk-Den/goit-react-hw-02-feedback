import styled from 'styled-components';

export const StyledBtn = styled.button`
  margin: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.3s ease-in-out;
  scale: 1;
  &:hover {
    background-color: #777;
    color: white;
    box-shadow: inset rgba(255, 255, 255, 0.25) 0px 14px 28px,
      inset rgba(255, 255, 255, 0.22) 0px 10px 10px;
    scale: 1.2;
  }
`;
