import { useState } from "react";

export const Switcher = ({ isToggled, onToggle, className, title }) => {
  const onChange = (e) => {
    console.log("onChange", e);

    onToggle();
  };

  return (
    <div className={`switcher ${className}`}>
      <div
        className={`switcher__slider ${
          isToggled ? "switcher__slider_checked" : ""
        }`}
      />

      <label htmlFor="switcher" className="switcher__label">
        {title}
      </label>

      <input
        type="checkbox"
        id="switcher"
        className="switcher__input"
        checked={isToggled}
        onChange={onChange}
      />
    </div>
  );
};
