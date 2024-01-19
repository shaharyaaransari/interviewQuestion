import React from "react";

export const StrengthChecker = ({ password = "" }) => {
  const getPasswordGenerator = () => {
    if (password.length < 1) {
      return "";
    } else if (password.length < 4) {
      return "Very Weak.";
    } else if (password.length < 8) {
      return "Very Weak.";
    } else if (password.length < 12) {
      return "Meduim.";
    } else if (password.length < 16) {
      return "Strong.";
    } else {
      return "Very Strong.";
    }
  };
 const passwordStrength = getPasswordGenerator()
     if(!passwordStrength) return <React.Fragment/>

  return <div className="pass-strength">
       Strength : <span style={{fontWeight:"bold"}}>{passwordStrength}</span>

  </div>;
};
