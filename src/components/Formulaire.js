import React from 'react'

function Input({label, placeholder, id, type="text"}) {
  return (
    <>
        <div className="form_box">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder}/>
        </div>
    </>
  )
}

function Textarea({label, placeholder, id, maxLength,}) {
  return (
    <>
        <div className="form_box">
            <label htmlFor={id}>{label}</label>
            <textarea maxLength={maxLength} id={id} placeholder={placeholder}/>
        </div>
    </>
  )
}

function Button({value, id, type="button"}) {
  return (
    <>
        <div className="form_box">
            <button id={id} type={type}>{value}</button>
        </div>
    </>
  )
}

export {Input, Button, Textarea}
