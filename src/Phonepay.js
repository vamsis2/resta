import React from 'react';
import "./phonepay.css";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

export default function Image() {
  return (
    <MDBContainer className="py-5" style={{ maxWidth: '10090px' }}>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-xl-block bg-image">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Sample photo" width={660} height={672}  />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                  <div className="justify-content-center align-items-center h-100">
                    <div className="text-center" style={{ marginTop: '-300px' }}>
                      <MDBIcon fas icon="truck text-white" size="3x" />
                      <p className="text-white title-style">My Restaurant delivery</p>
                      <p className="text-white mb-0"></p>

                      <figure className="text-center mb-0">
                        <blockquote className="blockquote text-white">
                          <p className="pb-3">
                            <MDBIcon fas icon="quote-left text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                            <span className="lead font-italic">Everything at your doorstep.</span>
                            <MDBIcon fas icon="quote-right text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="p-md-5 text-black">
                  <MDBTypography tag="h3" className="mb-4 text-uppercase">Delivery Info</MDBTypography>

                  <MDBRow>
                    <MDBCol md="6" className="mb-6">
                      <MDBInput label='' type='text' placeholder='First name' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput label='' type='text' placeholder='Last name' size="lg" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput label='' type='text' placeholder='Address' className="mb-4" size="lg" />

                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput label='' type='text' placeholder='State' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput label='' type='text' placeholder='City' size="lg"  />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput label='' type='text' placeholder="Pin code" className="mb-4" size="lg" />

                  <MDBInput label='' type='text' placeholder='Email' className="mb-4" size="lg" />
                
                  <div className="d-flex justify-content-end pt-3">
                  <MDBInput label='' type='text' placeholder='Apply cuppone' className="mb-4" size="lg"  id='cup'/>
                  </div>
                  
                 
                 
                 
                  <h2 id='pm'>Payment Methods</h2>
           <div> <Link to="https://www.phonepe.com" id='phon'>Phonepay</Link> </div>
           <div>  <Link to="https://myaccount.google.com/payments-and-subscriptions" id='goog'> GooglePay</Link> </div>
           <div>  <Link id='pay'> Paytm</Link> </div>
           <div>   <Link id='cod'>Cash on Delivary</Link> </div>
           <MDBBtn size="lg" className="ms-2" style={{backgroundColor: 'black'}} id='plac'> <Link to="/phonpay" id='ppa'>Place order</Link></MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}