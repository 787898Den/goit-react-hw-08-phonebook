import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import { Button, Container, Form, Input, Label } from './Register.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
        case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleAddContact = ({ name, email, password }) => {
    const newUser = { name, email, password };
    dispatch(register(newUser))
    // toast.success(`${name} added to contacts!`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ name, email, password });
    formFieldsReset();
  };

  const formFieldsReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder="Name"
            />
        </Label>

        <Label >
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="mail@mail"
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="password"
          />
        </Label>

        <Button type="submit">Registration</Button>
      </Form>
    </Container>
  );
}