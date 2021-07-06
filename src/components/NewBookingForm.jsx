import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  newBookingSubmit,
  placesCountChange,
  placesNearbyChange,
} from '../actions/bookingActions';
import * as R from 'ramda';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import './NewBookingForm.css';

export function NewBookingForm(store) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAmountChange = (e) => {
    dispatch(placesCountChange(e.target.value));
  };

  const canChooseNearbySeats = () => {
    return store.amount > store.maxSeatsNearby;
  };
  const handlePlacesNearbyChange = (e) => {
    dispatch(placesNearbyChange(e.target.checked));
  };

  const handleNewBookingSubmit = (e) => {
    e.stopPropagation();

    if (store.placesNearby && store.maxSeatsNearby >= store.amount) {
      const spacesByRow = R.find(
        (item) => item.length >= store.amount,
        R.unnest(
          R.values(
            R.map(
              (row) =>
                R.groupWith(
                  (a, b) => a.cords.y + 1 === b.cords.y,
                  row.filter((seat) => !seat.reserved)
                ),
              R.groupBy((seat) => seat.cords.x, store.seats)
            )
          )
        )
      ).slice(0, store.amount);

      dispatch(newBookingSubmit(spacesByRow));
      history.push(`/seats`);
    } else {
      dispatch(
        newBookingSubmit(
          store.seats.filter((seat) => !seat.reserved).slice(0, store.amount)
        )
      );
      history.push(`/seats`);
    }
  };

  return (
    <form id="new-booking-form" className="box">
      <div className="places-label">
        <FormControlLabel
          style={{ marginRight: '10px' }}
          control={
            <TextField
              className="text-field"
              id="seats-to-book"
              variant="outlined"
              type="number"
              value={store.amount}
              onChange={handleAmountChange}
              inputProps={{ min: 1, max: store.maxSeatsAvailable }}
            />
          }
          label="Number of seats:"
          labelPlacement="start"
        />
      </div>
      <div className="places-label">
        <FormControlLabel
          control={
            <Checkbox
              onChange={handlePlacesNearbyChange}
              checked={store.placesNearby}
              disabled={canChooseNearbySeats()}
              color="primary"
            />
          }
          label="Should they be next to each other?"
        />
      </div>
      <div>
        <Button
          className="btn"
          onClick={handleNewBookingSubmit}
          form="new-booking-form"
          variant="outlined"
          color="default"
          type="button"
        >
          Choose place
        </Button>
      </div>
    </form>
  );
}
