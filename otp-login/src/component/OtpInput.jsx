import React, { useEffect, useRef, useState } from "react";

export const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpRef = useRef([]);

  useEffect(() => {
    if (otpRef.current[0]) otpRef.current[0].focus();
  }, []);
  const handleClick = (index) => {
       otpRef.current[index].setSelectionRange(1,1)
  };
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combineOtp = newOtp.join("");
    if (combineOtp.length == length) {
      onOtpSubmit(combineOtp);
    }
    if (value && index < length - 1 && otpRef.current[index + 1]) {
      otpRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
   if(e.key ==="Backspace" && !otp[index] && index > 0 && otpRef.current[index-1]){
    otpRef.current[index - 1].focus();
   }


  };
  return (
    <div className="otp-input">
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onClick={(e) => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(input) => (otpRef.current[index] = input)}
          />
        );
      })}
    </div>
  );
};
