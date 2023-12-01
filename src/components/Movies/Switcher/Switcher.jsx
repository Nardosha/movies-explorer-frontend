import { useState } from "react";

export const Switcher = ({ title, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`switcher ${className}`} onClick={onChange}>
      <div
        className={`switcher__slider ${
          isChecked && "switcher__slider_checked"
        }`}
      />
      <label htmlFor="switcher" className="switcher__label">
        {title}
      </label>
      <input type="checkbox" id="switcher" className="switcher__input" />
    </div>
  );
};
