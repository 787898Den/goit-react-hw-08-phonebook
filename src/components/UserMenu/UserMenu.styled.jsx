import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
`;

export const Img = styled.img`
margin-right:7px;
width: 36px;
`;

export const Name = styled.span`
font-weight: 700;
margin-right: 10px;
color: #6A8ED4;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 20px;
  display: inline-block;
  width: 75px;
  text-decoration: none;
  border-radius: 10px;
  padding: 5px;
  border:none;
  color: #fff;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );
  box-shadow: 0 0 40px 40px #B4B2A3 inset;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus{
  box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
  }
`;