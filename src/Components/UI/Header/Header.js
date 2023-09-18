import { BiUserCircle, BiSolidPlane } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import logo from "../../../Resources/images/logo.gif";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = () => {
  return (
    <div
      className={
        "min-h-[64px] w-full flex text-sm justify-center items-center shadow font-sans text-gray-500 font-medium text-[16px] "
      }
      
    >
      <div className="flex ml-[20%] px-[2%] cursor-pointer">
        <img src={logo} className="w-36" />
        <HeaderMenu styles="flex mr-[7%] pr-[2%] items-center"/>
      </div>
      <div className="flex pl-[1%]">
        <div className="flex hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <AiOutlineQuestionCircle className="text-xl ml-1" />
          <p>مرکز پشتیبانی آنلاین</p>
        </div>
        <div className="flex mr-4 hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <BiSolidPlane className="text-xl ml-1" />
          <p>سفرهای من</p>
        </div>
        <div className="flex mr-4 hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <BiUserCircle className="text-xl ml-1" />
          <p>ورود یا ثبت نام</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
