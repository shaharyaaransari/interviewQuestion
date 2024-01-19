import { useState } from "react";

import "./App.css";
import { usePasswordGenerator } from "./hooks/use-password-generator";
import { StrengthChecker } from "./component/StrengthChecker";
import { Button } from "./component/Button";
import { Checkbox } from "./component/Checkbox";

function App() {
  const [checkboxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Number Letters", state: false },
    { title: "Include Symbols Letters", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(4);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  const handleCheckBoxChange = (i) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[i].state = !updatedCheckbox[i].state;
    setCheckBoxData(updatedCheckbox);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="App">
      {password && (
        <div className="header">
          <div className="title">{password}</div>

          <Button
            onclick={handleCopy}
            classCustom={"copybtn"}
            text={copied ? "copied" : "copy"}
          />
        </div>
      )}

      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          max="20"
        />
      </div>
      <div>
        <div className="checkbox">
          {checkboxData.map((el, index) => {
            return (
              <Checkbox
                key={index}
                onChange={() => handleCheckBoxChange(index)}
                title={el.title}
                state={el.state}
              />
            );
          })}
          <StrengthChecker password={password} />
          {errorMessage && <div className="erroMessage">{errorMessage}</div>}
        </div>

        <Button
          classCustom="gerneratebtn"
          text="Generate password"
          onclick={() => generatePassword(length, checkboxData)}
        />
      </div>
    </div>
  );
}

export default App;
