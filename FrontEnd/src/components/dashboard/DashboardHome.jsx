import React, { Component } from 'react';
import Card from '../Card';
import CardSmall from '../CardSmall';
import TransactionSummary from './TransactionSummary';
import axios from 'axios';

class DashboardHome extends Component {
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

          const totalDebit = transactions.filter((t) => t.transactionType == "TRANS_INCOME").reduce((acc, t) => acc + t.amount, 0);
          const totalCredit = transactions.filter((t) => t.transactionType == "TRANS_EXPENSE").reduce((acc, t) => acc + t.amount, 0);
          console.log(totalDebit);
          console.log(totalCredit);
        return (
            <div className="row">
            <div className="col-xl-4 col-md-6">
                <Card />
            </div>
          <div className="col-xl-4 col-md-6">
                <Card />
          </div>
          <div className="col-xl-4 col-md-12">
            <CardSmall transType="Credit" amount={totalCredit} cssClass="bg-primary" cardInside="+"/>
            <CardSmall transType="Debit" amount={totalDebit} cssClass="bg-warning" cardInside="-"/>
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
            <TransactionSummary transactions={transactions}/>
          </div>
          </div>
        );
      }
    }
}

export default DashboardHome;