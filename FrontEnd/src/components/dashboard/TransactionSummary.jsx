import React, { Component } from 'react';
import SingleTransactionCell from './SingleTransactionCell';
import axios from 'axios';

class TransactionSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
            transactions : [],
            dataIsLoaded : false
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/transactions")
        .then((res) => {
            this.setState({
                transactions: res.data,
                dataIsLoaded: true
            })

        })
    }
    render() {
        const {transactions, dataIsLoaded} = this.state;
        if(!dataIsLoaded){
            return <strong> Loading...</strong>
        }else{
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
                        {transactions.map((transaction)=>(
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
}

export default TransactionSummary;