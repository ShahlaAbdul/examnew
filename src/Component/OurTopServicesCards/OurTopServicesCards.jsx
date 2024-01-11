import React, { useContext, useEffect, useState } from "react";
import "./OurTopServicesCards.scss";
import { SearchContext } from "../../UseContext/SearchContext";

function OurTopServicesCards() {
  const [fetchdata, setFetchdata] = useState([]);
    //   const { searchdata, searchbyFilter } = useContext(SearchContext);
    const { searchdata } = useContext(SearchContext);

  useEffect(() => {
      FetchDatas();
      
  }, []);

  function FetchDatas() {
    fetch("http://localhost:3300/")
      .then((res) => res.json())
      .then((data) => setFetchdata(data));
  }

  function Deletedata(id) {
    fetch("http://localhost:3300/" + id, { method:"Delete" })
      .then((res) => res.json())
      .then((data) => {
          FetchDatas();
      });
  }

  return (
    <div>
              
      <div className="our_services_cards">
        {fetchdata
          .filter((x) =>
             x.name.toLowerCase().includes(searchdata.toLowerCase()) )
          .map((x) => (
            <div className="our_services_card_container">
              <ul className="our_services_card" key={x._id}>
                <li className={`${x.image} card_image`}></li>
                <li className="card_name">{x.name}</li>
                <li>{x.description}</li>
                <button className="button" onClick={() => Deletedata(x._id)}>
                  Delete
                </button>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurTopServicesCards;
