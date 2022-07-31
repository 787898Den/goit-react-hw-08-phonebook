import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
padding: 20px;
`;

export const Photo = styled.img`
padding: 20px;
`;
export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  display: inline-block;
  width: 180px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  background-color: rgb(113, 169, 176);
  padding: 5px;
  &:hover,
  &:focus {
    color: red;
  }
`