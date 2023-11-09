import { Component } from 'react';
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 3 };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    this.setState((curs) => ({ count: curs.count - 1 }));
  }
  handleIncrement() {
    this.setState((curs) => ({ count: curs.count + 1 }));
  }
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
