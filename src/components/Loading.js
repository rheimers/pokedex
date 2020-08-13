import React from "react";
import "./Loading.css";

export default function Loading({ children }) {
  return <div className="loadingScreen">{children}</div>;
}
