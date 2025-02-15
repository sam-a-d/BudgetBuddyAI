import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Budget Buddy - A Personal Budget Tracker V.0.0.1</h3>
      </header>
    </div>
  );
};

export default App;
