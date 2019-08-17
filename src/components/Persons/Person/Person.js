import React, { Component } from 'react';
import styles from './Person.css';
import Auxil from '../../hoc/Auxil'
import withClass from '../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElementRef.focus()
        this.inputElementRef.current.focus()
    }
    render() {
        console.log(this.props.name + " is rendering...")
        return (
            <Auxil>
                <AuthContext.Consumer>
                   {(context) => context.authenticated ? <p>Logged In</p> : <p>Unregisterd User</p>}
                </AuthContext.Consumer>
                <p key="el1" onClick={this.props.click}>My name is this.{this.props.name} and I am {Math.floor(Math.random() * 30)} ({this.props.age}) years old</p>
                <p key="el2">{this.props.children}</p>
                <input
                    key="el3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxil>
        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, styles.Person)