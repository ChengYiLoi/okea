import React from "react";
import {Link} from 'react-router-dom';

export default function Account({updatePage}) {
  let accounts = [
    {
      name: "John Doe",
      address: "221B Baker Street",
      email: "johndoe@email.com",
      creditInfo: {
        num: "1111 1111 1111 1111",
        expiry: { month: "01", year: "20" },
        cvc: "000",
      },
    },
    {
      name: "Jane Doe",
      address: "81 Victoria St, Singapore 188065",
      email: "janedoe@email.com",
      creditInfo: {
        num: "2222 2222 2222 2222",
        expiry: { month: "06", year: "20" },
        cvc: "123",
      },
    },
  ];
  let user = accounts[0];
  return (
    <div id='fill' className='accountWrapper'>
      <Link to={'/'} className='back'>
      <button onClick={() => updatePage('')}>Continue Shopping</button>
      </Link>
     
      <div className="summaryWrapper">
        <h3>Account Summary</h3><br></br>
        <div className="infoWrapper">
          <div className='accountInfo'>
            <span>Name: &nbsp;{user.name}</span>
            <button disabled>Update Name</button>
          </div>
          <hr></hr>
          <div className='accountInfo'>
            <span>Email: &nbsp;{user.email}</span>
            <button disabled>Update email</button>
          </div>
          <hr></hr>
          <div className='accountInfo'>
            <span>Address: &nbsp;{user.address}</span>
            <button disabled>Update Address</button>
          </div>
        </div>
      </div>
    </div>
  );
}
