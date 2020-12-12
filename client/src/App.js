import { Router } from "@reach/router";
import styles from "./css-modules/App.module.css";

//Import Views
import Main from "./views/Main";
import TripListView from "./views/TripListView";
import AddTripView from "./views/AddTripView";
import DashboardView from "./views/DashboardView";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Main default path="/" />
        <DashboardView path="/user/:id/trips/:tripId/dashboard/*" />
        <TripListView path="/user/:id/trips" />
        <AddTripView path="/user/:id/trips/new" />
      </Router>
    </div>
  );
}

export default App;
