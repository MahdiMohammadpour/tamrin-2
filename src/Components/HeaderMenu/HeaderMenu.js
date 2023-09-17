import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const HeaderMenu = ({ styles }) => {
  const [menuList, setMenuList] = useState([
    {
      title: "بلیط",
      options: ["پرواز داخلی", "پرواز خارجی", "قطار", "اتوبوس"],
    },
    {
      title: "اقامت",
      options: ["هتل", "ویلا و اقامتگاه"],
    },
    {
      title: "تور",
      options: [],
    },
    {
      title: "بیشتر",
      options: ["علی باباپلاس", "مجله علی بابا", "بیمه مسافرتی"],
    },
  ]);

  return (
    <div className={styles}>
      {menuList.map((m, index) => {
        if (index === menuList.length - 1) {
          return (
            <Dropdown title={m.title} options={m.options} lastChild={true} />
          );
        }
        return (
          <Dropdown title={m.title} options={m.options} lastChild={false} />
        );
      })}
    </div>
  );
};

export default HeaderMenu;
