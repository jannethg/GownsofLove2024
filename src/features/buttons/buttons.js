import { useState } from "react";

export const MoreButton = () => {
  const [toggled, setToggled] = useState(false);
  const [warning, setWarning] = useState(true);

  return (
    <button
      onClick={() => setToggled(!toggled)}
      onMouseEnter={() => setWarning(false)}
      onMouseLeave={() => setWarning(true)}
      className="btn-gol"
      style={{
        backgroundColor: toggled ? "green" : "purple",
        backgroundColor: warning ? "var(--gol-primary)" : "green",
      }}
    >
      TELL ME MORE
    </button>
  );
};
