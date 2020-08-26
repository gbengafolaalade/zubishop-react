import React from "react";

const ProductSearch = () => (
  <>
    <form>
      <div className="row">
        <div className="col-12 col-lg-3 col-md-4">
          <div className="form-group">
            <label className="sr-only" htmlFor="modalSearchCategories">
              Categories:
            </label>
            <select className="custom-select" id="modalSearchCategories">
              <option defaultValue="">All Categories</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-lg-9 col-md-8">
          <div className="input-group input-group-merge">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-border" type="submit">
                <i className="fe fe-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </>
);

export default ProductSearch;
