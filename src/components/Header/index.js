import React from "react";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as NaviIcon } from "../../assets/icons/navi_memo.svg";

export default function Header() {
  return (
    <div>
      <div>
        <img alt="logo" src={Logo} />
      </div>
      <div>
        <ul>
          <li>
            <div>
              <NaviIcon />
              <p>自分の記録</p>
            </div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
