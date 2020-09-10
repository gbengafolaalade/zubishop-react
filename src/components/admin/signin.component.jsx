import React, { useState, useContext } from "react";
import { Connect } from "../../services/api.core";
import { TokenGeneration } from "../../services/helper.service";
import { AppContext } from "../../services/appstate.service";
import { useHistory } from "react-router-dom";

const ADMIN_SECRET = "oneFUCKn@$$";

const AdminLogin = () => {
  const [loginObj, setLoginObj] = useState({});
  const [msg, updateMsg] = useState(null);
  const [errorMsg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AppContext);
  let history = useHistory();

  // handle inputs
  const inputHandler = (e) => {
    const { name } = e.target;
    const value = e.target.type === "checkbox" ? true : e.target.value;
    setLoginObj({ ...loginObj, [name]: value });
  };

  // submit handler
  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    // generate token for authorization
    const token = TokenGeneration(ADMIN_SECRET.length);
    const response = await Connect(
      "api/v1/auth/admin/login",
      "POST",
      loginObj,
      token
    );
    if (response.success === false) {
      response.error === "Server Error"
        ? updateMsg("An error occurred... try again later")
        : updateMsg(response.error);
      setMsg(true);
      setLoading(false);
      return;
    }

    const { name, email, _id } = response.data;
    const adminUser = {
      name,
      email,
      id: _id,
      login: true,
      userType: "admin",
    };
    // set token locally
    localStorage.setItem("token", response.data.token);
    // set admin user state
    setUser(adminUser);
    // clean inputs
    document.querySelector("#adminEmail").value = "";
    document.querySelector("#adminPassword").value = "";
    // stop spinner
    setLoading(false);
    history.push("/shop/admin/dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="col-12">
          <div className="d-flex justify-content-center align-content-center">
            <div className="card my-10 mb-md-0">
              <div className="card-body">
                <h6 className="mb-7 text-center mx-auto">Admin Login</h6>

                {errorMsg ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <button
                      type="button"
                      className="close m-0 p-0"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <span>{msg}</span>
                  </div>
                ) : null}

                <div className="container p-7">
                  <form
                    className="my-auto align-content-center"
                    onSubmit={submitHandler}
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sr-only" for="loginEmail">
                            Email Address *
                          </label>
                          <input
                            className="form-control form-control-sm"
                            id="adminEmail"
                            type="email"
                            placeholder="Email Address *"
                            required
                            name="email"
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sr-only" for="loginPassword">
                            Password *
                          </label>
                          <input
                            className="form-control form-control-sm"
                            id="adminPassword"
                            type="password"
                            placeholder="Password *"
                            required
                            name="password"
                            onChange={inputHandler}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-sm btn-dark btn-block"
                          type="submit"
                        >
                          {loading ? (
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : null}{" "}
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
