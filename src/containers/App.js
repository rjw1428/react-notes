import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("App.js constructor")
    this.state = {
      persons: [
        { id: '123', name: "R-Dub" },
        { id: '456', name: "Gina" },
        { id: '789', name: "Joe" }
      ],
      showPersons: false,
      showCockpit: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps')
    return state //Updated State
  }

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate')
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
    const people = this.state.persons.slice()
    people.splice(index, 1)
    this.setState({ persons: people })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('App.js render')
    let list = null

    if (this.state.showPersons) {
      list = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      )
    }

    return (
      <div className={styles.App}>
        <button onClick={()=>{
          this.setState({showCockpit:false})
          }}>Remove Cockpit
        </button>
        {this.state.showCockpit?(
          <Cockpit
          title={this.props.appTitle}
          onClick={this.toggleNamesHandler}
          showPersons={this.state.showPersons}
          // persons={this.state.persons}
          personsListLength={this.state.persons.length}
        />):null}
        {list}
      </div>
    );
  }
}



export default App
