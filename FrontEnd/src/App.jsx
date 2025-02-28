import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import TableData from './components/table/TableData';
import MainLayout from './layouts/MainLayout';
import Transactions from './components/dashboard/Transactions';

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

  render(){
    return(
      <MainLayout>
        <Transactions/>
      </MainLayout>
    )
  }

}

export default App;
