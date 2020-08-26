import React from 'react';
import {Eye, ShoppingBag, Heart} from 'react-feather';

const ProductCard = (props) => (
  <>
    <div className='col-6 col-md-3'>
      <div className='card mb-7'>
        <div className='badge badge-white card-badge card-badge-left text-uppercase'>
          New
        </div>

        <div className='card-img'>
          <a className='card-img-hover' href='product.html'>
            <img
              className='card-img-top card-img-back'
              src='assets/img/products/product-120.jpg'
              alt='...'
            />
            <img
              className='card-img-top card-img-front'
              src='assets/img/products/product-5.jpg'
              alt='...'
            />
          </a>

          <div className='card-actions'>
            <span className='card-action'>
              <button
                className='btn btn-xs btn-circle btn-white-primary'
                data-toggle='modal'
                data-target='#modalProduct'>
                <Eye size={16} />
              </button>
            </span>
            <span className='card-action'>
              <button
                className='btn btn-xs btn-circle btn-white-primary'
                data-toggle='button'>
                <ShoppingBag size={16} />
              </button>
            </span>
            <span className='card-action'>
              <button
                className='btn btn-xs btn-circle btn-white-primary'
                data-toggle='button'>
                <Heart size={16} />
              </button>
            </span>
          </div>
        </div>

        <div className='card-body px-0'>
          <div className='font-size-xs'>
            <a className='text-muted' href='shop.html'>
              Shoes
            </a>
          </div>

          <div className='font-weight-bold'>
            <a className='text-body' href='product.html'>
              Leather mid-heel Sandals
            </a>
          </div>

          <div className='font-weight-bold text-muted'>$129.00</div>
        </div>
      </div>
    </div>
  </>
);

export default ProductCard;
