const initialState = {
  newBooking: {
    amount: 1,
    placesNearby: false,
  },
  venueSetup: {
    seats: [],
    maxX: 0,
    maxY: 0,
    seatsAvailable: 1,
    maxSeatsNearby: 2,
  },
  selectedSeats: [],
};

export const bookingReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'PLACES_COUNT_CHANGE':
      return {
        ...state,
        newBooking: {
          ...state.newBooking,
          amount: action.payload,
        },
      };
    case 'PLACES_NEARBY_CHANGE':
      return {
        ...state,
        newBooking: {
          ...state.newBooking,
          placesNearby: action.payload,
        },
      };
    case 'VENUE_SETUP_FETCHED':
      return {
        ...state,
        venueSetup: action.payload,
      };
    case 'UNSELECT_SEAT':
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          (seat) => seat !== action.payload
        ),
      };
    case 'SELECT_SEAT':
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };
    case 'NEW_BOOKING_SUBMIT':
      return {
        ...state,
        selectedSeats: action.payload,
      };
    default:
      return state;
  }
};
