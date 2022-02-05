import { useDispatch } from "react-redux";

import { selectSeat, unselectSeat } from "../../actions/bookingActions";
import { iterate } from "../../functions/functions";

export const CinemaCell = (props) => {
  const dispatch = useDispatch();

  let seat = props.seats.find((item) => {
    return item.cords.x === props.x && item.cords.y === props.y;
  });

  if (!seat) {
    return <div className="empty-cell cell" />;
  }

  const toggleSelectionClick = (seat) => {
    if (props.selectedSeats.includes(seat)) {
      dispatch(unselectSeat(seat));
    } else {
      if (!seat.reserved && props.newBooking.amount > props.selectedSeats.length) {
        dispatch(selectSeat(seat));
      }
    }
  };

  const isSeatsSelected = (seat) => {
    return props.selectedSeats.includes(seat);
  };

  return (
    <div
      onClick={() => toggleSelectionClick(seat)}
      className={"cell " + (seat.reserved ? "taken " : "free ") + (isSeatsSelected(seat) ? " selected" : "")}
    />
  );
};

export const CinemaRow = (props) => {
  return (
    <div className="row">
      {iterate(props.maxY).map((y) => {
        return (
          <CinemaCell
            selectedSeats={props.selectedSeats}
            key={y}
            x={props.x}
            y={y}
            seats={props.seats}
            newBooking={props.newBooking}
          />
        );
      })}
    </div>
  );
};
