import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import CategoryList from "./CategoryList";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { fetchCategoriesBySection } from "../api/categories";
import Sectioncontainer from "./SectionContainer";
import SideButtons from "./SideButtons";

export enum Sections {
  Openings = "Aberturas",
  Equipment = "Equipamiento",
  Finishes = "Terminaciones",
}

function Home() {
  const [activeSection, setActiveSection] = useState<Sections | undefined>();

  const { data, isLoading, isFetching } = useQuery(
    ["fetchCategoriesBySection", activeSection],
    () => fetchCategoriesBySection(activeSection),
    {
      enabled: !!activeSection,
    }
  );

  const selectActiveSection = (section: string | undefined) => {
    setActiveSection(section as Sections);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="grow flex flex-row bg-gray-200 relative">
        <SideMenu selectActiveSection={selectActiveSection} />
        <Sectioncontainer
          activeSection={activeSection}
          selectActiveSection={selectActiveSection}
          categories={data?.data}
          dataLoading={isLoading || isFetching}
        />
        <SideButtons />
      </div>
    </div>
  );
}

export default Home;