import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({ name: "Arcade", price: { monthly: 9, yearly: 90 } });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const nextStep = () => {
    if (activeStep < 5) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  return (
    <div>
      {activeStep === 1 && <Step1 nextStep={nextStep} activeStep={activeStep} formData={formData} setFormData={setFormData} />}
      {activeStep === 2 && (
        <Step2 
          nextStep={nextStep} 
          prevStep={prevStep} 
          isYearly={isYearly} 
          setIsYearly={setIsYearly} 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
          activeStep={activeStep}
        />
      )}
      {activeStep === 3 && (
        <Step3 
          nextStep={nextStep} 
          prevStep={prevStep} 
          selectedAddOns={selectedAddOns} 
          setSelectedAddOns={setSelectedAddOns} 
          isYearly={isYearly} 
          activeStep={activeStep}
        />
      )}
      {activeStep === 4 && (
        <Step4
          prevStep={prevStep}
          onConfirm={nextStep} 
          plan={selectedPlan}
          addOns={selectedAddOns}
          isYearly={isYearly}
          activeStep={activeStep}
          onChangePlan={() => setActiveStep(2)}
        />
      )}
      {activeStep === 5 && <Step5 />}
    </div>
  );
};

export default MultiStepForm;
