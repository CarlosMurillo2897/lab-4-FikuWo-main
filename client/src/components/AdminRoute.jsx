import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AdminRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    if(userInfo?.isAdmin) {
        return <Outlet />
    } else {
        toast.error('Admin only.', { toastId: 1 });
        return <Navigate to='/' replace />;
    }
};
export default AdminRoute;
