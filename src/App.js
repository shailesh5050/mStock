import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Compare from './Components/Compare';
import WatchList from './Components/WatchList';
import Companies from './Components/Companies';
import PrivateRoute from './Components/PrivateRoute ';
function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [userId,setUserId] = useState(null)
  return (
    <div >
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
        <Routes>
        <Route path='/watchlist' element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path="/watchlist" element={<WatchList userId={userId} loggedIn={loggedIn}  />} />
        </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login"   element={<Login setUserId={setUserId} loggedIn={loggedIn} setLoggedIn={setLoggedIn}   />} />
          <Route path="/compare" element={<Compare />} />
          
          <Route path="/"  element={<Companies userId={userId} loggedIn={loggedIn} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
