import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;

export const Button = styled.button`
font-weight: 500;
font-size: 20px;
display: inline-block;
width: 90px;
text-decoration: none;
color: #7D866F;
border-radius: 20px;
background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
padding: 5px;
-webkit-transition: all 150ms ease-in-out;
transition: all 150ms ease-in-out;
&:hover,
&:focus {
  color: #00f53d;
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
  `;