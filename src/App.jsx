import React from "react";
import Student from "./students";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Details</h1>

      <Student
        name="Deepika"
        id="2500040081"
        course="B.Tech ECE"
        attendance="95%"
      />

      <Student
        name="Nishitha"
        id="2500032189"
        course="B.Tech CSE"
        attendance="88%"
      />

      <Student
        name="Ramya"
        id="2500032190"
        course="B.Tech ECE"
        attendance="90%"
      />
    </div>
  );
}

export default App;