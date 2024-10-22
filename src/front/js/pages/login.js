import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [isShow, setIsShown] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_check: "",
  });

  useEffect(() => {
    console.log(store.token);
    store.token && navigate("/private");
    return () => {
      setUser({
        name: "",
        email: "",
        password: "",
        password_check: "",
      });
    };
  }, []);

  const registerUser = async () => {
    if (user.password === user.password_check && user.password !== "") {
      const createUser = await actions.createUser(user);
      if (createUser) {
        alert("User was created");
        setUser({
          ...user,
          name: "",
          email: "",
          password: "",
          password_check: "",
        });
        setIsShown(!isShow);
      } else alert("An expected error occurred");
    } else {
      alert("Password doesn't match");
      setUser({ ...user, password: "", password_check: "" });
    }
  };

  const loginCustomer = async () => {
    const login = await actions.loginUser(user);
    console.log(login);
    if (login) {
      alert("Login was successfully");
      navigate("/private");
    } else {
      alert("Unable to login");
      setUser({
        ...user,
        name: "",
        email: "",
        password: "",
        password_check: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <div className="card-body">
              <h3 className="card-title text-center">
                {!isShow ? "Login" : "Register"}
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4"
              >
                {isShow && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={user.name}
                      placeholder="Name"
                      autoComplete="off"
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                    />
                  </div>
                )}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={user.email}
                    placeholder="Email"
                    autoComplete="off"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={user.password}
                    placeholder="Password"
                    autoComplete="new-password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
                {isShow && (
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={user.password_check}
                      placeholder="Repeat Password"
                      autoComplete="new-password"
                      onChange={(e) =>
                        setUser({ ...user, password_check: e.target.value })
                      }
                    />
                  </div>
                )}
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className={`btn ${isShow ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => (isShow ? registerUser() : setIsShown(!isShow))}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className={`btn ${!isShow ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => (!isShow ? loginCustomer() : setIsShown(!isShow))}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
