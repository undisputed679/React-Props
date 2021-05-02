import React, { Component } from 'react'
import Prop2 from './Prop2'

export default class Prop1 extends Component {
    state = {
        persons: [
            {name:"max",age:"28"},
            {name:"milan",age:"34"},
            {name:"roger",age:"23"}
        ]
    }

    switchnameHandler = () =>{
        console.log("i am clicked");
        this.setState({
            persons: [
                {name:"name changed",age:"28"},
                {name:"milan",age:"34"},
                {name:"roger",age:"age changed"}
            ]
        })
    }
    render() {
        return (
            <div>
                <h1>this is also react page</h1>
                <button onClick={this.switchnameHandler}>switch name</button>
                <Prop2 name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Prop2 name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Prop2 name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        )
    }
}
