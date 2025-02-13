import React, { useState } from "react";
import "./styles/step1.css";

const Step1 = ({ activeStep, nextStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Update parent state

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
    }

    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: value.trim() === "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      return;
    }
    if (!formData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: true }));
      return;
    }
    nextStep();
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          {[1, 2, 3, 4].map((step) => (
            <li key={step} className={activeStep === step ? "active" : ""}>
              <span className={`step-number ${activeStep === step ? "active-step" : ""}`}>{step}</span>
              <div className="step-text">
                <span className="step-label">Step {step}</span>
                <span className="step-title">
                  {step === 1 && "YOUR INFO"}
                  {step === 2 && "SELECT PLAN"}
                  {step === 3 && "ADD-ONS"}
                  {step === 4 && "SUMMARY"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="form-container">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name} // Persisted value
            onChange={handleChange}
            placeholder="Vanessa Mint"
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email} // Persisted value
            onChange={handleChange}
            placeholder="vanessamint@"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">Invalid email</span>}

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone} // Persisted value
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <span className="error-text">This field is required</span>}

          <div className="button-container">
          <div></div>
            <button type="submit" className="next-step">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
