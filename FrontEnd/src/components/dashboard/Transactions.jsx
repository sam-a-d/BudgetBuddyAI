import { Component } from "react";
import TableData from "../table/TableData";
import axios from "axios";

class Transactions extends Component {

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
            <TableData data={ "Amount" } />
            <TableData data={ "Transaction Time" } />
            <TableData data={ "Description" } />
            <TableData data={ "Categories" } />
            <TableData data={ "User ID" } />
            <TableData data={ "Transaction Type" } />
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <TableData data={transaction.amount} />
              <TableData data={new Date(transaction.transactionTime).toLocaleString()} />
              <TableData data={transaction.description}/>
              <TableData data={transaction.categories.map(cat => cat.name).join(", ")}/>
              <TableData data={transaction.user.id} />
              <TableData data={transaction.transactionType == "TRANS_INCOME" ? "Credit": "Debit"} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            )
        }
    } 
}

export default Transactions;