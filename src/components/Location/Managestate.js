import React from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const Managestate = () => {
  return (
    <div className="d-flex ">
      <div className="col-2 bg-light p-0">
        <Menu/>
     </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <Link to="/dashboardpage" className="text-decoration-none text-dark">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;&gt;
          </Link>&nbsp;Locations&nbsp;&gt;&nbsp;Manage State&nbsp;                     </nav>
        <h4 className="mt-2 ms-2 text-primary">Manage State</h4>
        <hr className="ms-4 me-4" />
        <div class="d-flex justify-content-between">
          <div class="pull-left p-3">
            <div class="btn-overlap btn-group">
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-search bigger-110 blue"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-copy bigger-110 pink"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-database bigger-110 orange"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-print bigger-110 grey"></i>{" "}
                </span>
              </a>
            </div>
          </div>
          <div class="pull-right p-3">
            <a href="http://prevmedsol.com/admin/add_center">
              <button class="btn btn-primary">
                <i class="fa fa-edit"></i> Add
              </button>
            </a>
          </div>
        </div>
      
        <div className="p-3">
          <div
            className="table-header p-2 text-white fs-5"
            style={{ background: "#307ECC", width: "100%" }}
          >
          Results for "Latest Registered Domains"
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className="p-2">
              <label>Display records</label>
              <select
                name="dynamic-table_length"
                aria-controls="dynamic-table"
                class="form-control"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
            </div>
            <div className="p-2">
              <label>Search:</label>
              <input
                type="search"
                placeholder=""
                aria-controls="dynamic-table"
                class="form-control"
              />
            </div>
          </div>
          <table
            id="dynamic-table"
            className="table table-striped table-bordered table-hover dataTable no-footer"
            role="grid"
            aria-describedby="dynamic-table_info"
          >
            <thead>
              <tr role="row">
                <th className="center sorting_disabled" rowspan="1" colspan="1">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="ID: activate to sort column ascending"
                >
                  ID
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Name: activate to sort column ascending"
                >
                  State
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Status"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="odd">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>1</td>
                <td>Andhra Pradesh</td>

                <td>
                  <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                    <a
                      className="green"
                      href="http://prevmedsol.com/admin/edit_center/25"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </a>
                    <a
                      className="red"
                      href="http://prevmedsol.com/admin/delete_center/25"
                      onclick="return checkDelete();"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr role="row" className="even">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>2</td>
                <td>Arunachal Pradesh</td>
                <td>
                  <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                    <a
                      className="green"
                      href="http://prevmedsol.com/admin/edit_center/56"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </a>

                    <a
                      className="red"
                      href="http://prevmedsol.com/admin/delete_center/56"
                      onclick="return checkDelete();"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between " style={{ background: "#EFF3F8", width: "100%"}} >
            <div class="p-3">
              <div
                class="dataTables_info"
                id="dynamic-table_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 5 of 5 entries
              </div>
            </div>
            <div class="pull-left p-2">
            <div class="btn-overlap btn-group">
              <a
              href="/"
                 class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  Previous
                </span>
              </a>
              <a
                            href="/"

                class="btn btn-white btn-bold border"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  1
                </span>
              </a>
              <a
                            href="/"

                class="btn btn-white btn-bold border"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  2
                </span>
              </a>
              <a
              href="/"

                class="btn btn-white btn-bold border"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  3
                </span>
              </a>
              <a
               href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  Next
                </span>
              </a>
            </div>
          </div>
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

export default Managestate;
