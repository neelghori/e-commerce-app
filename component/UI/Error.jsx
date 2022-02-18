import React from "react";

const Error = (props) => {
  return (
    <div>
      <div className="alert">{props.children}</div>
    </div>
  );
};

export default Error;
