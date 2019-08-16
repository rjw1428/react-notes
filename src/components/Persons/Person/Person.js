import React, { Component } from 'react';
import styles from './Person.css';
import Auxil from '../../hoc/Auxil'
import withClass from '../../hoc/WithClass'
class Person extends Component {
    render() {
        console.log(this.props.name + " is rendering...")
        return (
            <Auxil>
                <p key="el1" onClick={this.props.click}>My name is this.{this.props.name} and I am {Math.floor(Math.random() * 30)} ({this.props.age}) years old</p>
                <p key="el2">{this.props.children}</p>
                <input key="el3" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Auxil>)
    };
}

export default withClass(Person, styles.Person)