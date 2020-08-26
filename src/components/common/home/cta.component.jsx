import React from 'react';
import {ArrowRight} from 'react-feather';

// assets
import small from '../../../assets/images/product-71.jpg';
import imgBig from '../../../assets/images/product-72.jpg';

const CTA = () => (
  <>
    <section className='py-12'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-3'>
            <img className='img-fluid mb-2' src={small} alt='...' />

            <div className='mb-7 mb-md-0'>
              <a
                className='btn btn-link px-0 text-body font-size-h6'
                href='shop.html'>
                Dresses{' '}
                <span className='ml-2'>
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <img className='img-fluid mb-2' src={imgBig} alt='...' />

            <div className='mb-7 mb-md-0'>
              <a
                className='btn btn-link px-0 text-body font-size-h6'
                href='shop.html'>
                Cropped Trousers{' '}
                <span className='ml-2'>
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className='col-12 col-md-4 pl-lg-7'>
            <h2 className='h1 mb-7 ml-md-n11'>Our must haves</h2>

            <p>
              Open created shall two he second moving whose. He face whose two
              upon, fowl behold waters. Fly there their day creepeth. Darkness
              beginning spirit after.
            </p>
            <p className='mb-8'>
              Third. For morning whales saw were had seed can't divide it light
              shall moveth, us blessed given.
            </p>

            <a className='btn btn-dark' href='shop.html'>
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CTA;
