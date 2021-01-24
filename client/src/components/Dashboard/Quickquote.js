import {useState} from 'react'
import { FaFastForward, FaExpandArrowsAlt } from 'react-icons/fa'
function Quickquote(props) {

    const [from, setFrom] = useState()
    const [destination, setDestination] = useState()
    const [departDate, setDepartDate] = useState()
    const [returnDate, setReturnDate] = useState()
    const [people, setPeople] = useState(1)
    const [transportation, setTransportation] = useState()
    const [name, setName] = useState()

    function handleClick(event) {
        event.preventDefault()
        if(!from || !destination || !departDate || !returnDate || !people || !name){
            alert('Please fill out all fields')
            return
        }
        
        props.onAdd({
            departure_airport: from,
            destination: destination,
            departure_date: departDate,
            return_date: returnDate,
            people: people,
            optional_transport: transportation,
            full_name: name,
            phone_number:"403-877-4423",
            user_address: "36 Anders St",
            price: "1000"
        })

        setFrom('')
        setDestination('')
        setDepartDate('')
        setReturnDate('')
        setPeople('')
        setTransportation('')
        setName('')

        
    }
    return (
        <div className="quickquotecontainer">
            <header className="quickquotetitle"><div><FaFastForward className="fastforward" />  Quick Quote </div><FaExpandArrowsAlt className="expandicon" /></header>
            <form className="quickquoteform">
                <input type="text" name="from" placeholder="FROM" value={from} onChange={(e) => {
                    setFrom(e.target.value)
                }}/>
                <input type="text" name="destination" placeholder="DESTINATION" value={destination} onChange={(e) => {
                    setDestination(e.target.value)
                }} />
                <input type="text" name="departDate" placeholder="DEPART DATE" value={departDate} onChange={(e) => {
                    setDepartDate(e.target.value)
                }} />
                <input type="text" name="returnDate" placeholder="RETURN DATE" value={returnDate} onChange={(e) => {
                    setReturnDate(e.target.value)
                }} />
                <select type="text" name="people" placeholder="PEOPLE" onChange={(e) => {
                    setPeople(e.target.value)
                }} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select type="text" name="transportation" placeholder="TRANSPORTATION" onChange={(e) => {
                    setTransportation(e.target.value)
                }} >
                    <option value="null">No Transportation</option>
                    <option value="rentalCar">Rental Car</option>
                    <option value="shuttle">Shuttle</option>
                </select>                
                <input type="text" name="name" placeholder="NAME" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />

                <button type="submit" className="quickquotesubmit" onClick={handleClick}>Create a quote</button>
            </form>      
        </div>
    )
}

export default Quickquote
