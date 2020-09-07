import React, { useEffect, useState, useContext } from "react";
import { X } from "react-feather";
import { SignupHandler } from "../../../services/auth.service";
import { AppContext } from "../../../services/appstate.service";

const RegisterModal = ({ show, closeSignup, setLogin }) => {
  const [registerObj, setRegisterObj] = useState({});
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setMsg] = useState(false);
  const [passLenError, setPassLenError] = useState(false);
  const [msg, updateMsg] = useState("");
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    const modalShow = show ? "show" : "hide";
    window.$("#modalRegister").modal(modalShow);
    window.$("#modalRegister").on("hide.bs.modal", closeSignup);
  }, [show, closeSignup]);

  // handle inputs
  const inputHandler = (e) => {
    const { name } = e.target;
    const value = e.target.type === "checkbox" ? true : e.target.value;
    if (name === "passwordConfirm") {
      // @TODO: Check for password confirmation
      if (
        document.querySelector("#registerPassword").value ===
        document.querySelector("#registerPasswordConfirm").value
      ) {
        return setPasswordError(false);
      }
      return setPasswordError(true);
    }
    if (name === "password" && value.length < 6) {
      setPassLenError(true);
    } else {
      setPassLenError(false);
    }
    setRegisterObj({ ...registerObj, [name]: value });
  };

  // handle submit
  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(registerObj);
    setLoading(true);
    const resData = await SignupHandler(registerObj);
    console.log(resData);
    if (resData.success === false) {
      resData.error === "Server Error"
        ? updateMsg("An error occurred... try again later")
        : updateMsg(resData.error);
      setMsg(true);
      setLoading(false);
      return;
    }

    const { name, email, _id, token } = resData.data;
    // set token locally
    localStorage.setItem("token", token);
    // set user globally
    const userData = {
      name,
      email,
      id: _id,
      login: true,
    };
    setUser(userData);
    // clear inputs
    setRegisterObj({});
    // stop spinner
    setLoading(false);
    // close modal
    closeSignup();
  };

  // switch to register modal
  const switchToLogin = () => {
    closeSignup();
    return setLogin(true);
  };

  return (
    <>
      <div
        className="modal fixed-right fade"
        id="modalRegister"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>

            <div className="modal-header border-bottom-0 line-height-fixed font-size-lg">
              <strong>New Customer</strong>
            </div>

            {/* @TODO: fix the close btn alignment */}
            <div className="container px-6 my-auto">
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
                className="my-auto align-content-center justify-content-center"
                onSubmit={submitHandle}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="registerEmail">
                        Name *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="signUpName"
                        type="text"
                        placeholder="Name *"
                        required
                        name="name"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="registerEmail">
                        Email Address *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="registerEmail"
                        type="email"
                        placeholder="Email Address *"
                        required
                        name="email"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="registerPassword">
                        Password *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="registerPassword"
                        type="password"
                        placeholder="Password *"
                        required
                        name="password"
                        onChange={inputHandler}
                      />
                      {passLenError ? (
                        <div className="text-danger">
                          <small>Password must be at least 6 characters</small>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlFor="registerPasswordConfirm"
                      >
                        Confirm Password *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="registerPasswordConfirm"
                        type="password"
                        placeholder="Confirm Password *"
                        required
                        name="passwordConfirm"
                        onChange={inputHandler}
                      />
                      {passwordError ? (
                        <div className="text-danger">
                          <small>Password does not match</small>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-auto">
                    <div className="form-group font-size-sm text-muted">
                      By registering your details, you agree with our Terms
                      &amp; Conditions, and Privacy and Cookie Policy.
                    </div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="registerNewsletter"
                          type="checkbox"
                          name="registerNewsletter"
                          onChange={inputHandler}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="registerNewsletter"
                        >
                          Sign me up for the Newsletter!
                        </label>
                      </div>
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
                      Sign Up
                    </button>
                    <div className="float-right">
                      <span>Already have account?</span>
                      <button
                        className="btn btn-outline-border btn-underline  ml-2"
                        onClick={switchToLogin}
                      >
                        Login
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

export default RegisterModal;
