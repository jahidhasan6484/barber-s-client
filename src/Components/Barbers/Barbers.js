import React, { useEffect, useState } from 'react';
import ShowBarbers from '../ShowBarbers/ShowBarbers';
import './Barbers.css';


const Barbers = () => {
  const [stylists, setStylists] = useState([]);

  useEffect(() => {
    fetch('https://infinite-garden-56670.herokuapp.com/stylists')
      .then(res => res.json())
      .then(data => {
        setStylists(data)
        // setLoading(false)
      })
  }, [])

    return (
        <div className="container barbers">
        <h3 className="title" id="barbersTitle">OUR BARBERS AND STYLISTS</h3>
        <div className="row">  
        {
            stylists.map((stylist => <ShowBarbers key = {stylist._id} stylist = {stylist}></ShowBarbers>))
        }
        </div>
        
      </div>
    );
};

export default Barbers;