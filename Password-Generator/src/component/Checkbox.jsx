import React from 'react'

export const Checkbox = ({title,onChange,state}) => {
    return (
        <div>
          <input
            type="checkbox"
            onChange={onChange}
            checked={state}
          />
          <label> {title}</label>
        </div>
      );
}
