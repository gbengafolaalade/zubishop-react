import React from "react";
import { X, Edit2, Plus } from "react-feather";

const Address = () => {
  return (
    <>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="card card-lg bg-light mb-8">
            <div class="card-body">
              <h6 class="mb-6">Shipping Address</h6>

              <p class="text-muted mb-0">
                Daniel Robinson <br />
                3997 Raccoon Run <br />
                Kingston <br />
                45644 <br />
                United States <br />
                6146389574
              </p>

              <div class="card-action card-action-right">
                <a
                  class="btn btn-xs btn-circle btn-white-primary"
                  href="account-address-edit.html"
                >
                  <Edit2 size={16} />
                </a>

                <button class="btn btn-xs btn-circle btn-white-primary">
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card card-lg bg-light mb-8">
            <div class="card-body">
              <h6 class="mb-6">Billing Address</h6>

              <p class="text-muted mb-0">
                Daniel Robinson <br />
                3997 Raccoon Run <br />
                Kingston <br />
                45644 <br />
                United States <br />
                6146389574
              </p>

              <div class="card-action card-action-right">
                <a
                  class="btn btn-xs btn-circle btn-white-primary"
                  href="account-address-edit.html"
                >
                  <Edit2 size={16} />
                </a>

                <button class="btn btn-xs btn-circle btn-white-primary">
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <a
            class="btn btn-block btn-lg btn-outline-border"
            href="account-address-edit.html"
          >
            Add Address <Plus size={16} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Address;
