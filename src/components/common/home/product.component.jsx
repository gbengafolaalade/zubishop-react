import React from 'react';
import {ArrowRight} from 'react-feather';

// assets
import one from '../../../assets/images/product-65.jpg';
import two from '../../../assets/images/product-66.jpg';
import three from '../../../assets/images/product-67.jpg';
import four from '../../../assets/images/product-68.jpg';
import five from '../../../assets/images/product-69.jpg';
import six from '../../../assets/images/product-70.jpg';

const Products = () => (
  <>
    <div className='section py-12'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='row align-items-center'>
              <div className='col-8 col-lg-6'>
                <div className='card'>
                  <div className='btn btn-white btn-sm card-price card-price-left'>
                    $59.00
                  </div>

                  <a href='product.html'>
                    <img src={one} alt='...' className='card-img-top' />
                  </a>
                </div>
              </div>
              <div className='col-7 col-lg-6 offset-n3 offset-lg-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.html'>
                    Floral Cotton midi Dress
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 pt-12'>
            <div className='row align-items-center'>
              <div className='col-8 col-lg-6'>
                <div className='card'>
                  <div className='btn btn-white btn-sm card-price card-price-left'>
                    $125.00
                  </div>

                  <img src={two} alt='...' className='card-img-top' />
                </div>
              </div>
              <div className='col-7 col-lg-6 offset-n3 offset-lg-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.html'>
                    Linen basic Trousers
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center pt-12'>
          <div className='col-12 col-md-10'>
            <div className='row align-items-center'>
              <div className='col-10 col-md-8'>
                <div className='card'>
                  <div className='btn btn-white btn-sm text-primary card-price card-price-left'>
                    $89.99
                  </div>

                  <div className='badge badge-dark card-badge card-badge-left text-uppercase'>
                    Sale
                  </div>

                  <a href='product.html'>
                    <img src={three} alt='...' className='card-img-top' />
                  </a>
                </div>
              </div>
              <div className='col-7 col-md-4 offset-n5 offset-md-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.htmL'>
                    Leather heel Sandals
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row pt-12'>
          <div className='col-12 col-md-6 order-md-2'>
            <div className='row align-items-center'>
              <div className='col-8 col-lg-6'>
                <div className='card'>
                  <div className='btn btn-white btn-sm card-price card-price-left'>
                    $35.00
                  </div>

                  <a href='product.html'>
                    <img src={four} alt='...' className='card-img-top' />
                  </a>
                </div>
              </div>
              <div className='col-7 col-lg-6 offset-n3 offset-lg-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.html'>
                    Leather square Tote Bag
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 pt-12 order-md-1'>
            <div className='row align-items-center'>
              <div className='col-8 col-lg-6'>
                <div className='card'>
                  <div className='btn btn-white btn-sm card-price card-price-left'>
                    $50.00
                  </div>

                  <a href='product.html'>
                    <img src={five} alt='...' className='card-img-top' />
                  </a>
                </div>
              </div>
              <div className='col-7 col-lg-6 offset-n3 offset-lg-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.html'>
                    Cotton basic T-Shirt
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center pt-12'>
          <div className='col-12 col-md-10'>
            <div className='row align-items-center'>
              <div className='col-10 col-md-8'>
                <div className='card'>
                  <div className='btn btn-white btn-sm card-price card-price-left'>
                    $39.00
                  </div>

                  <a href='prpoduct.html'>
                    <img src={six} alt='...' className='card-img-top' />
                  </a>
                </div>
              </div>
              <div className='col-7 col-md-4 offset-n5 offset-md-n1'>
                <h2 className='mb-0'>
                  <a className='text-reset' href='product.html'>
                    Acymmetric Cotton Top
                  </a>
                </h2>

                <a className='btn btn-link px-0 text-body' href='product.html'>
                  Shop Now{' '}
                  <span className='ml-2'>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Products;
