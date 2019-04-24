import React from 'react';

function Student(props){
return(
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.firstname}</td>
        <td>{props.enrolled}</td>
    </tr>

)

}

export default Student;