import { useState } from "react";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");     
  const [errorMessage, setErrorMessage] = useState("");    

  const generatePassword = (length, checkboxdata) => {
    const checkboxOption = checkboxdata.filter((el) => el.state);
    let charset = "";
    let generatedPasswords = '';
 console.log(checkboxOption)
    if (checkboxOption.length === 0) {
      setErrorMessage("Please Select below option");
      setPassword("");
     return
    }

    checkboxOption.forEach(option => {
      switch(option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Number Letters":
          charset += "1234567890";
          break;
        case "Include Symbols Letters":
          charset += "!@$%^&*";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      generatedPasswords += charset[randomIndex];
    }

    setPassword(generatedPasswords);
    setErrorMessage("")
  };

  return { password, errorMessage, generatePassword };
};
