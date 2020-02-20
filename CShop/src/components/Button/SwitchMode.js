import React from "react";
import SwitchControl from "components/Switch";

const switchMode = props => {
  return (
    <div className="col-md-4">
      <SwitchControl value={props.isActive} onchange={!props.isActive} />
    </div>
  );
};

export default switchMode;
