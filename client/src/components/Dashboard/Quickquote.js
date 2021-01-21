import React from 'react'
import { FaFastForward, FaExpandArrowsAlt } from 'react-icons/fa'
function Quickquote() {
    return (
        <div className="quickquotecontainer">
            <header className="quickquotetitle"><div><FaFastForward className="fastforward" />  Quick Quote </div><FaExpandArrowsAlt className="expandicon" /></header>
            <form className="quickquoteform">
                <input type="text" name="from" placeholder="FROM" />
                <input type="text" name="destination" placeholder="DESTINATION" />
                <input type="text" name="departDate" placeholder="DEPART DATE" />
                <input type="text" name="returnDate" placeholder="RETURN DATE" />
                <input type="text" name="people" placeholder="PEOPLE" />
                <input type="text" name="transportation" placeholder="TRANSPORTATION" />
                <input type="text" name="name" placeholder="NAME" />

                <button type="submit" className="quickquotesubmit">Create a quote</button>
            </form>        </div>
    )
}

export default Quickquote
