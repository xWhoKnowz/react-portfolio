import { useState } from "react";
import { validEmail } from "../utils/email";

export default function Contact() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (event) =>{
    const {target} = event
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue)
    } else if (inputType === 'email') {
      setEmail(inputValue)
    } else {
      setMessage(inputValue)
    }
  }

    function formSubmit(event) {
    event.preventDefault();
    
    if (!name) {
      setError('Please enter your name.')
      return;
    } else if (!validEmail(email)) {
      setError('Please enter a valid email.')
      return;
    } else if (!message) {
      setError('Please enter a valid message.')
      return;
    }


    setName('');
    setEmail('');
    setMessage('')
  }

  return (
    <main>
    <form className="contact" onSubmit={formSubmit}>
      <div className="mb-3">
        <label for="name" className="form-label">
          Name:
        </label>
        <input
          className="form-control"
          onChange={handleInputChange}
          name="name"
          value={name}
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address:
        </label>
        <input
          className="form-control"
          onChange={handleInputChange}
          name="email"
          value={email}
          type="email"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          name="message"
          value={message}
          onChange={handleInputChange}
          rows="12"
        ></textarea>
        <section className="d-flex justify-content-between">
        <button className="btn" type="submit">Submit</button>
        {error && (
      <p className="error">
        {error}
      </p>
    )}
    </section>
      </div>
    </form>
    </main>
  );
}
