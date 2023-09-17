import Acheivment from "../Acheivment/Acheivment";
import FooterNav from "../FooterNav/FooterNav";

import {
  SiAparat,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiYoutube,
  SiTelegram,
} from "react-icons/si";

import ticket from "../../Resources/images/ticket.webp";
import device from "../../Resources/images/device.webp";
import chat from "../../Resources/images/chat.webp";
import logo from "../../Resources/images/logo.gif";
import footer1 from "../../Resources/images/footer1.png";
import footer2 from "../../Resources/images/footer2.png";
import footer3 from "../../Resources/images/footer3.png";
import footer4 from "../../Resources/images/footer4.svg";
import footer5 from "../../Resources/images/footer5.png";
import footer6 from "../../Resources/images/footer6.svg";

const Footer = () => {
  return (
    <div className="flex  flex-col relative  w-full h-[500px] border-t place-items-center">
      <div className="flex justify-around w-[70%] mt-10 h-32 border-b justify-center">
        <Acheivment
          title="رتبه یک سفر"
          text="معتبرترین عرضه‌کننده محصولات گردشگری در ایران"
          image={ticket}
        />
        <Acheivment
          title="همسفر هر سفر"
          text="ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)"
          image={device}
        />
        <Acheivment
          title="همسفر همه لحظات سفر"
          text="پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر"
          image={chat}
        />
      </div>
      <div className="flex  w-[70%] h-60 border-b mt-[2rem]">
        <div className="w-[60%]">
          <div className="flex justify-between w-full">
            <FooterNav
              title="علی بابا"
              options={[
                "درباره ما",
                "تماس بابا",
                "چرا علی بابا",
                "علی بابا پلاس",
                "بیمه مسافرتی",
                "مجله علی بابا",
              ]}
            />
            <FooterNav
              title="خدمات مشتریان"
              options={[
                "مرکز پشتیبانی آنلاین",
                "راهنمای خرید",
                "راهنمای استرداد",
                "قوانین و مقررات",
                "پرسش و پاسخ",
              ]}
            />
            <FooterNav
              title="اطلاعات تکمیلی"
              options={[
                "باشگاه همسفران",
                "فروش سازمانی",
                "همکاری با آژانس ها",
                "فرصت های شعلی",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col mr-[3%] pr-[3%] w-[70%]  mb-[1rem]">
          <div>
            <img src={logo} className="w-[8rem] " />
          </div>
          <div className="mt-[1rem] text-gray-600 text-[14px] font-semibold">
            <p>تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰</p>
            <p className=" mt-[0.5rem]">
              دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه
              چهارم، بن‌بست گل‌ها، پلاک 1
            </p>
          </div>
          <div className="flex mt-[2rem]">
            <img
              src={footer1}
              className="w-[4rem] border rounded-md cursor-pointer"
            />
            <img
              src={footer2}
              className="w-[4rem] border rounded-md cursor-pointer mr-2 "
            />
            <img
              src={footer3}
              className="w-[4rem] border rounded-md cursor-pointer mr-2"
            />
            <img
              src={footer4}
              className="w-[4rem] border rounded-md cursor-pointer mr-2"
            />
            <img
              src={footer5}
              className="w-[4rem] border rounded-md cursor-pointer mr-2"
            />
            <img
              src={footer6}
              className="w-[4rem] border rounded-md cursor-pointer mr-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[70%] h-20 text-gray-500">
        <p className="text-[12px]">
          کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
          شرکت سفرهای علی‌بابا می‌باشد. (نسخه 2.36.3)
        </p>
        <div className="flex">
          <SiAparat className="text-[25px] cursor-pointer" />
          <SiLinkedin className="mr-6 text-[25px] cursor-pointer" />
          <SiInstagram className="mr-6 text-[25px] cursor-pointer" />
          <SiTwitter className="mr-6 text-[25px] cursor-pointer" />
          <SiYoutube className="mr-6 text-[25px] cursor-pointer" />
          <SiTelegram className="mr-6 text-[25px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
