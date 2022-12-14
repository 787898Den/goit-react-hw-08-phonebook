import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu  from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { authSelectors } from 'redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    marginBottom: '15px',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}