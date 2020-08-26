import React from 'react';
import {X} from 'react-feather';

const RegisterModal = () => (
  <>
    <div
      className='modal fixed-right fade'
      id='modalRegister'
      tabindex='-1'
      role='dialog'
      aria-hidden='true'>
      <div className='modal-dialog modal-dialog-vertical' role='document'>
        <div className='modal-content'>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'>
            <X aria-hidden='true' />
          </button>

          <div className='modal-header line-height-fixed font-size-lg'>
            <strong className='mx-auto'>New Customer</strong>
          </div>

          <form className='my-auto align-content-center'>
            <div className='row'>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='sr-only' htmlFor='registerEmail'>
                    Name *
                  </label>
                  <input
                    className='form-control form-control-sm'
                    id='signUpName'
                    type='text'
                    placeholder='Name *'
                    required
                  />
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='sr-only' htmlFor='registerEmail'>
                    Email Address *
                  </label>
                  <input
                    className='form-control form-control-sm'
                    id='registerEmail'
                    type='email'
                    placeholder='Email Address *'
                    required=''
                  />
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='form-group'>
                  <label className='sr-only' htmlFor='registerPassword'>
                    Password *
                  </label>
                  <input
                    className='form-control form-control-sm'
                    id='registerPassword'
                    type='password'
                    placeholder='Password *'
                    required
                  />
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='form-group'>
                  <label className='sr-only' htmlFor='registerPasswordConfirm'>
                    Confirm Password *
                  </label>
                  <input
                    className='form-control form-control-sm'
                    id='registerPasswordConfirm'
                    type='password'
                    placeholder='Confirm Password *'
                    required
                  />
                </div>
              </div>
              <div className='col-12 col-md-auto'>
                <div className='form-group font-size-sm text-muted'>
                  By registering your details, you agree with our Terms &amp;
                  Conditions, and Privacy and Cookie Policy.
                </div>
              </div>
              <div className='col-12 col-md'>
                <div className='form-group'>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      id='registerNewsletter'
                      type='checkbox'
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='registerNewsletter'>
                      Sign me up for the Newsletter!
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <button className='btn btn-sm btn-dark' type='submit'>
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

export default RegisterModal;
