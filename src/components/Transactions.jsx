import React, { useState } from 'react';

const Transaction = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, description, amount });
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
       {/* <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /> */}
      
     <input
        type="text"
        placeholder="Input Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      
     
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default Transaction;