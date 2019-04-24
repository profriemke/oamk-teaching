import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Oamk from './Oamk';
import StudentList from './StudentList';


class App extends Component {
constructor (){
  super();
  this.state={
    students:[
      {id:1, name:'Smith', firstname:'Karen', enrolled:'no'},
      {id:2, name:'Duck', firstname:'Donald', enrolled:'yes'},
          ]
  }
}

  render() {
    return (
      <div className="App">
  
        <Oamk title="Hello" text="Oulu"/>
        <StudentList students={this.state.students}/>
      </div>
    );
  }
}

export default App;
