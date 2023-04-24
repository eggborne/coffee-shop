import PropTypes from 'prop-types';
import BagDisplay from './BagDisplay';

function BagListItem(props) {
  const formattedPrice = '$' + (props.bag.price / 100);
  console.log('quantity', props.bag.quantity, typeof props.bag.quantity);
  let listItemClass =
    props.bag.quantity >= 10 ?
      'item-list-entry'
      :
      props.bag.quantity > 0 ?
        'item-list-entry low-warning'
        :
        'item-list-entry low-warning out-of-stock';
  listItemClass += (' ' + props.bag.roast);
  const itemListEntryStyle = {
    position: 'relative',
    border: '1px solid black',
    padding: '1.5rem 1rem',
    minWidth: '20rem',
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    paddingBottom: '2rem',
  };
  return (
    <div style={itemListEntryStyle} className={listItemClass}>
      <div>{props.bag.name}</div>
      <div>Origin: {props.bag.origin}</div>
      <div>Roast: {props.bag.roast}</div>
      <div>Price per lb.: {formattedPrice}</div>
      <div>Quantity: {props.bag.quantity} lbs.</div>
      <div className='id-tag'>id: {props.bag.id}</div>
      <BagDisplay quantity={props.bag.quantity} filled={true} />
      <div className='button-area'>
        <button onClick={() => props.onClickViewDetails(props.bag)}>View Details</button>
      </div>
    </div>
  );
}

BagListItem.propTypes = {
  bag: PropTypes.object,
  onClickViewDetails: PropTypes.func,
};

export default BagListItem;
