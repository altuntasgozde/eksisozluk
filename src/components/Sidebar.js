import React from "react";

export const Sidebar = (props) => {
  return (
    <div>
  
        {props.data.map((item) => (
          <p key={item.id}>
            <a href="#" onClick={() => props.GetTitle(item.id)}>{item.attributes.title}</a>
          </p>
        ))}
    
    </div>
  );
};
