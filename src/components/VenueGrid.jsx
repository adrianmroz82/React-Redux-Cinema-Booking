import { CinemaRow } from './CinemaSeats';
import SeatsDescription from './SeatsDescription';
import { iterate } from '../functions/functions';

export function VenueGrid(props) {
  const renderRows = (x) => {
    return (
      <CinemaRow
        key={x}
        x={x}
        maxY={props.venueSetup.maxY}
        seats={props.venueSetup.seats}
        selectedSeats={props.selectedSeats}
        newBooking={props.newBooking}
      />
    );
  };

  return (
    <div className="venue-grid-container">
      <div className="venue-rows">
        {iterate(props.venueSetup.maxX).map(renderRows)}
      </div>
      <SeatsDescription />
    </div>
  );
}
