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
  
  return (
    <div >
      <Router>
        <Navbar  />
        <Routes>
        <Route path='/watchlist' element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path="/watchlist" element={<WatchList loggedIn={loggedIn}  />} />
        </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login"   element={<Login setLoggedIn={setLoggedIn}   />} />
          <Route path="/compare" element={<Compare />} />
          
          <Route path="/companies"  element={<Companies loggedIn={loggedIn} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
