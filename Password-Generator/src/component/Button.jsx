import React from 'react'

export const Button = ({onclick,text,classCustom}) => {
  return (
    <button className={classCustom} onClick={onclick}>{text}</button>
  )
}
