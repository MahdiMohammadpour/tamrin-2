const FooterNav = ({ title, options }) => {
  return (
    <div className="flex flex-col p-[0.5rem]">
      <h2 className="font-semibold text-[14px] mb-[0.2rem]">{title}</h2>
      {options.map((option, index) => {
        return (
          <p className="mt-[0.4rem]  text-gray-800 text-[14px]" key={index}>
            {option}
          </p>
        );
      })}
    </div>
  );
};

export default FooterNav;
