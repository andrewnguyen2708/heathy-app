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
    <div className="container mx-auto ">
      <div className="flex flex-row justify-between">
        <div className="h-auto w-10">
          <img alt="logo" src={logo} className="inset-0" />
        </div>
        <div className="min-w-max">
          <ul className="flex flex-row">
            {menus.map((item) => (
              <li key={item.id}>
                <div>
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
