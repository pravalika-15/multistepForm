import React from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from '../assets/images/icon-pro.svg'
import "./styles/step1.css";

const Step2 = ({ nextStep, prevStep, isYearly, setIsYearly, selectedPlan, setSelectedPlan, activeStep }) => {
  const plans = [
    { name: "Arcade", price: { monthly: 9, yearly: 90 }, icon: arcadeIcon},
    { name: "Advanced", price: { monthly: 12, yearly: 120 }, icon: advancedIcon},
    { name: "Pro", price: { monthly: 15, yearly: 150 }, icon: proIcon},
  ];

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
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="plan-options">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${selectedPlan.name === plan.name ? "selected" : ""}`}
              onClick={() => setSelectedPlan(plan)}
            >
              <img src={plan.icon} alt={`${plan.name} icon`} className="plan-icon" />
              <div className="plan-info">
                <h3>{plan.name}</h3>
                <p>{isYearly ? `$${plan.price.yearly}/yr` : `$${plan.price.monthly}/mo`}</p>
                {isYearly && <span className="free-months">2 months free</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="billing-toggle">
          <span className={!isYearly ? "active" : ""}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="slider round"></span>
          </label>
          <span className={isYearly ? "active" : ""}>Yearly</span>
        </div>

        <div className="button-group">
          <button className="back-btn" onClick={prevStep}>Go Back</button>
          <button className="confirm-btn" onClick={nextStep}>Next Step</button>
        </div>

        <div class="mobile-nav2">
          <button class="back-btn" onClick={prevStep}>Go Back</button>
          <button class="confirm-btn" onClick={nextStep} >Next Step</button>
        </div>

      </div>
    </div>
  );
};

export default Step2;
