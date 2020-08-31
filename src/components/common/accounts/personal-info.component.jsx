import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <form>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="accountFirstName">First Name *</label>
              <input
                class="form-control form-control-sm"
                id="accountFirstName"
                type="text"
                placeholder="First Name *"
                value="Daniel"
                required
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="accountLastName">Last Name *</label>
              <input
                class="form-control form-control-sm"
                id="accountLastName"
                type="text"
                placeholder="Last Name *"
                value="Robinson"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="accountEmail">Email Address *</label>
              <input
                class="form-control form-control-sm"
                id="accountEmail"
                type="email"
                placeholder="Email Address *"
                value="user@email.com"
                required
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="accountPassword">Current Password *</label>
              <input
                class="form-control form-control-sm"
                id="accountPassword"
                type="password"
                placeholder="Current Password *"
                required
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="AccountNewPassword">New Password *</label>
              <input
                class="form-control form-control-sm"
                id="AccountNewPassword"
                type="password"
                placeholder="New Password *"
                required
              />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="form-group">
              <label>Date of Birth</label>

              <div class="form-row">
                <div class="col-auto">
                  <label class="sr-only" for="accountDate">
                    Date
                  </label>
                  <select
                    class="custom-select custom-select-sm"
                    id="accountDate"
                  >
                    <option>10</option>
                    <option>11</option>
                    <option selected>12</option>
                  </select>
                </div>
                <div class="col">
                  <label class="sr-only" for="accountMonth">
                    Month
                  </label>
                  <select
                    class="custom-select custom-select-sm"
                    id="accountMonth"
                  >
                    <option>January</option>
                    <option selected>February</option>
                    <option>March</option>
                  </select>
                </div>
                <div class="col-auto">
                  <label class="sr-only" for="accountYear">
                    Year
                  </label>
                  <select
                    class="custom-select custom-select-sm"
                    id="accountYear"
                  >
                    <option>1990</option>
                    <option selected>1991</option>
                    <option>1992</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="form-group mb-8">
              <label>Gender</label>
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-sm btn-outline-border active">
                  <input type="radio" name="gender" checked /> Male
                </label>
                <label class="btn btn-sm btn-outline-border">
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-dark" type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
