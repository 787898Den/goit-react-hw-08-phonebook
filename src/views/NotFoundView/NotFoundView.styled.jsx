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
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );
  padding: 5px;
  &:hover,
  &:focus {
    color: #FBAB7E;
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`