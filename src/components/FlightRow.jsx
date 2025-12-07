import { isEligible, compensationAmount } from "../utils/flights";

export default function FlightRow({ flight }) {
  const eligible = isEligible(flight);
  const amount = compensationAmount(flight);

  return (
    <tr>
      <td>{flight.flight}</td>
      <td>{flight.status === "CANCELLED" ? "—" : flight.delay}</td>
      <td>{flight.status}</td>
      <td>{eligible ? "Yes" : "No"}</td>
      <td>€{amount}</td>
    </tr>
  );
}