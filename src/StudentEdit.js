import React, { Component } from 'react';

class StudentEdit extends Component {
  constructor(props) {
    console.log('construct');
    super(props);
    //const x=props.students;
    const student=props.students.find( (x) => x.id === props.editId);

    this.state={
        editId:props.editId,
        name:student.name,
        firstname:student.firstname,
        enrolled:student.enrolled,
    }
  }
  handleNameChange=(e)=>{
    this.setState({name:e.target.value});
  }
  handleFirstnameChange=(e)=>{
    this.setState({firstname:e.target.value});
  }
  handleEnrolledChange=(e)=>{
    this.setState({enrolled:e.target.value});
  }
  handleSubmit=(e)=>{
     e.preventDefault();
    this.props.click({id:this.state.editId,name:this.state.name,firstname:this.state.firstname, enrolled:this.state.enrolled});
  }

  render() { 
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
         No. {this.state.editId}
        </label>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          First Name:
          <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} />
        </label>
        <label>
          Enrolled:
          <select value={this.state.enrolled} onChange={this.handleEnrolledChange} >
                    <option value="">Set enrollment</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
          </select>
        </label>
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}

export default StudentEdit;
