import React from 'react';
import NotFoundView from 'images/NotFoundView.jpg';
import { Link } from '../NotFoundView/NotFoundView.styled';
import { Container, Photo} from './NotFoundView.styled';

export default function NotFoundsView() {
    return (
       <Container>
         <Link  to={'/'}>Back to Home Page</Link> 
          <Photo src={NotFoundView} alt="Not found View" width={700} />
       </Container>
    );
 }