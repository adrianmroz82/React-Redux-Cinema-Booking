import { connect } from 'react-redux';
import { VenueGrid } from '../components/VenueGrid';

const VenueSetup = (store) => {
  return (
    <VenueGrid
      venueSetup={store.venueSetup}
      selectedSeats={store.selectedSeats}
      newBooking={store.newBooking}
    />
  );
};

const mapStateToProps = (store) => {
  return store;
};

export default connect(mapStateToProps)(VenueSetup);
