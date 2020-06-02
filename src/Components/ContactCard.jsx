import React, { Component } from "react";

export class ContactCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header title has-text-centered">
          {this.props.name}
        </div>
        <div className="card-content">
          <div className="content">Occupation: {this.props.job}</div>
          <div className="content">Email Address: {this.props.email}</div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
