import styled from '@emotion/styled';

export const Form = styled.form `
  border: 1px solid black;
  padding: 20px;
  background-color: rgba(36, 83, 122, 0.792);
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
  margin-right: 25px;
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
border-radius: 10px;cursor: pointer;
background-color: rgb(113, 169, 176);
padding: 5px;
border: none;
&:hover,
&:focus {
  color: red;
`;