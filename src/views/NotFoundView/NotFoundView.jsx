import React from 'react';
import NotFoundView from 'images/NotFoundPage.png';
import { Container, Photo} from './NotFoundView.styled';

export default function NotFoundsView() {
    return (
       <Container>
          <Photo src={NotFoundView} alt="Not found View"/>
       </Container>
    );
 }