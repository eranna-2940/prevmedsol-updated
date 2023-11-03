import React from "react";
import Menu from "../Menu";

const Addpatient = () => {
  return (
    <div className="d-flex">
      <div className="col-2 bg-light p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
        {/* Right side */}

        <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;&gt;
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Patient</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form className="form-horizontal mb-4">
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                  First Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="First name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="first_name"
                    name="first_name"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Last Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Gender
                </label>
                <div className="col-md-8">
                  <div className="radio-inline">
                    <label className="me-4">
                      <input
                        type="radio"
                        className="pms"
                        id="mgender"
                        name="gender"
                        value="male"
                        required
                      />
                      <span className="lbl"> Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="pms"
                        id="fgender"
                        name="gender"
                        value="female"
                      />
                      <span className="lbl"> Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group d-md-flex">
										<label className="col-sm-4 text-md-end text-primary" for="form-field-1"> Blood Group</label>
										<div className="col-sm-8">
											<select className="col-xs-10 col-sm-5 form-select" id="bloodgroup" name="bloodgroup" required>																									
												<option value="">Select</option>
                                                <option value="A+" >A+</option>														
                                                <option value="A-" >A-</option>														
                                                <option value="B+" >B+</option>														
                                                <option value="B-" >B-</option>														
                                                <option value="AB-" >AB-</option>														
                                                <option value="AB+" >AB+</option>														
                                                <option value="O+" >O+</option>
												<option value="O-" >O-</option>														
                                            </select>
										</div>
									</div>
                                    <div className="form-group d-md-flex">
										<label className="col-sm-4 text-md-end text-primary" for="form-field-1"> Date of Birth</label>
										<div className="col-sm-8">											
												<input className="form-control col-xs-10 col-sm-5" id="birth_date" name="birth_date" type="date"  data-date-format="mm-dd-yyyy" />
										</div>								
									</div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Mobile
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="mobile_number"
                    maxlength={10}
                    name="mobile_number"
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    placeholder="sample@gmail.com"
                    className="col-xs-10 col-sm-5 form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="col-xs-10 col-sm-5 form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    placeholder="Hospital Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address1"
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
                State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
										<label className="col-sm-4 text-md-end text-primary" for="form-field-1"> Status</label>
										<div className="col-sm-8">
											<select className="col-xs-10 col-sm-5 form-select" id="status" name="status" required>																									
												<option value="">Select</option>
                                                <option value="Active" >Active</option>														
                                                <option value="inactive" >Inactive</option>																												
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

export default Addpatient;
