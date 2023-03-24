import React from "react";

import Meal1 from '../../../assets/images/meal_1.jpg'

export default function Gallery() {
  return (
    <div className="container h-[480px]">
      <div className="grid">
        <div
          className="h-[234px] w-[234px] bg-cover bg-origin-content bg-no-repeat bg-center relative"
          style={{ backgroundImage: `url(${Meal1})` }}
        >
            <div className="absolute bottom-0 left-0 bg-primary300  p-1"><p className="text-white">05.21.Morning</p></div>
        </div>
      </div>
    </div>
  );
}
