import { Container, Card } from 'react-bootstrap';

const User = ({ user }) => {
  return (
    <div className='py-2'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-2 d-flex flex-column align-items-center hero-card bg-light w-50'>
          <h3 className='text-center'>Name: {user.name}</h3>
          <p className='text-center'>Email: {user.email}</p>
          <p className='text-center'>Nickname: {user.nickname}</p>
          <p className='text-center'>EmailVerified: {user.emailVerified}</p>
          <div className='d-flex'>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default User;
