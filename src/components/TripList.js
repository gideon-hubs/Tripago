import React, { useState, useEffect } from 'react'
import './TripList.css'

export default function TripList() {
    const [Trips, setTrips] = useState([])
    const [url, setUrl] = useState(['http://localhost:3000/trips'])

    useEffect(() => {
        fetch(url)
    .then(response => response.json())
    .then(json => setTrips(json))
    }, [url])


    const getTrips = (e) => {
        e.preventDefault();
        setUrl('http://localhost:3000/trips?loc=europe')
    }

    const getAllTrips = (e) => {
        e.preventDefault();
        setUrl('http://localhost:3000/trips')
    }

  return (
    <>
    <div className='trip-list'>
    <h2>TripList</h2>
    <ul>
        {Trips.map(trip => (
            <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
            </li>
        ))}
    </ul>

        <div className='filters'>
        <button onClick={getTrips}>European Trips</button>
        <button onClick={getAllTrips}>All Trips</button>
        </div>


    </div>
    </>
  )
}
