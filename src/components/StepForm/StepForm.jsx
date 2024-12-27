import React, { useState } from 'react';
import {useNavigate,useLocation} from 'react-router'
import { Form, Button, ProgressBar, Card } from 'react-bootstrap';
import Text from '../UI/Text'
import '../../assets/scss/component/questionaire/stepForm.scss'
import OTPModal from '../../components/Auth/OTPModal';
import useAOS from '../../utils/hooks/useAOS';
import useModal from '../../utils/hooks/useModal'

const StepForm = () => {
  const{showModal,handleShowModal,handleCloseModal} =useModal();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {},
  });

  const totalSteps = 6;
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (step, data) => {
    setFormData(prevData => ({
      ...prevData,
      [step]: data,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

    const prevStep = () => {
      if (currentStep === 0) {
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate(-1);
        }
      } else {
        setCurrentStep(currentStep - 1);
      }
    };

  // const skipStep = () => {
  //   if (currentStep < totalSteps - 1) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  const skipStep = () => {
    const stepKey = `step${currentStep + 1}`;
    setFormData(prevData => ({
      ...prevData,
      [stepKey]: {}
    }));
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // const progress = (currentStep / (totalSteps - 1)) * 100;

  const progress = ((currentStep + 1) / totalSteps) * 100;

  const viewFormData = () => {
    console.log('Form Data:', formData);
  };

  return (
    <>
    <Card className='step-form-main'>
      <div className="step-top-bar">
              <Button variant="step-back" onClick={prevStep}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 31" fill="none">
            <path d="M16.375 2.75L3.625 15.5M3.625 15.5L16.375 28.25M3.625 15.5L33.375 15.5" stroke="black" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Button>
        {/* <ProgressBar now={progress} label={`${Math.round(progress)}%`} /> */}
        <ProgressBar now={progress} />
        <Text as='small'><Text as='span'>{currentStep + 1}</Text>/{totalSteps}</Text>
      </div>

      <Text as='h6' className='form-head'>Investment Suitability Questionaire</Text>

      <div className="step-form-area">
        {currentStep === 0 && <Step1 formData={formData.step1} handleInputChange={(data) => handleInputChange('step1', data)} />}
        {currentStep === 1 && <Step2 formData={formData.step2} handleInputChange={(data) => handleInputChange('step2', data)} />}
        {currentStep === 2 && <Step3 formData={formData.step3} handleInputChange={(data) => handleInputChange('step3', data)} />}
        {currentStep === 3 && <Step4 formData={formData.step4} handleInputChange={(data) => handleInputChange('step4', data)} />}
        {currentStep === 4 && <Step5 formData={formData.step5} handleInputChange={(data) => handleInputChange('step5', data)} />}
        {currentStep === 5 && <Step6 formData={formData.step6} handleInputChange={(data) => handleInputChange('step6', data)} />}
      </div>

      <div className="step-btm-nav">
        {currentStep < totalSteps - 1 && <Button variant="next" onClick={nextStep}>save & continue</Button>}
        {currentStep < totalSteps - 1 && <Button variant="skip" onClick={skipStep}>skip</Button>}
        {currentStep === totalSteps - 1 && <Button variant="send" onClick={handleShowModal}>Submit</Button>}
        {/* <Button variant="info" onClick={viewFormData}>View Form Data</Button> */}
      </div>
    </Card>
    <OTPModal showModal={showModal} handleCloseModal={handleCloseModal}/>
    </>
  );
};

const Step1 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Capital Preservation:',
      info: '(brokerage accounts) I have the preference for the relative safety of my invested capital over return on investments; this includes investing in products such as CD, TBILI and money markets. I am willing to accede the possibility of achieving minimal investment returns in exchange for minimum volatility and max volatility.'
    },
    {
      id: 2,
      label: 'Income:',
      info: '(brokerage accounts) I have the preference for the relative safety of my invested capital over return on investments; this includes investing in products such as CD, TBILI and money markets. I am willing to accede the possibility of achieving minimal investment returns in exchange for minimum volatility and max volatility.'
    },
    {
      id: 3,
      label: 'Moderate Growth:',
      info: '(brokerage accounts) I have the preference for the relative safety of my invested capital over return on investments; this includes investing in products such as CD, TBILI and money markets. I am willing to accede the possibility of achieving minimal investment returns in exchange for minimum volatility and max volatility.'
    },
    {
      id: 4,
      label: 'Growth:',
      info: '(brokerage accounts) I have the preference for the relative safety of my invested capital over return on investments; this includes investing in products such as CD, TBILI and money markets. I am willing to accede the possibility of achieving minimal investment returns in exchange for minimum volatility and max volatility.'
    },
    {
      id: 5,
      label: 'Speculation'
    },
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'>1. Investment Objective</Text>
      <Text as='h6'>What best describes your investment objective? </Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};

const Step2 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Low',
      info: 'I am willing to accept only minimal changes in the value of my portfolio. I understand that my investment returns may be very low because I value reduced risk of principal loss.( can only be selected with an investment objective of Capital preservation, income of  moderate growth).'
    },
    {
      id: 2,
      label: 'Moderate',
      info: 'I am willing to accept possible principal loss if there is a potential for a moderate increase in the value of my portfolio over time. (Can only be selected with an investment objective of Income, moderate growth or growth)'
    },
    {
      id: 3,
      label: 'High'
    }
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'>2. Risk Tolerance</Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};

const Step3 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Not likely',
      info: 'Can only be selected with an investment objective of Capital preservation, income of  moderate growth).'
    },
    {
      id: 2,
      label: 'Likely',
      info: 'Can only be selected with an investment objective of Income, moderate growth or growth).'
    },
    {
      id: 3,
      label: 'Very Likely',
      info: '(brokerage accounts) I have the preference for the relative safety of my invested capital over return on investments; this includes investing in products such as CD, TBILI and money markets. I am willing to accede the possibility of achieving minimal investment returns in exchange for minimum volatility and max volatility.'
    }
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'>3. How likely would you be able to tolerate the value of your account changing +/- 20% over three years.</Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};

const Step4 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Sell All'
    },
    {
      id: 2,
      label: 'Sell most'
    },
    {
      id: 3,
      label: 'Sell nothing',
      info: 'Cannot be selected with an investment Objective of capital preservation'
    },
    {
      id: 4,
      label: 'Buy more'
    }
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'> 4. What would you do If the value of your investment dropped by 20%? </Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};

const Step5 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Less than 1 year '
    },
    {
      id: 2,
      label: '1-3 years'
    },
    {
      id: 3,
      label: '3-5 years',
    },
    {
      id: 4,
      label: '5-10 years'
    },
    {
      id: 5,
      label: 'Greater than 10 years'
    },
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'>5. Investment Horizon</Text>
      <Text as='h6'>How long do you plan to invest this money to achieve your financial goal(s)? </Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};

const Step6 = ({ formData, handleInputChange }) => {
  const options = [
    {
      id: 1,
      label: 'Less than 3 years (short term)'
    },
    {
      id: 2,
      label: '3-10 years (medium term)'
    },
    {
      id: 3,
      label: 'Greater than 10 years (long term)'
    }
  ];

  const handleCheckboxChange = (option) => {
    const updatedData = { ...formData, [option]: !formData[option] };
    handleInputChange(updatedData);
  };

  useAOS();

  return (
    <Form data-aos="fade-in">
      <Text as='h5'>6. Liquidity Needs</Text>
      <Text as='h6'>When will you need to take withdrawals from this account exceeding 10%?</Text>
      {options.map(option => (
        <Form.Check
          key={option.id}
          type="checkbox"
          id={`check-${option.id}`}
          label={
            <>
              {option.label} <small className="sm-txt">{option.info}</small>
            </>
          }
          checked={formData[option.label] || false}
          onChange={() => handleCheckboxChange(option.label)}
        />
      ))}
    </Form>
  );
};


export default StepForm;