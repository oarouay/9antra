import React, { useState } from 'react';
import '../styles/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContact = (event) => {
    event.preventDefault();
    toast.success('Message sent successfully');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <section id="contact" className="contact">
        <form onSubmit={handleContact}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Contact;
