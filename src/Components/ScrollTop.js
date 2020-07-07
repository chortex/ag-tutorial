import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderRadius: '2px',
            opacity: ".3",
            outline: "none"
          }}
        />
      </div>
    );
  }
}