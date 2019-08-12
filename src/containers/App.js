import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Perons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: "R-Dub" },
      { id: '456', name: "Gina" },
      { id: '789', name: "Joe" }
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
        <Cockpit
          onClick={this.toggleNamesHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {list}
      </div>
    );
  }
}
export default App
