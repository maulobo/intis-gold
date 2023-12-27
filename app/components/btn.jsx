"use client";
import Link from "next/link";
import "./profits.css";
export default function Btn({ info, href, down = "" }) {
  return (
    <div className="profits-button-container">
      <div className="profits-button-outer">
        <a href={href} download={down} className="profits-button">
          {info}
        </a>
      </div>
    </div>
  );
}
