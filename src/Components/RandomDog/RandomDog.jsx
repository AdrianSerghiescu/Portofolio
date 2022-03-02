import { Component } from "react";
import "./styles.css";

export class Dog extends Component {
  state = {
    dog: [],
  };

  getDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((dog) => {
        this.setState((state) => ({
          ...state,
          dog: [dog.message, ...state.dog],
        }));
      });
  };

  componentDidMount() {
    this.getDogs();
  }

  previousDog = () => {
    this.setState({
      dog: this.state.dog.slice(+1),
    });
  };

  render() {
    return (
      <div className="dog-box">
        <h1 className="dog-heading">Random Dog Picture</h1>
        <div className="dog">
          <button className="dog-btn" onClick={this.previousDog}>
            Previous
          </button>
          <img src={this.state.dog[0]} alt="Dog" />
          <button className="dog-btn" onClick={this.getDogs}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
