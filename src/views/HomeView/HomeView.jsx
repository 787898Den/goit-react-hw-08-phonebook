import { Title } from './HomeView.styled';
import { Container } from './HomeView.styled';
import { Image } from './HomeView.styled';
import PhoneBook from 'images/PhoneBook.png';

  
  const HomeView = () => (
    <Container>
       <Title>Phone Book</Title>
       <Image src={PhoneBook} alt="phone-book"  />
    </Container>
  );
  
  export default HomeView;