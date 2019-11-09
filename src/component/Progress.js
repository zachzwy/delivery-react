import React from "react";

export default function Progress({ width, classOfProgress }) {
  return (
    <div className={`progress ${classOfProgress}`}>
      <div className="bar" style={{ width: `${width * 100}%` }} />
    </div>
  );
}
