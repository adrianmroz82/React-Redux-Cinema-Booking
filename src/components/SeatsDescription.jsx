import './SeatsDescription.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const SeatsDescription = () => {
  const history = useHistory();

  const submitChange = (e) => {
    e.stopPropagation();
    history.push(`/success`);
  };

  return (
    <div className="legend">
      <div className="legend-item">
        <div className="cell"></div>
        <p>Seats available</p>
      </div>
      <div className="legend-item">
        <div className="cell" style={{ backgroundColor: 'gray' }}></div>
        <p style={{ textAlign: 'center' }}>Seats reserved</p>
      </div>
      <div className="legend-item">
        <div className="cell" style={{ backgroundColor: 'orange' }}></div>
        <p>Your seats</p>
      </div>
      <div className="legend-item">
        <Button
          className="reservation-button"
          variant="outlined"
          onClick={submitChange}
        >
          Pick those places
        </Button>
      </div>
    </div>
  );
};

export default SeatsDescription;
