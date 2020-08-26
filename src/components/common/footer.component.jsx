import React from 'react';

import {ReactComponent as Pattern} from '../../assets/images/pattern.svg';

const Footer = () => (
  <>
    <footer
      className='bg-dark bg-cover @@classList'
      style={{backgroundImage: `url(${Pattern})`}}>
      <div className='py-12 border-bottom border-gray-700'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 col-xl-6'>
              <h5 className='mb-7 text-center text-white'>
                Want style Ideas and Treats?
              </h5>

              <form className='mb-11'>
                <div className='form-row align-items-start'>
                  <div className='col'>
                    <input
                      type='email'
                      className='form-control form-control-gray-700 form-control-lg'
                      placeholder='Enter Email *'
                    />
                  </div>
                  <div className='col-auto'>
                    <button type='submit' className='btn btn-gray-500 btn-lg'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <h4 className='mb-6 text-white'>O'jun Lifestyle</h4>

              <ul className='list-unstyled list-inline mb-7 mb-md-0'>
                <li className='list-inline-item'>
                  <a href='#!' className='text-gray-350'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-gray-350'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-gray-350'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-gray-350'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-gray-350'>
                    <i className='fab fa-medium'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-6 col-sm'>
              <h6 className='heading-xxs mb-4 text-white'>Support</h6>
            </div>
            <div className='col-6 col-sm'>
              <h6 className='heading-xxs mb-4 text-white'>Shop</h6>
            </div>
            <div className='col-6 col-sm'>
              <h6 className='heading-xxs mb-4 text-white'>Company</h6>
            </div>
            <div className='col-6 col-sm'>
              <h6 className='heading-xxs mb-4 text-white'>Contact</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a className='text-gray-300' href='#!'>
                    1-202-555-0105
                  </a>
                </li>
                <li>
                  <a className='text-gray-300' href='#!'>
                    1-202-555-0106
                  </a>
                </li>
                <li>
                  <a className='text-gray-300' href='#!'>
                    help@ojun.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='mb-3 mb-md-0 font-size-xxs text-muted'>
                © {new Date().getFullYear()} All rights reserved. Designed by
                UIX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
