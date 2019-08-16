import React from 'react'

//By setting default arguments, it forces a specific use case for the HOC
const withClass=(WrappedComponent, className)=>{
    return props=> (
        <div className={className}>
            <WrappedComponent/>
        </div>
    )
}

export default withClass