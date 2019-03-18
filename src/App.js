import React, { Component } from 'react';
import './App.css';
import StudentList from './StudentList';
import StudentEdit from './StudentEdit';
import StudentAdd from './StudentAdd';

class App extends Component {
  constructor() {
    super();
    this.state={
      students:[
      {id:1, name:'Xaman', firstname:'Jane', enrolled:'no'},
      {id:2, name:'Aman', firstname:'Karl', enrolled:'yes'},
      ],
      edit:false,
      editId:0,
    }
  };
  handleStudentClick=(id)=>{
    this.setState({edit:true});
    this.setState({editId:id});
    console.log("id click "+id);
  }
  handleStudentAdd=(add)=>{
    if (add !=null){
    let stateNew=this.state;
    stateNew.students.push(add);
    this.setState(stateNew);
    }
  }
  handleStudentEdit=(edit)=>{
    console.log("editid "+this.state.editId);
    console.log(edit);
    const studentId=this.state.students.findIndex( (x) => x.id ===this.state.editId);
    let stateNew=this.state;
    stateNew.students[studentId]={id:edit.id, name:edit.name, firstname:edit.firstname, enrolled: edit.enrolled}
    this.setState(stateNew);    
    this.setState({edit:false, editId:0});
  }

  handleSortIdClick=()=>{
    let stateNew=this.state;
    stateNew.students.sort((x,y) =>{return x.id - y.id});
    this.setState(stateNew); 
  }
  handleSortNameClick=()=>{
    let stateNew=this.state;
    stateNew.students.sort((x,y) =>{return x.name.localeCompare(y.name)});
    this.setState(stateNew); 
  }
 


  render() {
    return (
      <div className="App">

        { (this.state.edit===true) ?
                <div>
                  <StudentList students={this.state.students} click={this.handleStudentClick} />
                  <StudentEdit students={this.state.students} editId={this.state.editId} click={this.handleStudentEdit} />
                </div>
                :
                <div>
                  <StudentList students={this.state.students} click={this.handleStudentClick} />
                  <button onClick={this.handleSortIdClick} >Sort (id)</button> 
                  <button onClick={this.handleSortNameClick} >Sort (name)</button>   
                  <StudentAdd students={this.state.students} add={this.handleStudentAdd}/>
                </div>
        }
      </div>
    );
  }
}

export default App;
