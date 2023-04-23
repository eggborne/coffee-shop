import PropTypes from 'prop-types';

function BagDisplay(props) {
  let yPosition = 10 - ((10/130) * props.quantity);
  if ( yPosition > 8.75 ) {
    if (yPosition < 10) {
      yPosition = 8.75; 
    }
  };
  console.log('Y when quant', props.quantity, 'is', yPosition)
  return (
    <div style={{backgroundPositionY: yPosition + 'rem'}} className='bag-display'></div>
  );
}

BagDisplay.propTypes = {
  quantity: PropTypes.number,
};

export default BagDisplay;
