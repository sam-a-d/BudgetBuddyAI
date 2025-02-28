import React, { Component } from 'react';

class SingleTransactionCell extends Component {
    render() {
        return (
            <div>
                <div className="row align-items-start">
                      <div className="col">
                        <h6 className="mb-0">{this.props.description}</h6>
                        <small className="">{this.props.time}</small>
                      </div>
                      <div className="col-auto">
                        <h6 className="mb-0">
                          {this.props.amount}
                          {this.props.type == "Credit" ? (
                            <span className="ms-2 align-top avtar avtar-xxs bg-light-success">+</span>
                          ) : (
                            <span className="ms-2 align-top avtar avtar-xxs bg-light-danger">-</span>
                          )}
                        </h6>
                      </div>
                    </div>
            </div>
        );
    }
}

export default SingleTransactionCell;