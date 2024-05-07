import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentForm from './Components/Payments/PaymentForm';
import CreditCard from './Components/Payments/CreditCard/CreditCard';

function App() {
  return (
    <div className="App">
     {/* <PaymentForm /> */}
     <CreditCard />
    </div>
  );
}

export default App;
