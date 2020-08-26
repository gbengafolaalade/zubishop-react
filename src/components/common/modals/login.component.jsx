import React, { useEffect } from "react";
import { X } from "react-feather";

const LoginModal = ({ show, closeCart }) => {
  useEffect(() => {
    const modalShow = show ? "show" : "hide";
    window.$(".modal").modal(modalShow);
    window.$(".modal").on("hide.bs.modal", closeCart);
  }, [show, closeCart]);

  return (
    <>
      <div
        className="modal fixed-right fade"
        id="modalLogin"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            <button
              onClick={closeCart}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>

            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Returning Customer</strong>
            </div>

            <form className="my-auto align-content-center">
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
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
