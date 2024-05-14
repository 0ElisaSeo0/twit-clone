import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
