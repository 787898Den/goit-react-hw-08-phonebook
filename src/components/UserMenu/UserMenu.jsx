import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from 'images/avatar.png';
import { Button, Container, Img, Name, } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Img src={avatar} alt="avatar" />
      <Name>Welcome, {name}</Name>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
      Logout
      </Button>
      
    </Container>
  );
}
