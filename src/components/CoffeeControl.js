import React from 'react';
import Header from './Header';
import { v4 } from 'uuid';
import BagList from './BagList';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bagList: [],
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
    const newItemList = [...this.state.itemList];
    newItemList.push(newItem);
    this.setState({
      itemList: newItemList,
      newItemFormShowing: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <BagList bagList={this.state.bagList} onClickAddNewBag={() => this.handleModalCall('create')}/>
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;