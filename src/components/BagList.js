import React from 'react';
import PropTypes from 'prop-types';
function BagList(props) {
  return (
    <React.Fragment>
      <h2>Bag list</h2>
      <div className="item-list">
        {props.bagList.length ?
          <div>list the bags!</div>
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
}
export default BagList;
