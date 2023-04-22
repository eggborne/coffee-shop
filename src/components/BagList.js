import React from 'react';
import PropTypes from 'prop-types';
import BagListItem from './BagListItem';

function BagList(props) {
  return (
    <React.Fragment>
      <h2>Bag list</h2>
      <div className="item-list">
        {props.bagList.length ?
          props.bagList.map(bag =>
            <BagListItem 
              bag={bag} 
              key={bag.id} 
              onClickViewDetails={props.handleChangingSelectedItem}
            />
          )
          :
          <div>No coffee bags have been added yet!</div>
        }
        <div className="button-area">
          <button onClick={props.onClickAddNewBag} className="green">Add new bag</button>
        </div>
      </div>
    </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.arrayOf(PropTypes.object),
  onClickAddNewBag: PropTypes.func,
  handleChangingSelectedItem: PropTypes.func,
}

export default BagList;
