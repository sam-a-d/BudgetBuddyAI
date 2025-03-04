import React, { Component } from 'react';
import Card from '../Card';
import CardSmall from '../CardSmall';
import TransactionSummary from './TransactionSummary';
import axios from 'axios';
import { TransacFilterUrlGenerator } from '../../functions/TransacFilterUrlGenerator';
import Dropdown from '../microComponents/dropdown';
import { FilterDurationProcessor } from '../../functions/FilterDurationProcessor';
import Input from '../microComponents/input';
import StackChart from './StackChart';

class DashboardHome extends Component {
    constructor(props){
      super(props);
      this.state = {
          transactions : [],
          type : null,
          startDate : null,
          endDate : null,
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
        type: this.state.selectedType === "all" ? null : this.state.selectedType,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minAmount: this.state.minAmount,
        maxAmount: this.state.maxAmount
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

    handleDurationChange = (event) => {
      
      const selectedDuration = event.target.value;
      const duration = FilterDurationProcessor(selectedDuration);
      
      this.setState({
        startDate: duration.startDate,
        endDate: duration.endDate,
      }, () => {
        this.fetchTransactions();
      });
    }

    
    
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

                <Dropdown
                  cssClass="col-xl-2 col-md-6"
                  options={[
                      { value: null, label: "All Time" },
                      { value: "today", label: "Today" },
                      { value: "last7d", label: "Last 7 Days" },
                      { value: "last1m", label: "Last 1 Month" },
                      { value: "last6m", label: "Last 6 Months" },
                      { value: "last12m", label: "Last 12 Months" }
                  ]}
                  value={this.state.selectedDuration}
                  onChange={this.handleDurationChange}
                />

                <Input
                  cssClass="col-xl-2 col-md-6"
                  placeholder="Min Transaction"
                  value={this.state.minAmount}
                  type='number'
                  onChange={(e) => this.setState({ minAmount: e.target.value }, () => this.fetchTransactions())}
                />

                <Input
                  cssClass="col-xl-2 col-md-6"
                  placeholder="Max Transaction"
                  value={this.state.maxAmount}
                  type='number'
                  onChange={(e) => this.setState({ maxAmount: e.target.value }, () => this.fetchTransactions())}
                />
                

              </div>
            
            <div className="col-xl-4 col-md-6">
                <Card />
            </div>
          <div className="col-xl-4 col-md-6">
                <Card />
          </div>
          <div className="col-xl-4 col-md-12">
            <CardSmall transType="Credit" amount={totalCredit.toFixed(2)} cssClass="bg-primary" cardInside="+"/>
            <CardSmall transType="Debit" amount={totalDebit.toFixed(2)} cssClass="bg-warning" cardInside="-"/>
          </div>

          <div className="col-xl-8 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3 align-items-center">
                  <div className="col">
                    <small className="text-muted">Total Transactions</small>
                    <h5>{(totalCredit+ totalDebit).toFixed(2)}</h5>
                  </div>

                <StackChart transactions={transactions}/>
                </div>
              
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