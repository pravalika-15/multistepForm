import React from "react";
import "./styles/step1.css";
import ThankyouIcon from "../assets/images/icon-thank-you.svg";

const Step5 = ({ activeStep }) => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          {[1, 2, 3, 4].map((step) => (
            <li key={step} className={activeStep-1 === step ? "active" : ""}>
              <span className={`step-number ${activeStep-1 === step ? "active-step" : ""}`}>{step}</span>
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

      {/* Thank You Message */}
      <div className="thank-you-container">
        <img src={ThankyouIcon} alt="Thank You" className="thank-you-icon" />
        <h2 className="thank-you-title">Thank you!</h2>
        <p className="thank-you-text">
          Thanks for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at <strong>support@loremgaming.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default Step5;
