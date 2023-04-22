import React from 'react';
import Header from './Header';
import BagList from './BagList';
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
    this.setState(() => ({
      modalShowing: type,
    }));
  }

  handleAddingNewItem = (newItem) => {
    const newItemList = [...this.state.bagList];
    newItemList.push(newItem);
    this.setState({
      bagList: newItemList,
      modalShowing: null,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
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
          <BagList bagList={this.state.bagList} onClickAddNewBag={() => this.handleModalCall('create')}/>
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;