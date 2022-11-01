import React from 'react'

const tab = (props) => {

    //  Destructuring props into "tab", "index" and "setIndex"
    const {tab,index,setIndex} = props;
    // Destructuring the properties of each Tab object into "label" and "content" variables
    const {label} = tab;

    const tabSelected = (e, index) => {    
        setIndex(index);
    }

    return (
        <>
            <button 
                onClick = { e => tabSelected(e, index) } 
                className="btn btn-secondary d-inline-block mx-2 px-2">
                    {label}
            </button>
        </>
    )
}

export default tab