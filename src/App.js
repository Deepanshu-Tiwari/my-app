import React,{Component} from 'react';
import './App.css';
import Persons from "./Components/Persons";


class App extends Component{
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
  }

  state= {
    persons: [
      {id:'00001', name:"Deepanshu", age:"23"},
      {id:'00002' ,name:"Ansh", age:"23"},
      {id:'00003',name:"Deep" ,age:"23"}
    ],
    showPerson:false 
  }

static getDerivedStateFromProps(props,state){
  console.log("[App.js] getDerivedStateFromProps",props);
  return state;
}

// componentWillMount(){
//   console.log("[App.js] componentWillMount")
// }

componentDidMount(){
  console.log("[App.js] componentDIdMount");
}

shouldComponentUpdate(){
  console.log("[App.js] ShouldComponentUpdate");
  return true;
}

componentDidUpdate(){
  console.log("[App.js] componentDidUpdate")
}


  /////////////
nameChangeHandler= (event,id)=>{
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id===id;
  })

const person = {...this.state.persons[personIndex]}

person.name = event.target.value;

const persons = [...this.state.persons];

persons[personIndex] = person;

this.setState({persons:persons})

}


togglePersonalHandler = ()=>{
  const doesShow = this.state.showPerson;
  this.setState({
    showPerson: !doesShow
  });
}
///////////////////
deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];    // copy of the old array but not the old array itself using spread operator.
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

  ////////////
  render(){
    console.log("[App.js] Render")
    let persons = null;
    if(this.state.showPerson){
      persons = (
                  <Persons
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}
                  persons={this.state.persons}
      
      /> );
/////////////////////////////////////////////////////////////////////////////////
      //   <div>
      //   <Person name="deepanshu" age="24">swimming</Person>
      //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangeHandler}>cricket</Person>
      //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>carrom</Person>
      //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler}>chess</Person>
      // </div>
       
     }
// nn
//////////////////////////////////////////////////////////////////////////////////


    return(
        <div className="App">
          <h1>{this.props.title}</h1>
          <button className="button" onClick={this.togglePersonalHandler} type="button">Toggle Person</button>
          {persons}
        </div>
    );
  }

}

export default App;




