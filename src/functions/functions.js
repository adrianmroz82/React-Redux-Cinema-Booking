import * as R from 'ramda';

export const getFreeSpacesByRow = (seats) => {
  return R.map(
    (row) =>
      R.groupWith(
        (a, b) => a + 1 === b,
        row.filter((seat) => !seat.reserved).map((seat) => seat.cords.y)
      ),
    R.groupBy((seat) => seat.cords.x, seats)
  );
};

export const iterate = (limit) => {
  let rows = [];
  for (let i = 0; i <= limit; i++) {
    rows.push(i);
  }

  return rows;
};
