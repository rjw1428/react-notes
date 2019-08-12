import React from 'react';
import styles from './Person.css';
// import Radium from 'radium'

const person = (props) => {
    // const style = {
    //     '@media (max-width: 800px)': {
    //        width: '200px',
    //        background: 'green'
    //     }
    // }
    return (
        // <div className={'Person'} style={style}>  
        <div className={styles.Person}> 
            <p onClick={props.click}>My name is {props.name} and I am {Math.floor(Math.random() * 30)} ({props.age}) years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

// export default Radium(person)
export default person