import React from "react";

const FlavioHook = ({ ...props }) => {
  const { ...prop } = props;
  return (
    <div>
      <h1>Hello Flavio Hook Component</h1>
      {prop.subtitle ? <h5>{prop.subtitle}</h5> : null}
    </div>
  );
};

export default FlavioHook;
