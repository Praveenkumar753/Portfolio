import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    // You can use the 'name', 'email', and 'message' state values
  };

  return (
    <main>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form onSubmit={handleSubmit} className="contact__form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="contact__input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="contact__input"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              className="contact__input"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="submit" className="contact__button button" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
