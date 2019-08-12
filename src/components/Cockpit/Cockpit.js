import React from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = []
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Woo! Look at this React app</h1>
            <p className={assignedClasses.join(' ')}>This is some description text.</p>
            <button
                className={btnClass}
                onClick={props.onClick}
                >Toggle</button>
        </div>
    );
}

export default cockpit
