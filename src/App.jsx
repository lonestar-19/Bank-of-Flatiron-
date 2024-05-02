import React, { useState } from 'react';
import Table from "./components/Tables";
import Transaction from "./components/Transactions";
import Filter from './components/Filter';
import './index.css'





function App() {
    const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleFilterTransactions = (term) => {
    setFilterTerm(term);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
  );
  return (
     <div>
      <h1>Bank Of Flatiron</h1>
      <Transaction onSubmit={handleAddTransaction} />
      <Filter onFilter={handleFilterTransactions} />
      <Table transactions={filteredTransactions} />
      
     
    </div>
  );
};
 
  export default App;