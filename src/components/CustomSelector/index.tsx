import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type CustomSelectorProps = {
  defaultOption?: { value: string | number; label: string };
  options: { value: string | number; label: string }[];
  placeholder?: string;
  isClickToFocus?: boolean;
  onChange: (
    selected: { value: number | string; label: string },
    e?: React.MouseEvent
  ) => void;
  style?: React.CSSProperties;
};

const CustomSelector = ({
  defaultOption,
  options,
  placeholder,
  onChange,
  style,
  isClickToFocus = false,
}: CustomSelectorProps) => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(defaultOption);

  function handleSelectOption(
    e: React.MouseEvent,
    option: { value: number | string; label: string }
  ) {
    e.stopPropagation();
    onChange(option, e);
    setSelected(option);
    setIsOpenOption(false);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpenOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={dropdownRef}
        className="relative flex items-center justify-between gap-5 border-1 border-gray-300  bg-slate-50 rounded-md h-[40px] px-2  cursor-pointer"
        onClick={() => {
          setIsOpenOption((pre) => {
            const dropdownElement = dropdownRef.current;
            if (dropdownElement && !pre && isClickToFocus) {
              const yOffset = -150; // top menu height
              const y =
                dropdownElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }
            return !pre;
          });
        }}
        style={style}
      >
        {selected ? (
          <p className="text-gray-600">{selected.label}</p>
        ) : (
          <p className="text-gray-400">{placeholder || "請選擇"}</p>
        )}
        <IoIosArrowDown size={15} />

        {isOpenOption && (
          <ul className="absolute bg-background w-full h-fit max-h-[400px] top-[42px] left-0 z-[100] bg-slate-50 border-1 border-gray-300 rounded-md overflow-scroll hide-scrollbar ">
            {options.map(({ value, label }) => {
              const isSelected = value === selected?.value;

              return (
                <li
                  key={value}
                  className={
                    "flex px-4 py-2 hover:bg-slate-100 text-textColor-content" +
                    " " +
                    `${isSelected && "bg-slate-200"}`
                  }
                  onClick={(e) => handleSelectOption(e, { value, label })}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomSelector;
