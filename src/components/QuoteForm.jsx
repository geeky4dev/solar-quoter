import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    title: "New Solar Quote Request",
    name: '',
    email: '',
    location: '',
    consumption: '',
    typeRoof: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2yrlgpa',      // ✅ Tu Service ID real
      'template_rp5b10q',     // ✅ Tu Template ID real
      formData,               // 👈 Ahora con claves correctas
      'UMF0-1LgsdahPf_s2' // ✅ Tu Public Key real
    )
    .then(() => {
      setSent(true);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('There was an issue sending the request. Please try again.');
    });
  };

  return (
    <div className="container mt-5">
      <h2>New Solar Quote Request</h2>
      {sent ? (
        <div className="alert alert-success">Request sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Monthly Consumption (kWh)</label>
            <input
              type="number"
              className="form-control"
              name="consumption"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Roof Type</label>
            <select
              className="form-select"
              name="typeRoof"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Inclined">Inclined</option>
              <option value="Flat">Flat</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;



