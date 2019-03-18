import React, { Component } from 'react';
import './App.css';

class StudentAdd extends Component {
  constructor(props) {
    console.log('construct');
    super(props);
    this.state={
        state:'button',
        add:props.add
    }
  };
  handleNameChange=(e)=>{
    this.setState({name:e.target.value});

  }
  handleIdChange=(e)=>{
    this.setState({id:e.target.value});

  }
  handleFirstnameChange=(e)=>{
    this.setState({firstname:e.target.value});
  }
  handleEnrolledChange=(e)=>{
    this.setState({enrolled:e.target.value});
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.state.add({id:this.state.id,name:this.state.name,firstname:this.state.firstname, enrolled:this.state.enrolled});
    this.setState({state:'button', id:'', name:'', firstname:'', enrolled:''});
  }
  handleAddStudent=()=> {
    this.setState({state:'form'});
  }
  handleCancel=(e)=>{
    this.state.add(null);
    this.setState({state:'button', id:'', name:'', firstname:'', enrolled:''});
 
  }

  render() {
    return (
      <div id="addForm">
        { this.state.state==='button' ?
          <button onClick={this.handleAddStudent}>Add Student</button>
        :
            <div>
              <h2>Add Student</h2>
              <form onSubmit={this.handleSubmit}>
                <label for="sid">Student-Id:</label>
                  <input type="text" id="sid" name="sid" value={this.state.id} onChange={this.handleIdChange} />
                <br/>
                <label>
                  Name:
                  <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <br/>
                <label>
                  First Name:
                  <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} />
                </label>
                <br/>
                <label>
                  Enrolled:
                  <select value={this.state.enrolled} onChange={this.handleEnrolledChange} >
                    <option value="">Set enrollment</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </label>
                <br/>
                <input type="submit" value="Submit" /> <button onClick={this.handleCancel}>Cancel</button>
              </form>
            </div>
        }
      </div>
    );
  }
}

export default StudentAdd;
