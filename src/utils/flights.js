/**
 * @file
 * 
 * Flight data utility functions.
 */

/**
 * Checks eligibility for a specific flight.
 * 
 * @param {Object} flight
 * @param {number} flight.delay - Delay in minutes.
 * @param {string} flight.status - Flight status.
 *
 * @returns {boolean} True if eligible, otherwise false.
 */
export function isEligible(flight) {
  return flight.delay >= 90 || flight.status === "CANCELLED";
}

/**
 * Returns the compensation amount for a specific flight.
 * 
 * @param {Object} flight
 *
 * @returns {int} Compenstation amount.
 */
export function compensationAmount(flight) {
  return isEligible(flight) ? 250 : 0;
}
