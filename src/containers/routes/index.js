import { ReactComponent as NaviIcon } from "../../assets/icons/memo_icon.svg";
import { ReactComponent as ChallengeIcon } from "../../assets/icons/challenge_icon.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info_icon.svg";
import MyReocord from "../pages/MyRecord";
import Notice from "../pages/Notice";
import Challenge from "../pages/Challenge";

const routes = [
  {
    id: "m1",
    label: "自分の記録",
    icon: <NaviIcon />,
    path: "/",
    element: <MyReocord />,
  },
  {
    id: "m2",
    label: "チャレンジ",
    icon: <ChallengeIcon />,
    path: "/challenge",
    element: <Challenge />,
  },
  {
    id: "m3",
    label: "お知らせ",
    icon: <InfoIcon />,
    path: "/notice",
    element: <Notice />,
  },
];

export { routes };
