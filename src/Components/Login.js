import React,{useState} from "react";
import { Link } from "react-router-dom";
const Login = ({setLoggedIn,loggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
        const response = await fetch("http://localhost:52682/api/Auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Email:email,
           Password: password,
        })
            
        
    });
    const data = await response.json();
    console.log(data);
    console.log(email,password);
    if (data.UserId) {
        setLoggedIn(true);
        setEmail("");
        setPassword("");
    }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card py-3 shadow p-3 mb-5 bg-body rounded">
            <div className="card-body ">
              <form onSubmit={onSubmit}>
                <h2>Login</h2>

                {/* ALert Message */}
                <div class="alert alert-dismissible alert-danger">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                  <p>Email/Password is wrong !</p>
                </div>
                <div class="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>

                <button type="submit" className="btn btn-success mt-3 ">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
