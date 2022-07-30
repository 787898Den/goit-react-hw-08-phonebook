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
width: 170px;
height: 50px;
display: block;
margin: 0 auto;
cursor: pointer;
font-family: inherit;
font-weight: bold;
font-size: 16px;
background-color: #32de84;
padding: 8px;
border-radius: 10px;
`;