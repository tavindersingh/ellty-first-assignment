import { useState } from "react";
import CheckIcon from "./icons/CheckIcon";

type CheckboxProps = {
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
};

export default function Checkbox({ isSelected, onChange }: CheckboxProps) {
  const [isPressing, setIsPressing] = useState(false);
  // const [isSelected, setIsSelected] = useState(value);

  const onClick = () => {
    // setIsSelected(!isSelected);
    onChange(!isSelected);
  };

  return (
    <div className="flex">
      <div
        className={`flex group h-[25px] w-[25px] rounded-md cursor-pointer items-center justify-center hover:border-[#BDBDBD] ${
          isPressing ? "ring-2 ring-[#91b2fe]" : ""
        } ${
          isSelected
            ? "bg-[#2469F6] hover:bg-[#5087F8]"
            : "bg-white border-[#CDCDCD] border"
        }`}
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
        onClick={onClick}
      >
        <span
          className={`group-hover:block ${isSelected ? "block" : "hidden"}`}
        >
          <CheckIcon
            strokeColor={
              isSelected ? "#ffffff" : isPressing ? "#878787" : "#E3E3E3"
            }
          />
        </span>
      </div>
    </div>
  );
}
