import React from "react";
import { Eye, ShoppingBag, Heart } from "react-feather";
import { Link, useHistory } from "react-router-dom";

const ProductCard = ({ tag, id, images, name, price }) => {
  let history = useHistory();
  return (
    <>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="badge badge-white card-badge card-badge-left text-uppercase">
            {tag}
          </div>

          <div className="card-img">
            <Link className="card-img-hover" to={`/product/${id}`}>
              {images.map((item, idx) => (
                <img
                  key={idx}
                  width={500}
                  className={`card-img-top ${
                    idx === 0 ? "card-img-back" : "card-img-front"
                  }`}
                  src={item}
                  alt="..."
                />
              ))}
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  onClick={() => history.push(`/product/${id}`)}
                >
                  <Eye size={16} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={16} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={16} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="#!">
                Shoes
              </Link>
            </div>

            <div className="font-weight-bold">
              <a className="text-body" href="product.html">
                {name}
              </a>
            </div>

            <div className="font-weight-bold text-muted">{`\u00A2${price}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
