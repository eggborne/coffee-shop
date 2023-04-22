import React from 'react';
import Header from './Header';
import BagList from './BagList';
import BagDetails from './BagDetails';
import Modal from './Modal';
import Form from './Form';
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bagList: [
       { name: 'Sumatra', origin: 'Kenya', roast: 'light', price: 1295, quantity: 130, id: v4() },
      ],
      selectedCoffee: null,
      modalShowing: null,
    };
  }

  getItemById = (id, list = this.state.bagList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleModalCall = (type = null) => {
    this.setState({
      modalShowing: type,
    });
  }
  returnToList = () => {
    this.setState({
      selectedCoffee: null,
    });
  }

  handleAddingNewItem = (newItem) => {
    const newItemList = [...this.state.bagList];
    newItemList.push(newItem);
    this.setState({
      bagList: newItemList,
      modalShowing: null,
    });
  }

  handleSaveEdit = (editedItem) => {
    const newBagList = [...this.state.bagList];
    newBagList[newBagList.indexOf(this.getItemById(editedItem.id))] = editedItem;
    this.setState({
      bagList: newBagList,
    });
  }

  handleChangingSelectedItem = (newSelected) => {
    console.log('changing selected to', newSelected)
    this.setState({
      selectedCoffee: newSelected
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          
          {this.state.selectedCoffee === null ?
            <React.Fragment>
              <Modal 
                type="create" 
                showing={this.state.modalShowing === 'create'}
                headerText={'Add new coffee bag'}
                bodyComponent={
                  <Form 
                    type='create' 
                    onClickSubmit={this.handleAddingNewItem}
                    onClickCancel={() => this.handleModalCall()}
                  />
                }
              />
              <BagList 
                bagList={this.state.bagList} 
                onClickAddNewBag={() => this.handleModalCall('create')}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
              />
            </React.Fragment>
            :
            // <BagDetails 
            //   bag={this.state.selectedCoffee}
            //   onClickSaveEdit={this.handleSaveEdit}
            //   onClickBackToList={this.returnToList} 
            // />
            <BagDetails 
              {...this.state.selectedCoffee}
              
              onClickSaveEdit={this.handleSaveEdit}
              onClickBackToList={this.returnToList} 
            />
          }
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;