import React from 'react';
import {X} from 'react-feather';

// assets
import cover from '../../../assets/images/cover-25.jpg';
const NewsLetterModal = () => (
  <>
    <div
      className='modal fade show'
      id='modalNewsletterHorizontal'
      tabindex='-1'
      role='dialog'
      aria-modal='true'
      style='display: block;'>
      <div
        className='modal-dialog modal-dialog-centered modal-lg'
        role='document'>
        <div className='modal-content'>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'>
            <X aria-hidden='true' />
          </button>

          <div className='row no-gutters'>
            <div className='col-12 col-lg-5'>
              <img className='img-fluid' src={cover} alt='...' />
            </div>
            <div className='col-12 col-lg-7 d-flex flex-column px-md-8'>
              <div className='modal-body my-auto py-10'>
                <h4>Subscribe to Newsletter and get 15% Discount</h4>

                <p className='mb-7 font-size-lg'>On your next purchase</p>

                <form>
                  <div className='form-row'>
                    <div className='col'>
                      <label
                        className='sr-only'
                        for='modalNewsletterHorizontalEmail'>
                        Enter Email *
                      </label>
                      <input
                        className='form-control form-control-sm'
                        id='modalNewsletterHorizontalEmail'
                        type='email'
                        placeholder='Enter Email *'
                      />
                    </div>
                    <div className='col-auto'>
                      <button className='btn btn-sm btn-dark' type='submit'>
                        <i className='fe fe-send'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className='modal-footer pt-0'>
                <div className='custom-control custom-checkbox'>
                  <input
                    className='custom-control-input'
                    id='modalNewsletterHorizontalCheckbox'
                    type='checkbox'
                  />

                  <label
                    className='custom-control-label font-size-xs'
                    for='modalNewsletterHorizontalCheckbox'>
                    Prevent this Pop-up
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NewsLetterModal;
