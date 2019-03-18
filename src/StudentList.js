import React from 'react';
import Student from './Student';

function StudentList(props) {
  return( 
      <div>
      <h1>Student List</h1>
      University of Applied Code Samples
      <h3>Course 404: Fly Fishing for Intermediates</h3>
        <table>
            <thead>
            <tr>
                <th>StudentID</th>
                <th>Name</th>
                <th>Firstname</th>
                <th>Enrolled</th>
            </tr>
            </thead>
            <tbody>
                {props.students.map((s) => {return(<Student key={s.id} id={s.id} name={s.name} firstname={s.firstname} enrolled={s.enrolled} click={()=>props.click(s.id)}/>)})}
            </tbody>
        </table>
      </div>
  );
}

export default StudentList;
