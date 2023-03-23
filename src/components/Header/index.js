import React from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as NaviIcon } from "../../assets/icons/navi_icon.svg";
import { ReactComponent as ChallengeIcon } from "../../assets/icons/challenge_icon.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info_icon.svg";

export default function Header() {
  const menus = [
    {
      id: "m1",
      label: "自分の記録",
      icon: <NaviIcon />,
    },
    {
      id: "m2",
      label: "チャレンジ",
      icon: <ChallengeIcon />,
    },
    {
      id: "m3",
      label: "お知らせ",
      icon: <InfoIcon />,
    },
  ];

  return (
    <div className="bg-dark500">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="h-10 my-auto">
          <img alt="logo" src={logo} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-min">
          <ul className="grid gap-4 grid-cols-3">
            {menus.map((item) => (
              <li key={item.id}>
                <div className="flex flex-row align-middle">
                  {item.icon}
                  <p className="text-white">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
