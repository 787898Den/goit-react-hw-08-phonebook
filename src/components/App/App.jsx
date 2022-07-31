import { Routes, Route } from 'react-router-dom';
import { HomeView, LoginView, RegisterView,ContactsView,NotFoundView } from 'views';
import AppBar from 'components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchCurrentUser} from 'redux/auth/auth-operation';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { Container } from './App.styled';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route 
        path="/"
        element={<HomeView />} 
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          index
          path="login"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
            <ContactsView />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundView/>} />
      </Routes>
    </Container>
  );
}