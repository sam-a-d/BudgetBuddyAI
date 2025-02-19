import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Budget Buddy - A Personal Budget Tracker V.0.0.1</h3>
//       </header>
//     </div>
//   );
// };

class App extends React.Component{

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
        const {transactions, dataIsLoaded} = this.state

        if(!dataIsLoaded){
            return <strong> Loading...</strong>
        }else{
            return(
                <div className="p-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Transaction Time</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Categories</th>
            <th className="border border-gray-300 px-4 py-2">User ID</th>
            <th className="border border-gray-300 px-4 py-2">Transaction Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-300 px-4 py-2">{transaction.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(transaction.transactionTime).toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{transaction.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                {transaction.categories.map(cat => cat.name).join(", ")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{transaction.user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{transaction.transactionType == "TRANS_INCOME" ? "Credit": "Debit"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            )
        }
    } 
}

export default App;
