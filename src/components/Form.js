import React from "react";
import { v4 } from "uuid";  
import PropTypes from "prop-types";

function Form(props) {

  function handleAddItemFormSubmission(e) {
    e.preventDefault();
    props.onClickSubmit({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      quantity: 130,
      id: v4(),
    });
  }

  function handleEditItemFormSubmission(e) {
    e.preventDefault();
    props.onClickSubmit({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: props.editingItem.id,
    });
    props.returnToList();
  }

  let formSubmissionFunction;
  if (props.type === 'create') { formSubmissionFunction = handleAddItemFormSubmission }
  else if (props.type === 'edit') { formSubmissionFunction = handleEditItemFormSubmission }
  
  return (
    <form onSubmit={formSubmissionFunction}>
      <div className="form-row">
        <label for="name">Item name</label>
        <input placeholder={props.editingItem && props.editingItem.name} name="name" type="text" />
      </div>
      <div className="form-row">
        <label for="origin">Origin</label>
        <input placeholder={props.editingItem && props.editingItem.origin} name="origin" type="text" />
      </div>
      <div className="form-row">
        <label for="roast">Roast</label>
        <select name="roast">
          <option selected={props.editingItem && props.editingItem.roast === "light"} name="roast" value="light">Light</option>
          <option selected={props.editingItem && props.editingItem.roast === "medium"} name="roast" value="medium">Medium</option>
          <option selected={props.editingItem && props.editingItem.roast === "dark"} name="roast" value="dark">Dark</option>
        </select>
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input placeholder={props.editingItem && props.editingItem.price} name="price" type="number" />
      </div>
      <div className={`form-row${props.editingItem ? '' : ' hidden'}`}>
        <label for="quantity">Quantity</label>
        <input defaultValue={props.editingItem ? props.editingItem.quantity : '130'} name="quantity" type="number" />
      </div>
      <div className="form-row buttons">
        <button type="submit" className='green'>Save</button>
        <button onClick={props.onClickCancel} type='button'>Exit without saving</button>
      </div>
    </form>
  );
}

Form.propType = {
  type: PropTypes.string,
  editingItem: PropTypes.object,
  onClickSubmit: PropTypes.func,
  onClickCancel: PropTypes.func,
  returnToList: PropTypes.func,
}

export default Form;
