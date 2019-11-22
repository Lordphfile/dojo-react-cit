import React, { Component, Fragment } from 'react';

class btnWithState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: 'pedro lindao'
    };
  }

  add = (value) => {
    console.log(value);
    this.setState({
      value: value + this.state.value
    }, () => console.log(this.state.value));
  }

  addFail = (value) => {
    //this.state.value = value + this.state.value;
    //this.props.id = 1000;
    //this.forceUpdate();
  }

  render() {
    return <Fragment>
      <br/>
      <button onClick={ () => this.add(Number(this.props.id)) }>btn {this.props.id}</button><br/>
      Nome: {this.state.name}<br/>
      Valor: {this.state.value}<br/>
      <button onClick={ () => this.addFail(1) }>Fail</button><br/>
      
    </Fragment>
  }
}
export default btnWithState;
