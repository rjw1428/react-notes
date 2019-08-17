import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
    const toggleButtonRef = useRef(null)
    
    // useEffect(() => {
    //     console.log('Cockpit.js useEffect()')
    //     setTimeout(()=>{
    //         alert('Fetch Data From Cloud')
    //     }, 1000)
    // }, [props.persons]) //What state change triggers this effect
    useEffect(() => {
        console.log('Cockpit.js useEffect()')
        const timer=setTimeout(()=>{
            alert('Fetch Data From Cloud')
        }, 1000)
        toggleButtonRef.current.click()
        return () => {
            clearTimeout(timer)
            console.log('Cockpit.js cleanup function')
        }
    }, [])

    useEffect(()=>{
        console.log('Cockpit.js 2nd useEffect()')
        return () => {
            console.log('Cockpit.js 2nd cleanup function')
        }
    }) 

    const assignedClasses = [];
    let btnClass = []
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.personsListLengthh <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.personsListLength <= 1) {
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is some description text.</p>
            <button
                className={btnClass}
                ref = {toggleButtonRef}
                onClick={props.onClick}
                >Toggle</button>
        </div>
    );
}

// export default cockpit
export default React.memo(cockpit)
