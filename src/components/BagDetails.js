import React from 'react';
import Modal from './Modal';
import Form from './Form';
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
        <h2>Details for {this.props.name}</h2>
        <div className='item-detail-entry'>
          <div>Name: {this.props.name}</div>
          <div>Origin: {this.props.origin}</div>
          <div>Roast: {this.props.roast}</div>
          <div>Price: {formattedPrice}</div>
          <div>Quantity: {this.props.quantity} lbs.</div>
          <div>id: {this.props.id}</div>
          <div className='button-area'>
            <button onClick={() => this.callModal('edit')} className='yellow'>Edit</button>
            <button className='red'>Delete</button>
            <button className='green'>Buy 1 lb.</button>
            <button className='orange'>Restock 1 lb.</button>
          </div>
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
  onClickEdit: PropTypes.func,
  onClickBackToList: PropTypes.func,
  onClickSaveEdit: PropTypes.func,
}

export default BagDetails;
