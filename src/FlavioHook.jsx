import React from "react";

const FlavioHook = ({ ...props }) => {
  const { ...prop } = props;
  return (
    <section style={{padding: 43}}>
      <h1>Hello Flavio Hook Component!!!</h1>
      {prop.subtitle ? <h5>{prop.subtitle}</h5> : null}
    </section>
  );
};

export default FlavioHook;
