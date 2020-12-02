import { Router } from "@reach/router";

//Import Views
import DashboardView from "./views/DashboardView";
import ItineraryView from "./views/ItineraryView";
import BudgetView from "./views/BudgetView";
import TodoView from "./views/TodoView";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardView path="/dashboard" default />
        <ItineraryView path="/dashboard/itinerary" />
        <BudgetView path="/dashboard/budget" />
        <TodoView path="/dashboard/todo" />
      </Router>
    </div>
  );
}

export default App;
