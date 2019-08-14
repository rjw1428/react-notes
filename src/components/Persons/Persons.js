import React, { Component, PureComponent } from 'react'
import Person from './Person/Person'

// const persons = (props) => props.persons.map((person, index) => {
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("Persons.js getDerivedStateFromProps")
    //     return state
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Persons.js shouldComponentUpdate")
    //     return nextProps.persons !== this.props.persons //Shallow vs Deep comparison of lists
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate')
        return { message: 'Snapshot!'}
    }

    componentDidUpdate(pervProps, prevState, snapshot) {
        console.log('Persons.js didUpdate(]')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount()')
    }

    render() {
        console.log('Persons.js rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age="29"
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons