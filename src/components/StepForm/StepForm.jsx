import React, { useState } from 'react';
import { Form, Button, ProgressBar, Container, Row, Col } from 'react-bootstrap';

// Step Form Component
const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0); // Current step index
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  }); // Store data for each step

  const totalSteps = 4; // Total steps in the form

  // Handle form data change for each step
  const handleInputChange = (step, data) => {
    setFormData(prevData => ({
      ...prevData,
      [step]: data,
    }));
  };

  // Function to go to next step and save data
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to go to previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Function to skip to the next step without saving data
  const skipStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Progress bar calculation
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <Container className="step-form mt-5">
      <Row>
        <Col>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
          <span>Step {currentStep + 1} of {totalSteps}</span>
        </Col>
      </Row>
      
      <Row>
        <Col>
          {/* Step Content */}
          {currentStep === 0 && <Step1 formData={formData.step1} handleInputChange={(data) => handleInputChange('step1', data)} />}
          {currentStep === 1 && <Step2 formData={formData.step2} handleInputChange={(data) => handleInputChange('step2', data)} />}
          {currentStep === 2 && <Step3 formData={formData.step3} handleInputChange={(data) => handleInputChange('step3', data)} />}
          {currentStep === 3 && <Step4 formData={formData.step4} handleInputChange={(data) => handleInputChange('step4', data)} />}
        </Col>
      </Row>

      {/* Navigation Buttons */}
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          {currentStep > 0 && <Button variant="secondary" onClick={prevStep}>Back</Button>}
          {currentStep < totalSteps - 1 && <Button variant="primary" onClick={nextStep}>Next</Button>}
          {currentStep < totalSteps - 1 && <Button variant="link" onClick={skipStep}>Skip</Button>}
          {currentStep === totalSteps - 1 && <Button variant="success" onClick={() => alert('Form Submitted')}>Submit</Button>}
        </Col>
      </Row>

      {/* Display Current Step */}
      <Row>
      </Row>
    </Container>
  );
};

// Example Step Components (React Bootstrap Form)
const Step1 = ({ formData, handleInputChange }) => (
  <Form>
    <Form.Group controlId="formName">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        value={formData.name || ''}
        onChange={(e) => handleInputChange({ ...formData, name: e.target.value })}
      />
    </Form.Group>
  </Form>
);

const Step2 = ({ formData, handleInputChange }) => (
  <Form>
    <Form.Group controlId="formEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter your email"
        value={formData.email || ''}
        onChange={(e) => handleInputChange({ ...formData, email: e.target.value })}
      />
    </Form.Group>
  </Form>
);

const Step3 = ({ formData, handleInputChange }) => (
  <Form>
    <Form.Group controlId="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your address"
        value={formData.address || ''}
        onChange={(e) => handleInputChange({ ...formData, address: e.target.value })}
      />
    </Form.Group>
  </Form>
);

const Step4 = ({ formData, handleInputChange }) => (
  <div>
    <h3>Review Your Information</h3>
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Address:</strong> {formData.address}</p>
  </div>
);

export default StepForm;
