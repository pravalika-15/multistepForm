import React from "react";
import "./styles/step1.css";

const Step3 = ({ nextStep, prevStep, selectedAddOns, setSelectedAddOns, isYearly, activeStep }) => {
  const addOns = [
    { id: "online-service", name: "Online service", description: "Access to multiplayer games", price: { monthly: 1, yearly: 10 } },
    { id: "larger-storage", name: "Larger storage", description: "Extra 1TB of cloud save", price: { monthly: 2, yearly: 20 } },
    { id: "customizable-profile", name: "Customizable profile", description: "Custom theme on your profile", price: { monthly: 2, yearly: 20 } },
  ];

  const handleToggle = (addOn) => {
    const exists = selectedAddOns.find((item) => item.id === addOn.id);
    if (exists) {
      setSelectedAddOns(selectedAddOns.filter((item) => item.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
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

      {/* Form Container */}
      <div className="form-container">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        {addOns.map((addOn) => (
          <label key={addOn.id} className={`addon-item ${selectedAddOns.some((item) => item.id === addOn.id) ? "selected" : ""}`}>
            <input 
              type="checkbox"
              checked={selectedAddOns.some((item) => item.id === addOn.id)}
              onChange={() => handleToggle(addOn)}
            />
            <div className="addon-details">
              <h4>{addOn.name}</h4>
              <p>{addOn.description}</p>
            </div>
            <span className="addon-price">
              {isYearly ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
            </span>
          </label>
        ))}

        

         <div className="button-group">
          <button className="back-btn" onClick={prevStep}>Go Back</button>
          <button className="confirm-btn" onClick={nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
