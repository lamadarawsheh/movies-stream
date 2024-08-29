import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
