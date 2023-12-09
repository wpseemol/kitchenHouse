import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PageLoading from '../components/pageLoading/PageLoading';

const PrivetRoute = ({ children }) => {
    const loginRegInfo = useContext(AuthContext);
    const { user, loading } = loginRegInfo || {};

    const location = useLocation();

    if (loading) {
        return <PageLoading></PageLoading>;
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ location: location.pathname }} to="/login" />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node,
};
