import React, {Component} from 'react';
import Student from './Student';

class StudentList extends Component {
    constructor (props) {
        super(props);
        this.state={
        students:props.students
        }
    }


    render(){
        return(

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Firstname</th>
                            <th>Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((s)=> {
                            return(
                                <Student 
                                key={s.id}
                                id={s.id}
                                name={s.name} 
                                firstname={s.firstname}
                                enrolled={s.enrolled}/>
                            )

                        })
                        

                        }
                    </tbody>
                </table>
            </div>

        )

    }

}

export default StudentList;