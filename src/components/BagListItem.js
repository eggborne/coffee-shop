import React from 'react';
import PropTypes from 'prop-types';

function BagListItem(props) {
  const formattedPrice = '$' + (props.bag.price / 100);
  return (
    <div className='item-list-entry'>
      <div>Name: {props.bag.name}</div>
      <div>Origin: {props.bag.origin}</div>
      <div>Roast: {props.bag.roast}</div>
      <div>Price: {formattedPrice}</div>
      <div>id #{props.bag.id}</div>
    </div>
  );
}

BagListItem.propTypes = {
  bag: PropTypes.object,
}

export default BagListItem;
