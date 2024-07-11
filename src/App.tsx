import { useState } from "react";
import PagesList from "./components/PagesList";
import { PageData } from "./models/PageData";

function App() {
  const [pagesList, setPagesList] = useState<PageData[]>([
    {
      id: 1,
      title: "Page 1",
      isSelected: false,
    },
    {
      id: 2,
      title: "Page 2",
      isSelected: false,
    },
    {
      id: 3,
      title: "Page 3",
      isSelected: true,
    },
    {
      id: 4,
      title: "Page 4",
      isSelected: false,
    },
  ]);

  const togglePageSelect = (isSelected: boolean, page: PageData) => {
    const tempList = [...pagesList];
    const index = tempList.findIndex((p) => p.id === page.id);
    tempList[index].isSelected = isSelected;

    setPagesList(tempList);
  };

  const toggleSelectAll = (isSelected: boolean) => {
    const tempList = [...pagesList];
    for (const page of tempList) {
      page.isSelected = isSelected;
    }
    setPagesList(tempList);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4 h-screen">
      <PagesList
        pagesList={pagesList}
        togglePageSelect={togglePageSelect}
        toggleSelectAll={toggleSelectAll}
      />
      <div className="font-montserrat text-sm">
          Made By &nbsp;
          <a
            href="https://linkedin.com/in/tavindersingh"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-400"
          >
            Tavinder Singh
          </a>
        </div>
    </div>
  );
}

export default App;
