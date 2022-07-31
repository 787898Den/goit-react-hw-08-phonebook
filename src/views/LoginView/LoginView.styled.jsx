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
color: black;
border-radius: 20px;
background-color: rgb(113, 169, 176);
padding: 5px;
&:hover,
&:focus {
  color: red;
  `;