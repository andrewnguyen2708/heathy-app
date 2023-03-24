import React from 'react'

import heroImage from "../../../assets/images/hero_left.jpg";


export default function Hero() {
  return (
    <div className="hero h-[316px] w-full flex justify-between gap-0">
      <div
        className="h-full w-[40%] bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="h-full w-full flex justify-center items-center">
          <div className="h-[181px] w-[181px] rounded-full border-2 border-white border-l-transparent">
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-white">
                05/21 <span className="text-3xl">75%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] bg-dark600"></div>
    </div>
  )
}
