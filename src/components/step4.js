import React from "react";
import "./styles/step1.css";

const Step4 = ({ plan, addOns, isYearly, onChangePlan, onConfirm, prevStep, activeStep }) => {
  const total = plan.price[isYearly ? "yearly" : "monthly"] +
    addOns.reduce((acc, addon) => acc + addon.price[isYearly ? "yearly" : "monthly"], 0);

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

      <div className="form-container">
        <h2>Finishing up</h2>
        <p>Double-check everything before confirming.</p>

        <div className="summary-box">
          {/* Plan Summary */}
          <div className="plan-summary">
            <div className="plan-info">
              <span className="plan-name">{plan.name} ({isYearly ? "Yearly" : "Monthly"})</span>
              <a role="button" className="change-plan" onClick={(e) => { e.preventDefault(); onChangePlan(); }}>Change</a>
            </div>
            <span className="plan-price">${plan.price[isYearly ? "yearly" : "monthly"]}/{isYearly ? "yr" : "mo"}</span>
          </div>

          {/* Add-ons */}
          <div className="addons-list">
            {addOns.map((addon) => (
              <div key={addon.id} className="addon-item-sel">
                <span>{addon.name}</span>
                <span className="addon-price">+${addon.price[isYearly ? "yearly" : "monthly"]}/{isYearly ? "yr" : "mo"}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          
        </div>
        <div className="total-summary">
            <span>Total ({isYearly ? "Yearly" : "Monthly"})</span>
            <span className="total-price">${total}/{isYearly ? "yr" : "mo"}</span>
          </div>
        {/* Buttons */}
        <div className="button-group">
          <button className="back-btn" onClick={prevStep}>Go Back</button>
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
        </div>

        <div class="mobile-nav2">
          <button class="back-btn" onClick={prevStep}>Go Back</button>
          <button class="confirm-btn" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
