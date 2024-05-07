import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
  import './Payments.css';


const  PaymentForm = (props:any) => {
  const [formData, setFormData] = useState({
    creditCardNumber: '',
    cardholderName: '',
    expiration: '',
    cvv: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;

    // Remove non-numeric characters from the input value
    const numericValue = value.replace(/\D/g, '');

    // Format the input value with spaces every 4 digits
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += numericValue[i];
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Perform further actions, such as submitting the form with formatted data
    console.log('Form data:', formData);
  };

  
    return (
        <form  onSubmit={handleSubmit}>
        <MDBContainer fluid className="py-5 gradient-custom">
        <MDBRow className="d-flex justify-content-center py-5">
          <MDBCol md="7" lg="5" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <MDBRow className="d-flex align-items-center">
                  <MDBCol size="9">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 9012 3457"
                      onChange={handleInputChange}
                      name="creditCardNumber"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </MDBCol>
  
                  <MDBCol size="9">
                    <MDBInput
                      label="Cardholder's Name"
                      id="form2"
                      type="text"
                      placeholder="Cardholder's Name"
                      name="cardholderName"
                    />
                  </MDBCol>
  
                  <MDBCol size="6">
                    <MDBInput
                      label="Expiration"
                      id="form2"
                      type="text"
                      placeholder="MM/YYYY"
                      name="expiration"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="CVV"
                      id="form2"
                      type="text"
                      placeholder="&#9679;&#9679;&#9679;"
                      name="cvv"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBBtn type="submit" color="info" rounded size="lg">
                      <MDBIcon fas icon="arrow-right" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </form>
    );
  }

export default PaymentForm;