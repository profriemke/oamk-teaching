import React, {Component} from 'react';

class StudentAdd extends Component {
    constructor (props) {
        super(props);
        this.state={
            name:"Jane",

        }
    }

    handleNameChange=(e)=>{
        this.setState({name:e.target.value});

    }
    render(){
        return(

            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </form>
            
            </div>

        )

    }

}

export default StudentAdd;