import React from "react";
import ContactCards from "./Components/ContactCards";
import CardsTitle from "./Components/CardsTitle";

function App() {
  return (
    <div className="container">
      <div className="box">
        <CardsTitle />
        <ContactCards />
      </div>
    </div>
  );
}

export default App;
