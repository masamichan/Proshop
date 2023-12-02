import React from "react";
import { Alert } from "module";

function Message({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

export default Message;
