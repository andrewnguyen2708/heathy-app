import React from "react";
import heroImage from "../../../assets/images/hero_left.jpg";

export default function MyReocord() {
  return (
    <div className="hero h-[316px]">
      <div before="" className="h-full flex items-center">
        <img alt="hero"  src={heroImage} className="h-auto w-[540px] object-cover z-[-10]" />
      </div>
      <div></div>
    </div>
  );
}
