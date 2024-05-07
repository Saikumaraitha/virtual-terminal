import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cards, { Focused } from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import './styles.css'

import PaymentService from '../../../Services/PaymentSerivce';

const CreditCard = () => {

    const service = new PaymentService();
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const [amount, SetAmount] = useState("");

  const generateRandomString = (length:number) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  };
  const handleSubmitHandler = (e: any) => {
    e.preventDefault();
    const transaction_id =  generateRandomString(10)
    console.log("Form data:", number, name, date, cvc,amount, transaction_id);
    const payload = {
        "type": "sale",
        "transaction_id": transaction_id,
        "payment_token": "payment token",
        "amount": amount,
        "tid": 999,
        "card_number": number,
        "card_exp": date,
        "cvv": cvc,
        "first_name": name, 
        "last_name": name,
        "mid":"140339994165248",
              
    }
    service.getPaymentMethods(payload).then((response:any)=>{
        console.log(response);
    })
  }
  return (
    <>
      {/* <div className="rccs__card backcolor"> */}

    <div className="rccs__card rccs__card--unknown">
        <Cards
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus as Focused | undefined} // Cast 'focus' variable to 'Focused | undefined'
        />
    </div>

      <br />
      <form onSubmit={handleSubmitHandler}>
        <div className="row">
          <div className="col-sm-11">
            <label htmlFor="name">Card Number</label>
            <input
              type="text"
              className="form-control"
              value={number}
              name="number"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label htmlFor="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
       
        <br />
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="name">Expiration Date</label>
            <input
              type="text"
              name="expiry"
              className="form-control"
              value={date}
              onChange={(e) => {
                SetDate(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          <div className="col-sm-5">
            <label htmlFor="name">CVV</label>
            <input
              type="tel"
              name="cvc"
              className="card"
              value={cvc}
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          <br />
          
        <div className="row">
          <div className="col-sm-11">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              value={amount}
              name="amount"
              onChange={(e) => {
                SetAmount(e.target.value);
              }}
            //   onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <div className="submitDiv" style={{textAlign:"center", marginTop:'10%'}}>
                <button className="btn btn-success" type="submit">
                    Pay</button>
        </div>
        </div>
      </form>
    </>
  );
};
export default CreditCard;
