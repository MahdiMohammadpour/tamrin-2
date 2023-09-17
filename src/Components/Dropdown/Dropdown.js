import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";
import styles from "./Dropdown.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ title, options , lastChild }) => {
  return (
    <Menu
      as="div"
      className={`relative inline-block text-left px-3 text-red-200 ${!lastChild && "border-l border-slate-200"}`}
    >
      <Menu.Button className="inline-flex w-full justify-center gap-x-1 px-3 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 rounded-md">
        {title}
        {options.length !== 0 && (
          <GoChevronDown
            className="mr-1 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        )}
      </Menu.Button>

      {options.length !== 0 && (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {options.map((option, index) => {
              return (
                <div key={index} className="py-1">
                  <Menu.Item className={styles.menuItem}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-slate-50 text-gray-900 "
                            : "text-slate-500 ",
                          "block px-4 py-2 text-sm mx-1 rounded-md"
                        )}
                      >
                        {option}
                      </a>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
};

export default Dropdown;
