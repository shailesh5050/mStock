import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoggedIn, loggedIn, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:52682/api/Auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });
      const data = await response.json();

      if (data.UserId) {
        setLoggedIn(true);
        setValid(true);
        setEmail("");
        setPassword("");
        navigate("/watchlist");
        setUserId(data.UserId);
      } else {
        setLoggedIn(false);
        setValid(false);
      }
    } catch (error) {
      setLoggedIn(false);
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
                {!valid && (
                  <div className="alert alert-dismissible alert-danger">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                    ></button>
                    <p>Email/Password is wrong !</p>
                  </div>
                )}
                <div className="form-group">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
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
