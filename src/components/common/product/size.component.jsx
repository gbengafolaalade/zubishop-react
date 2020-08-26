import React from "react";

const SizeComponent = () => {
  return (
    <>
      <div class="form-group">
        <p class="mb-5">
          Size:{" "}
          <strong>
            <span id="sizeCaption">7.5</span> US
          </strong>
        </p>

        <div class="mb-2">
          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioOne"
              value="6"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioOne">
              6
            </label>
          </div>

          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioTwo"
              value="6.5"
              data-toggle="form-caption"
              data-target="#sizeCaption"
              disabled
            />
            <label class="custom-control-label" for="sizeRadioTwo">
              6.5
            </label>
          </div>

          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioThree"
              value="7"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioThree">
              7
            </label>
          </div>

          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioFour"
              value="7.5"
              data-toggle="form-caption"
              data-target="#sizeCaption"
              checked
            />
            <label class="custom-control-label" for="sizeRadioFour">
              7.5
            </label>
          </div>

          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioEleven"
              value="11"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioEleven">
              11
            </label>
          </div>
          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioTwelve"
              value="12"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioTwelve">
              12
            </label>
          </div>
          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioThirteen"
              value="13"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioThirteen">
              13
            </label>
          </div>
          <div class="custom-control custom-control-inline custom-control-size mb-2">
            <input
              type="radio"
              class="custom-control-input"
              name="sizeRadio"
              id="sizeRadioFourteen"
              value="14"
              data-toggle="form-caption"
              data-target="#sizeCaption"
            />
            <label class="custom-control-label" for="sizeRadioFourteen">
              14
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeComponent;
