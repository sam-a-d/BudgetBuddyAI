import React, { Component } from 'react';
import Card from '../Card';
import CardSmall from '../CardSmall';
import TransactionSummary from './TransactionSummary';

class DashboardHome extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-xl-4 col-md-6">
                <Card />
            </div>
          <div className="col-xl-4 col-md-6">
                <Card />
          </div>
          <div className="col-xl-4 col-md-12">
            <CardSmall />
            <CardSmall />
          </div>

          <div className="col-xl-8 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3 align-items-center">
                  <div className="col">
                    <small className="text-muted">Total Growth</small>
                    <h3>$2,324.00</h3>
                  </div>
                  <div className="col-auto">
                    <select className="form-select p-r-35">
                      <option>Today</option>
                      <option selected>This Month</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </div>
                <div id="growthchart"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <TransactionSummary />
          </div>
          </div>
        );
    }
}

export default DashboardHome;