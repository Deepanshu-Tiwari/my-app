import React, { Component } from 'react';
import  './Person.css';

class Person extends Component {

        render(){
            console.log("[person.js] rendering...")
            return(
                <div className="person">
                    <p onClick={this.props.click}>my name is {this.props.name} and my age is {this.props.age}</p>
                    <input type="text" placeholder="Name" onChange={this.props.changed} value={this.props.name}></input>
                </div>
            )
            }
            
        
        
  
}

export default Person;