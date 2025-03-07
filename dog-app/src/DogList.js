import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class DogList extends Component {
  render() {
    console.log(this.props.dogs);
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List!</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map((dog) => (
              <div className="Dog col-md-4  text-center" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <h3 className="mt-3">
                  <Link to={`/dogs/${dog.name}`} className="underline">
                    {dog.name}{" "}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
