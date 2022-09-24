import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./components/Home";

export enum Sections {
  Openings = "Aberturas",
  Equipment = "Equipamiento",
  Finishes = "Terminaciones",
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
