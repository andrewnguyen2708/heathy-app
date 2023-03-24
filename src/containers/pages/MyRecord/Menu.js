import React from "react";

import { ReactComponent as KnifeIcon } from "../../../assets/icons/knife_icon.svg";
import { ReactComponent as CupIcon } from "../../../assets/icons/cup_icon.svg";

export default function Menu() {
  const menus = [
    {
      id: "m1",
      label: "Morning",
      icon: <KnifeIcon />,
    },
    {
      id: "m2",
      label: "Lunch",
      icon: <KnifeIcon />,
    },
    {
      id: "m3",
      label: "Dinner",
      icon: <KnifeIcon />,
    },
    {
      id: "m4",
      label: "Snack",
      icon: <CupIcon />,
    },
  ];

  return (
    <div className="container mx-auto h-[134px] flex justify-center">
      <div className="h-full w-[80%] flex justify-evenly items-center">
        {menus.map((item) => (
          <div
            key={item.id}
            className="h-[134px] w-[116px] bg-gradient-to-tr from-primary300 to-primary400 p-5 flex flex-col justify-center items-center"
            style={{
              clipPath:
                "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
            }}
          >
            {item.icon}
            <p className="text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
