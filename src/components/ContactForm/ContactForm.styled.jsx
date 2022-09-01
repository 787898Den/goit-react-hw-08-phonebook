import styled from '@emotion/styled';

export const Form = styled.form `
  padding: 20px;
  `;


export const Container = styled.div `
  text-align: center;
  width: 500px;
  margin: 0 auto;
`;

export const Label = styled.label `
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
  font-size: 24px;
`;

export const Title = styled.span `
  color:#686868;
`;

export const Input = styled.input `
  width: 400px;
  height: 40px;
  font-size: 24px;
`;

export const Button = styled.button`
font-weight: 500;
font-size: 22px;
display: inline-block;
width: 140px;
text-decoration: none;
margin: 0 auto;
color: white;
border-radius: 10px;
cursor: pointer;
background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
padding: 5px;
border: none;
-webkit-transition: all 150ms ease-in-out;
transition: all 150ms ease-in-out;

&:hover,
&:focus {
  color: yellow;
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
`;