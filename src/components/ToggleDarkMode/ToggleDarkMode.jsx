import React from "react";
import "./ToggleDarkMode.css";
import { useStore } from "../../store";

const ToggleDarkMode = () => {
  const { isDark, setIsDark } = useStore();
  return (
    <label class="ui-switch">
      <input
        type="checkbox"
        onChange={() => setIsDark(!isDark)}
        checked={isDark}
      />
      <div class="slider">
        <div class="circle"></div>
      </div>
    </label>
  );
};

export default ToggleDarkMode;
