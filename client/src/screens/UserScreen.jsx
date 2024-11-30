import Loader from '../components/Loader';
import User from '../components/User';
import { useGetUsersQuery } from '../slices/usersApiSlice';

const UserScreen = () => {
    const { data: users, isLoading } = useGetUsersQuery();

  return (
    <>
        { isLoading && <Loader /> }
          <h1>Users</h1>
          { users?.map((x, i) => (
            <User key={i} user={x} />
          )) }
    </>
  );
};

export default UserScreen;
