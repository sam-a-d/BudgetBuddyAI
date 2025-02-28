import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, content } = this.props;

        return (
                        <div className="card bg-secondary-dark dashnum-card text-white overflow-hidden">
              <span className="round small"></span>
              <span className="round big"></span>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="avtar avtar-lg">
                      <i className="text-white ti ti-credit-card"></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group">
                      <a
                        href="#"
                        className="avtar avtar-s bg-secondary text-white dropdown-toggle arrow-none"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item">Import Card</button></li>
                        <li><button className="dropdown-item">Export</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="text-white d-block f-34 f-w-500 my-2">
                  1350
                  <i className="ti ti-arrow-up-right-circle opacity-50"></i>
                </span>
                <p className="mb-0 opacity-50">Total Pending Orders</p>
              </div>
            </div>
        );
    }
}

export default Card;