import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
`;

export const Img = styled.img`
margin-right: 5px;
width: 40px;
`;

export const Name = styled.span`
font-weight: 700;
margin-right: 10px;
color: orange;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 20px;
  display: inline-block;
  width: 75px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  background-color: rgb(113, 169, 176);
  padding: 5px;
  border: none;
  &:hover,
  &:focus {
    color: red;
`;