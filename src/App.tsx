import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./App.css";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

export enum Sections {
  Openings = "Aberturas",
  Equipment = "Equipamiento",
  Finishes = "Terminaciones",
}

const queryClient = new QueryClient();

function App() {
  const [activeSection, setActiveSection] = useState<Sections | undefined>();

  const selectActiveSection = (section: string | undefined) => {
    setActiveSection(section as Sections);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <div className="grow flex flex-row bg-gray-200">
          <SideMenu selectActiveSection={selectActiveSection} />
          <CategoryList
            activeSection={activeSection}
            selectActiveSection={selectActiveSection}
          />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
