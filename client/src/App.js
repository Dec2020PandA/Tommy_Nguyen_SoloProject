import { Router } from "@reach/router";
import styles from "./css-modules/App.module.css";

//Import Views
import Main from "./views/Main";
import TripListView from "./views/TripListView";
import AddTripView from "./views/AddTripView";
import DashboardView from "./views/DashboardView";
import ItineraryView from "./views/ItineraryView";
import BudgetView from "./views/BudgetView";
import TodoView from "./views/TodoView";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Main default />
        <DashboardView path="/user/:id/trips/:tripId/dashboard/" />
        <TripListView path="/user/:id/trips" />
        <AddTripView path="/user/:id/trips/new" />
        <ItineraryView path="/dashboard/itinerary" />
        <BudgetView path="/dashboard/budget" />
        <TodoView path="/dashboard/todo" />
      </Router>
    </div>
  );
}

export default App;
