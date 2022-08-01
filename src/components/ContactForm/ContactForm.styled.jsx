import styled from '@emotion/styled';

export const Form = styled.form `
  border: 1px solid black;
  padding: 20px;
  background-color: #74EBD5;
background-image: radial-gradient( circle 759px at -6.7% 50%,  rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% );
  border-radius: 50px;
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

&:hover,
&:focus {
  color: yellow;
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
`;