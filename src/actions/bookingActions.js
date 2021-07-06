export const placesCountChange = (amount) => {
  return {
    type: 'PLACES_COUNT_CHANGE',
    payload: amount,
  };
};

export const placesNearbyChange = (isChecked) => {
  return {
    type: 'PLACES_NEARBY_CHANGE',
    payload: isChecked,
  };
};

export const venueSetupFetched = (venueSetup) => {
  return {
    type: 'VENUE_SETUP_FETCHED',
    payload: venueSetup,
  };
};

export const selectSeat = (seat) => {
  return {
    type: 'SELECT_SEAT',
    payload: seat,
  };
};
export const unselectSeat = (seat) => {
  return {
    type: 'UNSELECT_SEAT',
    payload: seat,
  };
};

export const newBookingSubmit = (selectedSeats) => {
  return {
    type: 'NEW_BOOKING_SUBMIT',
    payload: selectedSeats,
  };
};
