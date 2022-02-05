import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./SeatsDescription.css";

export const SeatsDescription = () => {
  const history = useHistory();

  const submitChange = (e) => {
    e.stopPropagation();
    history.push(`/success`);
  };

  const RenderLegendItem = ({ text, style }) => {
    return (
      <div className="legend-item">
        <div className="cell" style={style}></div>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="legend">
      <RenderLegendItem text="Seats Available" />
      <RenderLegendItem style={{ backgroundColor: "gray" }} text="Seats reserved" />
      <RenderLegendItem style={{ backgroundColor: "orange" }} text="Your seats" />
      <div className="legend-item">
        <Button className="reservation-button" variant="outlined" onClick={submitChange}>
          Pick those places
        </Button>
      </div>
    </div>
  );
};
