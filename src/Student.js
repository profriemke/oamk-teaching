import React from 'react';
function StudentList(props) {
  return( 
        <tr onClick={()=>{props.click(props.id)}}>
        <td>{props.id}</td> 
        <td>{props.name}</td> 
        <td>{props.firstname}</td> 
        <td>{props.enrolled}</td> 
        </tr>
  )
}

export default StudentList;

