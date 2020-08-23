import React from "react";

const Message = (props) => {
  const { text, ...otheProps } = props;
  return <div {...otheProps}>Message {text}</div>;
};

export default Message;
