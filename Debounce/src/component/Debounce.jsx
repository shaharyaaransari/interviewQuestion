import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useData } from "../hooks/useData";

export const Debounce = () => {
  const [food, setFood] = useState("");
  
const debounceFood = useDebounce(food,1000);
const {data} = useData(`https://api.frontendeval.com/fake/food/${debounceFood}`,debounceFood)
  const handleFood = (e) => {
    setFood(e.target.value);
  };

  return (
    <div>
      <h3>Debouncing Example.</h3>
      <input
        type="text"
        value={food}
        onChange={handleFood}
        placeholder="Search Food."
      />
      {/* {error && <div>Error: {error.message}</div>} */}
      {data && data.length > 0 && (
        <div className="food-container">
          {data.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
      )}
    </div>
  );
};
