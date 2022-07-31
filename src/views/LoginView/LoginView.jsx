import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { logIn } from 'redux/auth/auth-operation';
import { Form,Label,Input,Button, Container } from './LoginView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}  autoComplete="off">
        <Label>
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

        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
}