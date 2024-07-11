import { useEffect, useState } from "react";
import { PageData } from "../models/PageData";
import AppButton from "./AppButton";
import Checkbox from "./Checkbox";

type PagesListProps = {
  pagesList: PageData[];
  togglePageSelect: (isSelected: boolean, page: PageData) => void;
  toggleSelectAll: (isSelected: boolean) => void;
};

export default function PagesList({
  pagesList,
  togglePageSelect,
  toggleSelectAll,
}: PagesListProps) {
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    for (const page of pagesList) {
      if (!page.isSelected) {
        setIsAllSelected(false);
        break;
      }

      setIsAllSelected(true);
    }
  }, [pagesList]);

  return (
    <div className="font-montserrat pagesContainer flex flex-col w-full max-w-[370px] px-[15px] py-[20px] bg-white justify-start rounded-md">
      <div className="flex justify-between px-[7px]">
        <p>All Pages</p>
        <Checkbox
          onChange={(isSelected: boolean) => {
            toggleSelectAll(isSelected);
          }}
          isSelected={isAllSelected}
        />
      </div>
      <hr className="bg-[#CDCDCD] my-5" />

      <div className="flex flex-col space-y-5">
        {pagesList.map((page) => (
          <div
            key={page.title}
            className="flex justify-between px-[7px] items-center"
          >
            <p>{page.title}</p>
            <Checkbox
              onChange={(isSelected: boolean) =>
                togglePageSelect(isSelected, page)
              }
              isSelected={page.isSelected}
            />
          </div>
        ))}
      </div>

      <hr className="bg-[#CDCDCD] my-5" />

      <AppButton title="Done" onClick={() => {}} />
    </div>
  );
}
