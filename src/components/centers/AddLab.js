import React from "react";
import Menu from "../Menu";

const Addlab = () => {
  return (
    <div className="d-flex">
      <div className="col-2 bg-light p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;&gt;&nbsp;Add Center&nbsp;&gt;&nbsp;Add Lab&nbsp;
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Lab</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form className="form-horizontal mb-4">
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                  Lab{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Lab Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="lab_name"
                    name="lab_name"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    className="col-xs-10 col-sm-5 form-control"
                    id="addres1"
                    name="address1"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  {" "}
                  Select State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  {" "}
                  Select City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    value=""
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Timings
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="hospital"
                    name="hospital"
                    required
                  >
                    <option value="">From</option>
                    <option value="12:00AM">12:00 AM</option>
                    <option value="01:00AM">01:00 AM</option>
                    <option value="02:00AM">02:00 AM</option>
                    <option value="03:00AM">03:00 AM</option>
                    <option value="04:00AM">04:00 AM</option>
                    <option value="05:00AM">05:00 AM</option>
                    <option value="06:00AM">06:00 AM</option>
                    <option value="07:00AM">07:00 AM</option>
                    <option value="08:00AM">08:00 AM</option>
                    <option value="09:00AM">09:00 AM</option>
                    <option value="10:00AM">10:00 AM</option>
                    <option value="11:00AM">11:00 AM</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="department"
                    name="department"
                  >
                    <option value="">To</option>

                    <option value="12:00PM">12:00 PM</option>
                    <option value="01:00PM">01:00 PM</option>
                    <option value="02:00PM">02:00 PM</option>
                    <option value="03:00PM">03:00 PM</option>
                    <option value="04:00PM">04:00 PM</option>
                    <option value="05:00PM">05:00 PM</option>
                    <option value="06:00PM">06:00 PM</option>
                    <option value="07:00PM">07:00 PM</option>
                    <option value="08:00PM">08:00 PM</option>
                    <option value="09:00PM">09:00 PM</option>
                    <option value="10:00PM">10:00 PM</option>
                    <option value="11:00PM">11:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i class="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset">
                    <i class="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Addlab;
