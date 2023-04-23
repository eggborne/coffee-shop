import React from 'react';
import Modal from './Modal';
import Form from './Form';
import BagDisplay from './BagDisplay';
import PropTypes from 'prop-types';

class BagDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowing: null,
    }
  }

  callModal = (type = null) => {
    this.setState(() => ({
      modalShowing: type
    }));
  }

  render() {
    const formattedPrice = '$' + (this.props.price / 100);
    const detailsClass = this.props.quantity >= 10 ? 
      'item-detail-entry' 
      : 
      this.props.quantity > 0 ?
      'item-detail-entry low-warning'
      :
      'item-detail-entry low-warning out-of-stock';

    return (
      <React.Fragment>
        <Modal 
          type='edit' 
          headerText={`Editing ${this.props.name}`}
          showing={this.state.modalShowing === 'edit'}
          bodyComponent={
            <Form 
              type='edit' 
              editingItem={{
                name: this.props.name,
                price: this.props.price,
                origin: this.props.origin,
                roast: this.props.roast,
                quantity: this.props.quantity,
                id: this.props.id,
              }}
              onClickSubmit={this.props.onClickSaveEdit}
              onClickCancel={() => this.callModal()}
              returnToList={this.props.onClickBackToList}
            />
          } 
        />
        <Modal 
          type='delete' 
          headerText={`Delete ${this.props.name}?`}
          showing={this.state.modalShowing === 'delete'}
          bodyComponent={
            <div className='button-area'>
              <button onClick={() => this.props.onClickConfirmDelete(this.props.id)} className='red'>DO IT</button>
              <button onClick={() => this.callModal()} type='button'>Cancel</button>
            </div>
          } 
        />

        <h2>Details for {this.props.name}</h2>
        <div className={detailsClass}>
          <div>Name: {this.props.name}</div>
          <div>Origin: {this.props.origin}</div>
          <div>Roast: {this.props.roast}</div>
          <div>Price: {formattedPrice}</div>
          <div>Quantity: {parseInt(this.props.quantity)} lbs.</div>
          <div>id: {this.props.id}</div>
          <div className='button-area'>
            <button onClick={() => this.callModal('edit')} className='yellow'>Edit</button>
            <button onClick={() => this.callModal('delete')}className='red'>Delete</button>
            <button disabled={this.props.quantity === 0} onClick={() => this.props.onClickAdjustQuantity(this.props.id, -1)} className='green'>{this.props.quantity === 0 ? 'SOLD OUT' : 'Sell 1 lb.'}</button>
            <button disabled={this.props.quantity === 130} onClick={() => this.props.onClickAdjustQuantity(this.props.id, 1)} className='orange'>{this.props.quantity === 130 ? 'BAG FULL' : 'Restock 1 lb.'}</button>
          </div>
          <BagDisplay quantity={this.props.quantity} />
        </div>
        <button onClick={this.props.onClickBackToList}>Back to list</button>
      </React.Fragment>
    );
  }
}

BagDetails.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onClickBackToList: PropTypes.func,
  onClickSaveEdit: PropTypes.func,
  onClickConfirmDelete: PropTypes.func,
  onClickAdjustQuantity: PropTypes.func,
}

export default BagDetails;
