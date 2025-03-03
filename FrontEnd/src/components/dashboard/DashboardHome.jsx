import React, { Component } from 'react';
import Card from '../Card';
import CardSmall from '../CardSmall';
import TransactionSummary from './TransactionSummary';
import axios from 'axios';
import TransactionFilter from './TransactionFilter';
import { TransacFilterUrlGenerator } from '../TransacFilterUrlGenerator';
import Dropdown from '../microComponents/dropdown';

class DashboardHome extends Component {
    constructor(props){
      super(props);
      this.state = {
          transactions : [],
          type : null,
          startDate : null,
          endDate : null,
          type : null,
          userId : null,
          minAmount : null,
          maxAmount : null,
          dataIsLoaded : false
      }
    }

    
    fetchTransactions = () => {
      
      const baseUrl = TransacFilterUrlGenerator({
        url: "http://localhost:8080/transactions",
        userId: 1,
        type: this.state.selectedType === "all" ? null : this.state.selectedType
      });
      
      console.log(baseUrl);
      
      
      axios.get(baseUrl)
      .then((res) => {
        this.setState({
          transactions: res.data,
          dataIsLoaded: true
        })
        
      })
    }
    
    
    componentDidMount(){
      this.fetchTransactions();
    }
    
    handleTypeChange = (event) => {
      this.setState({ 
        selectedType: event.target.value
      }, () => {
        this.fetchTransactions();
        console.log(this.state.selectedType);
        
      });
    };

    
    
    render() {
        
      const {transactions, dataIsLoaded} = this.state;
      
      if(!dataIsLoaded){
        return <strong> Loading...</strong>
      }else{

          const totalCredit = transactions.filter((t) => t.transactionType == "TRANS_INCOME").reduce((acc, t) => acc + t.amount, 0);
          const totalDebit = transactions.filter((t) => t.transactionType == "TRANS_EXPENSE").reduce((acc, t) => acc + t.amount, 0);
        return (
            
            <div className="row">
              <div className="row mb-3">
                <Dropdown
                  cssClass="col-xl-2 col-md-6"
                  label="Transaction Type"
                  options={[
                      { value: "all", label: "All Type" },
                      { value: "TRANS_INCOME", label: "Credit" },
                      { value: "TRANS_EXPENSE", label: "Debit" }
                  ]}
                  value={this.state.selectedType}
                  onChange={this.handleTypeChange}
                />
              </div>
            
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