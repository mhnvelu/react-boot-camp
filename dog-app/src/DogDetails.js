import React, { Component } from "react";
import "./DogDetails.css";
import { Link } from "react-router-dom";
export default class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="DogDetails container">
        <div className="row justify-content-center mt-4 mb-2">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img className="card-img-top" src={dog.src} alt={dog.name} />
              <div className="card-body">
                <h3 className="card-title">{dog.name}</h3>
                <h5 className="card-subtitle  text-muted">
                  {dog.age} years old
                </h5>
              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, i) => (
                  <li className="list-group-item" key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <Link to="/dogs" className="btn btn-info btn-sm">
                  GO BACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
