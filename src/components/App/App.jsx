import { Routes, Route } from 'react-router-dom';
import { HomeView, LoginView, RegisterView } from 'views';
import AppBar from 'components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PrivateRoute } from 'components/PrivateRoute';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';
import {ContactList} from 'components/ContactList';
import { PublicRoute } from 'components/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
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
              <ContactForm />
              <Filter title="Find contact by name" />
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<></>} />
      </Routes>
    </div>
  );
}

export { App };