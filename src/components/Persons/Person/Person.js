import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component {
    render() {
        console.log(this.props.name + " is rendering...")
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>My name is this.{this.props.name} and I am {Math.floor(Math.random() * 30)} ({this.props.age}) years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    };
}

export default Person