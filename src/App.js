import React, { Component } from 'react';
// import React, { useState } from 'react'
import styles from './App.css';
import Person from './Person/Person'
// import Radium, { StyleRoot }from 'radium'

// class App extends Component {
//   state = {
//     persons: [
//       "R-Dub", 
//       "Gina", 
//       "Joe"
//     ]
//   }

//   switchNameHandler = () => {
//     let newObj=Object.assign({},this.state.persons)
//     let x=newObj[0]
//     newObj[0]=newObj[1]
//     newObj[1]=x
//     this.setState({
//       persons: newObj
//     })
//     console.log("CLICK")
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi There, Im New</h1>
//         <button onClick={this.switchNameHandler}>Switch</button>
//         <Person name={this.state.persons[0]} age="29" />
//         <Person name={this.state.persons[1]} age="30">I am one hotty with a body</Person>
//         <Person name={this.state.persons[2]} age="28" />
//       </div>
//       // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "My Name is Ryan!"))
//     );
//   }
// }

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       "R-Dub",
//       "Gina",
//       "Joe"
//     ],
//     otherState: "newSomething"
//   });

//   const switchNameHandler = (newName) => {
//     let newObj=Object.assign({}, personsState)
//     newObj[0] = newObj[1]
//     newObj[1] = newName

//     setPersonsState({
//       persons: newObj
//     })
//     console.log("CLICK")
//   }

//   const nameChangeHandler = (event) => {
//     let next=personsState.persons
//     next[0]=event.target.value
//     setPersonsState({
//       persons: next
//     })
//   }

//   const style = {
//     backgroundColor: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer'
//   }

//   return (
//     <div className="App">
//       <h1>Hi There, Im New</h1>
//       <button style={style} onClick={()=>switchNameHandler('Jason')}>Switch</button>
//       <Person
//         name={personsState.persons[0]}
//         age="29"
//         changed={nameChangeHandler}
//       />
//       <Person
//         name={personsState.persons[1]}
//         age="30"
//         click={switchNameHandler.bind(this, 'Ryan')}
//       >
//         I am one hotty with a body
//       </Person>
//       <Person
//         name={personsState.persons[2]}
//         age="28"
//       />
//     </div>
//     // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "My Name is Ryan!"))
//   );
// }

class App extends Component {
  state = {
    persons: [
      {id: '123', name: "R-Dub"},
      {id: '456', name: "Gina"},
      {id: '789', name: "Joe"}
    ],
    showPersons: true
  }

  toggleNamesHandler = () => {
    const newPersonState = !this.state.showPersons
    this.setState({
      showPersons: newPersonState
    })
    console.log("CLICK")
  }

  deletePersonHandler = (index) => {
    console.log(index)
    const people=this.state.persons.slice()
    people.splice(index,1)
    this.setState({persons:people})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>p.id===id)
    const person = Object.assign({},this.state.persons[personIndex])
    person.name=event.target.value
    const persons = [...this.state.persons]
    persons[personIndex]=person 
    this.setState({
      persons: persons
    })
  }

  render() {
    let list = null
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   borderWidth: '3px'
      // }
    }

    let btnClass='';

    if (this.state.showPersons) {
      list = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            name={person.name} 
            age="29" 
            click={() => this.deletePersonHandler(index)}
            key={person.id} 
            changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      style.backgroundColor='red'
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   borderWidth: '3px'
      // }
      btnClass=styles.Red
    } 

    // let classes=['red','bold'].join(' ');
    let classes=[]
    if (this.state.persons.length <=2) {
      classes.push( styles.red)
    }
    if (this.state.persons.length <=1) {
      classes.push( styles.bold)
    }
    return (
      // <StyleRoot>
      <div className={ styles.App}>
        <h1>Woo! Look at this React app</h1>
        <p className={classes.join(' ')}>This is some description text.</p>
        <button 
        className={btnClass}
        onClick={this.toggleNamesHandler}
        style={style}>Toggle</button>
        {list}
      </div>
      // </StyleRoot>
    );
  }
}
// export default Radium(App);
export default App
