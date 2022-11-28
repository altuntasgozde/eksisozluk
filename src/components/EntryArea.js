import React from "react";

export const EntryArea = (props) => {
  return (
    <div>
      <p>{props.choosenTitle[0].attributes.detail}</p>
    </div>
  );
};
