import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoute = ({loggedIn}) => {
  
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute