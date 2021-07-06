import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';
import { venueSetupFetched } from './actions/bookingActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Confirmation from './routes/Confirmation';
import * as R from 'ramda';
import { getFreeSpacesByRow } from './functions/functions';
import VenueSetup from './routes/VenueSetup';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/seats')
      .then((res) => {
        return res.json();
      })
      .then((seats) => {
        const maxSeatsNearby = R.reduce(
          R.max,
          0,
          R.map(
            (item) => item.length,
            R.unnest(R.values(getFreeSpacesByRow(seats)))
          )
        );

        dispatch(
          venueSetupFetched({
            seats,
            maxX: Math.max(...seats.map((seat) => seat.cords.x)),
            maxY: Math.max(...seats.map((seat) => seat.cords.y)),
            seatsAvailable: seats.filter((seat) => !seat.reserved).length,
            maxSeatsNearby: maxSeatsNearby,
          })
        );
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seats" exact component={VenueSetup} />
          <Route path="/success" exact component={Confirmation} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
