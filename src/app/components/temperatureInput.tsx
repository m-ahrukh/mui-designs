import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input className="border" value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
