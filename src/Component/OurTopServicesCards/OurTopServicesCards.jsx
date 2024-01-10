import React, { useEffect, useState } from 'react'
import './OurTopServicesCards.scss'

function OurTopServicesCards() {
    const [fetchdata, setFetchdata] = useState([])

    useEffect(() => {
        fetch("http://localhost:3300/")
            .then((res) => res.json())
            .then((data) => setFetchdata(data))
            console.log(fetchdata);
    }, [])

    return (
        <div>
            <div className="our_services_cards">
                {fetchdata.map((x) => (
                    <div className='our_services_card_container'>
                    <ul  className='our_services_card' key={x._id}>
                        <li className={`${x.image} card_image`} >
                        </li>
                        <li className='card_name'>{x.name}</li>
                        <li>{x.description}</li>
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTopServicesCards