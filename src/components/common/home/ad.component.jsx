import React from 'react';

import coverImg from '../../../assets/images/cover-17.jpg';
const AdBanner = () => (
  <>
    <section>
      <div
        className='container bg-cover'
        style={{backgroundImage: `url(${coverImg})`}}>
        <div className='row py-12 bg-dark-10'>
          <div className='col-12 text-center text-white'>
            <h4>Summer Styles</h4>

            <h2 className='display-1 text-uppercase'>50% off</h2>

            <a className='link-underline text-reset mx-4 my-4' href='shop.html'>
              Shop Women
            </a>
            <a className='link-underline text-reset mx-4 my-4' href='shop.html'>
              Shop Men
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AdBanner;
