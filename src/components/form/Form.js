import "./index.css"
import React from 'react'

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      // Form is valid, submit it
      console.log("Form is valid, submitting...");
    } else {
      // Form is invalid, display an error message
      console.log("Form is invalid, please fix the errors and try again.");
    }
  };
  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <div className="form__banner">
        <h2>Get in touch</h2>
        <h5>Please complete the form and we will get back to you</h5>
      </div>
      <form>
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" required/>
        <br />
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" required/>
        <br />
        <label htmlFor="phone">Phone*</label>
        <input type="tel" id="phone" pattern="^\+?[0-9]{2,}$" required/>
        <br />
        <button type="submit">Register Now</button>
      </form>
    </div>
  )
}

export default Form