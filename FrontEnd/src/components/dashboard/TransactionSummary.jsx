import React, { Component } from 'react';
import SingleTransactionCell from './SingleTransactionCell';

class TransactionSummary extends Component {

    render() {
            return (
                <div className="card">
                <div className="card-body">
                    <div className="row mb-3 align-items-center">
                    <div className="col">
                        <h4>Transaction Summary</h4>
                    </div>
                    <div className="col-auto"></div>
                    </div>

                    <ul className="list-group list-group-flush">
                        {this.props.transactions.map((transaction)=>(
                            <li key={transaction.id} className="list-group-item px-0">
                                <SingleTransactionCell 
                                    description={transaction.description} 
                                    amount={transaction.amount} 
                                    time={new Date(transaction.transactionTime).toLocaleString()} 
                                    type={transaction.transactionType == "TRANS_INCOME" ? "Credit": "Debit"}/>
                            </li>
                        ))}

                    </ul>
                    <div className="text-center">
                    <a href="#!" className="b-b-primary text-primary">
                        View all
                        <i className="ti ti-chevron-right"></i>
                    </a>
                    </div>
                </div>
                </div>
            );
    }
}

export default TransactionSummary;