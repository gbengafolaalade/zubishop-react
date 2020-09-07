import React, { useEffect, useState, useContext } from "react";
import { X } from "react-feather";
import { LoginHandler } from "../../../services/auth.service";
import { AppContext } from "../../../services/appstate.service";

const LoginModal = ({ show, closeLogin, setSignup }) => {
  const [loginObj, setLoginObj] = useState({});
  const [msg, updateMsg] = useState(null);
  const [errorMsg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    const modalShow = show ? "show" : "hide";
    window.$("#modalLogin").modal(modalShow);
    window.$("#modalLogin").on("hide.bs.modal", closeLogin);
  }, [show, closeLogin]);

  // handle inputs
  const inputHandler = (e) => {
    const { name } = e.target;
    const value = e.target.type === "checkbox" ? true : e.target.value;
    setLoginObj({ ...loginObj, [name]: value });
  };

  // handle submit
  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(loginObj);
    setLoading(true);
    const res = await LoginHandler(loginObj);
    if (res.success === false) {
      res.error === "Server Error"
        ? updateMsg("An error occurred... try again later")
        : updateMsg(res.error);
      setMsg(true);
      setLoading(false);
      return;
    }

    const { name, email, _id, token } = res.data;
    const userData = {
      name,
      email,
      id: _id,
      login: true,
    };
    // set token locally
    localStorage.setItem("token", token);
    // store user details if user accept remember me
    if (loginObj.loginRemember === true) localStorage.setItem("user", _id);
    // set app state
    setUser(userData);
    // clean inputs
    document.querySelector("#loginEmail").value = "";
    document.querySelector("#loginPassword").value = "";
    document.querySelector("#loginRemember").setAttribute("checked", false);
    setLoginObj({});
    // stop spinner
    setLoading(false);
    // close modal
    closeLogin();
  };

  // switch to register modal
  const switchToRegister = () => {
    closeLogin();
    return setSignup(true);
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalLogin"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              onClick={closeLogin}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>

            <div className="modal-header line-height-fixed border-bottom-0 font-size-lg">
              <strong>Returning Customer</strong>
            </div>

            <div className="container p-6">
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
              <form
                className="my-auto align-content-center"
                onSubmit={submitHandle}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="loginEmail">
                        Email Address *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="loginEmail"
                        type="email"
                        placeholder="Email Address *"
                        required=""
                        name="email"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="loginPassword">
                        Password *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="loginPassword"
                        type="password"
                        placeholder="Password *"
                        required=""
                        name="password"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="loginRemember"
                          type="checkbox"
                          name="loginRemember"
                          onChange={inputHandler}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="loginRemember"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto">
                    <div className="form-group">
                      <a
                        className="font-size-sm text-reset"
                        data-toggle="modal"
                        href="#modalPasswordReset"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-sm btn-dark" type="submit">
                      {loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : null}
                      Sign In
                    </button>
                    <div className="float-right">
                      <span>Don't have account?</span>
                      <button
                        className="btn btn-outline-border btn-underline  ml-2"
                        onClick={switchToRegister}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
