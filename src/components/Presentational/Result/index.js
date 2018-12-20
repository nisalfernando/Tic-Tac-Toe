import React from "react";

import "./index.css";

export default function Result({ message, modalState }) {
  return <dialog className="result" open={modalState} />;
}
