import React, { Component } from "react";
import ContactCard from "./ContactCard";

export class ContactCards extends Component {
  render() {
    return (
      <>
        <div className="columns">
          <div className="column">
            <ContactCard
              name="Temur"
              job="Developer"
              email="sample@gmail.com"
            />
          </div>
          <div className="column">
            <ContactCard name="Peter" job="Spider-Man" email="spider@man.com" />
          </div>
          <div className="column">
            <ContactCard name="Bruce" job="Batman" email="bat@man.com" />
          </div>
        </div>
      </>
    );
  }
}

export default ContactCards;
