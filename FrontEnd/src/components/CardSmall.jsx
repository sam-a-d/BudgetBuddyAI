import React, { Component } from 'react';

class CardSmall extends Component {
    render() {
        return (
                        <div className="card bg-primary-dark dashnum-card dashnum-card-small text-white overflow-hidden">
              <span className="round bg-primary small"></span>
              <span className="round bg-primary big"></span>
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <div className="avtar avtar-lg">
                    <i className="text-white ti ti-credit-card"></i>
                  </div>
                  <div className="ms-2">
                    <h4 className="text-white mb-1">$203k</h4>
                    <p className="mb-0 opacity-75 text-sm">Total Income</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default CardSmall;