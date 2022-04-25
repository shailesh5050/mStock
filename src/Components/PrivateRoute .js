import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoute = ({loggedIn}) => {
  console.log(loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute