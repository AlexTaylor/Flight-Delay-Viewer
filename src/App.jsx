import { useEffect, useState } from "react";
import FlightTable from "./components/FlightTable";
import { isEligible } from "./utils/flights";

export default function App() {
  const [flights, setFlights] = useState([]);
  const [hideIneligible, setHideIneligible] = useState(false);

  useEffect(() => {
    // Fetch the results from the API.
    async function fetchFlights() {
      const response = await fetch("/api/flights");
      const data = await response.json();
      setFlights(data);
    }
    fetchFlights();
  }, []);

  const filteredFlights = flights.filter((f) => {
    if (!hideIneligible) return true;
    return isEligible(f);
  });

  return (
    <>
      <FlightTable flights={filteredFlights} />
      <label>
        <input
          type="checkbox"
          checked={hideIneligible}
          onChange={(e) => setHideIneligible(e.target.checked)}
        />
        Hide ineligible flights
      </label>
    </>
  );
}

