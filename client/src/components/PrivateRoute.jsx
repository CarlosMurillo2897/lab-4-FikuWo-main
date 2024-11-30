import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if(userInfo) {
    return <Outlet />
  } else {
    toast.error('LogIn required.', { toastId: 1 });
    return <Navigate to='/login' replace />;
  }
};
export default PrivateRoute;
