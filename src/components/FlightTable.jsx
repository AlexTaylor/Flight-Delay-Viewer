import FlightRow from "./FlightRow";

export default function FlightTable({ flights }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>Delay</th>
          <th>Status</th>
          <th>Eligible</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((f) => (
          <FlightRow key={f.id} flight={f} />
        ))}
      </tbody>
    </table>
  );
}
