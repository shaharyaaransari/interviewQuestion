import React, { useState } from "react";
import { OtpInput } from "./OtpInput";

export const PhoneNumberOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[0-9]{1,10}$/;
    if (regex.test(+phoneNumber) && phoneNumber.length == 10) {
      alert("Login Sucessfully.");
      setShow(!show);
    } else {
      alert("login unsucessfully");
    }
  };
 const onOtpSubmit = (otp)=>{
        console.log("login sucessfully", otp)
 }
  return (
    <div className="phone_input">
      {!show ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            onChange={(e) => handleChange(e)}
          />
          <button>Login</button>
        </form>
      ) : (
        <>
          <h1>Enter otp sent to {phoneNumber}</h1>
          <OtpInput length={4}  onOtpSubmit={onOtpSubmit}/>
        </>
      )}
    </div>
  );
};
