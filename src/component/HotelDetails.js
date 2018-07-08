import React from "react";

const HotelDetails = ({ hotelDetails, handleBookRoom }) => {
  let hotelDetailsNode = hotelDetails.map((h, i) => (
    <div className="card" key={i}>
      <img className="card-img-top" src={h.photo_url} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{h.name}</h5>

        <p class="card-text">
          Available Rooms: <strong>{h.total_room}</strong>
        </p>

        <button onClick={() => handleBookRoom(h)} className="btn btn-primary">
          Book
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <h3>Hotel details</h3>
      <div className="hotel-details">{hotelDetailsNode}</div>
    </div>
  );
};

export default HotelDetails;
