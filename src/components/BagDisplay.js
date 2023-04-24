import PropTypes from 'prop-types';

function BagDisplay(props) {
  let beanLevelY;
  if (props.filled) {
    let quantityYPosition = 10 - ((10/130) * props.quantity);
    if ( quantityYPosition > 8.75 ) {
      if (quantityYPosition < 10) {
        quantityYPosition = 8.75; 
      }
    };
    beanLevelY = quantityYPosition + 'rem'
  } else {
    beanLevelY = '10rem';
  }
  return (
    <div style={{backgroundPositionY: beanLevelY}} className='bag-display'></div>
  );
}

BagDisplay.propTypes = {
  quantity: PropTypes.number,
  filled: PropTypes.bool,
};

export default BagDisplay;
