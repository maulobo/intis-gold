"use client";
import "./profits.css";
export default function Btn({ info, link }) {
  return (
    <div className="profits-button-container">
      <div className="profits-button-outer">
        <button
          onClick={() => (window.location.href = link)}
          className="profits-button"
        >
          {info}
        </button>
      </div>
    </div>
  );
}
