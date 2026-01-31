import React, { useState, useImperativeHandle, forwardRef } from 'react';

const CaptchaComponent = forwardRef(({ onCaptchaChange }, ref) => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to generate captcha
  const generateCaptcha = () => {
    let uniquechar = '';
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
      uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
    }

    setCaptcha(uniquechar);  // Set the CAPTCHA value
    setUserInput('');         // Clear the user input
    setErrorMessage('');      // Clear any previous error messages
  };

  // Function to validate the captcha
  const validateCaptcha = () => {
    if (userInput !== captcha) {
      setErrorMessage('Incorrect CAPTCHA. Please try again.');
    } else {
      setErrorMessage('');
      onCaptchaChange(captcha); // Notify the parent about the correct captcha
    }
  };

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    reset: () => {
      generateCaptcha(); // Reset CAPTCHA by generating a new one
    },
  }));

  // Initially generate CAPTCHA when the component mounts
  React.useEffect(() => {
    generateCaptcha();  // Generate CAPTCHA on initial render
  }, []);

  // Allow only alphanumeric characters (letters and numbers) in user input
  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z0-9]*$/; // Only allow letters and numbers

    // If the value matches the regex, update the userInput state
    if (regex.test(value) || value === '') {
      setUserInput(value);
    }
  };

  return (
    <div className="captcha-container">
      <input
        type="text"
        className="captcha-input"
        value={userInput}
        onChange={handleInputChange} // Use the new input handler
        placeholder="Enter CAPTCHA"
        onBlur={validateCaptcha} // Validate CAPTCHA when the user leaves the input field
      />
      <div className="captcha-display">
        {/* Display the CAPTCHA */}
        <span className="captcha-text ms-2">{captcha}</span>
        
        {/* Refresh button for CAPTCHA */}
        <button type="button" className="captcha-refresh-btn" onClick={generateCaptcha}>
          <img
            src="./images/refresh.png" // Replace with your refresh icon
            alt="refresh-icon"
            className="refresh-icon"
          />
        </button>
      </div>

      {/* Show error message if the CAPTCHA is incorrect */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
});

export default CaptchaComponent;
