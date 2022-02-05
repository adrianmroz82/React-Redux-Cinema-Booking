import { List, ListItem } from "@material-ui/core";
import { connect } from "react-redux";

const Confirmation = (store) => {
  const RenderList = () => {
    return (
      <List>
        {store.selectedSeats.map((seat) => {
          return (
            <ListItem key={seat.id}>
              - row x{seat.cords.x}, place y{seat.cords.y} ({seat.id})
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div className="confirmation-page">
      <div>
        <b>Your booking was successful!</b>
      </div>
      <div>
        <div>You have chosen a place:</div>
        <RenderList />
      </div>
      <div>
        <b>Thank you! In case of any problems, please contact the administration department</b>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return store;
};

export default connect(mapStateToProps)(Confirmation);
