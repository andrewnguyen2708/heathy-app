import React from "react";

export default function Footer() {
  const footerList = [
    {
      id: "f1",
      label: "会員登録",
      path: "#",
    },
    {
      id: "f2",
      label: "運営会社",
      path: "#",
    },
    {
      id: "f3",
      label: "利用規約",
      path: "#",
    },
    {
      id: "f4",
      label: "個人情報の取扱について",
      path: "#",
    },
    {
      id: "f5",
      label: "特定商取引法に基づく表記",
      path: "#",
    },
    {
      id: "f6",
      label: "お問い合わせ",
      path: "#",
    },
  ];

  return (
    <div className="bg-dark500 h-[128px] flex items-center">
      <div className="container mx-auto">
        <ul className="flex flex-row gap-8 justify-start h-auto" >
          {footerList.map(item => (
            <li key={item.id}>
              <a href={item.path} className="text-white">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
