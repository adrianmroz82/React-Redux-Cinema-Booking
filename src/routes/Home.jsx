import './Home.css';
import { connect } from 'react-redux';
import { NewBookingForm } from '../components/NewBookingForm';

const Home = (store) => {
  return (
    <div className="container">
      <NewBookingForm
        amount={store.amount}
        maxSeatsAvailable={store.seatsAvailable}
        seats={store.seats}
        maxSeatsNearby={store.maxSeatsNearby}
        placesNearby={store.placesNearby}
      />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    seats: store.venueSetup.seats,
    amount: store.newBooking.amount,
    placesNearby: store.newBooking.placesNearby,
    seatsAvailable: store.venueSetup.seatsAvailable,
    maxSeatsNearby: store.venueSetup.maxSeatsNearby,
  };
};

export default connect(mapStateToProps)(Home);
