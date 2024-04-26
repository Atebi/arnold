import React from "react";

const Button = ({ text = "LEARN MORE" }) => {
  return (
    <button className="rounded bg-primary px-5 py-3 text-base font-medium text-white ring-1 ring-sky-300 hover:bg-darkBlue focus:opacity-100 focus:ring-4">
      {text}
    </button>
  );
};

export default Button;
