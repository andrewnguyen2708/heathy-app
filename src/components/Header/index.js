import React from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu_icon.svg";
import { routes } from "../../containers/routes";

export default function Header() {
  return (
    <div className="h-16 bg-dark500 flex items-center z-20">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="h-12">
          <img alt="logo" src={logo} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-min">
          <ul className="grid gap-8 grid-cols-4">
            {routes.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="flex flex-row items-center gap-2"
                >
                  {item.icon}
                  <span className="text-white">{item.label}</span>
                </a>
              </li>
            ))}
            <li>
              <MenuIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
