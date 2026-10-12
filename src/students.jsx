import React from "react";

function Student(props) {
  return (
    <div className="student">
      <h2>Student Information</h2>

      <p>
        <b>Name:</b> {props.name}
      </p>

      <p>
        <b>ID:</b> {props.id}
      </p>

      <p>
        <b>Course:</b> {props.course}
      </p>

      <p>
        <b>Attendance:</b> {props.attendance}
      </p>
    </div>
  );
}

export default Student;